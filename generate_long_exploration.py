import numpy as np
from scipy.io import wavfile
import os
import random

SAMPLE_RATE = 22050

def note_to_freq(note, octave):
    if note == 'REST': return 0
    notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    n = notes.index(note)
    return 440.0 * (2.0 ** ((octave - 4) + (n - 9) / 12.0))

class Synth:
    def __init__(self, bpm=120):
        self.bpm = bpm
        self.tracks = []
        
    def add_track(self, waveform='square', volume=0.5, envelope=(0.01, 0.1, 0.5, 0.1)):
        self.tracks.append({
            'waveform': waveform,
            'volume': volume,
            'envelope': envelope, # A, D, S, R in seconds
            'notes': [] # list of (note_freq, start_beat, duration_beat)
        })
        return len(self.tracks) - 1

    def add_note(self, track_idx, note, octave, start_beat, duration_beat):
        freq = note_to_freq(note, octave) if note != 'REST' else 0
        self.tracks[track_idx]['notes'].append((freq, start_beat, duration_beat))

    def add_sequence(self, track_idx, sequence, start_beat, step=0.5):
        if isinstance(sequence, str):
            seq = []
            for n in sequence.split():
                if n == 'REST':
                    seq.append(('REST', 4, 1))
                else:
                    seq.append((n[:-1], int(n[-1]), 1))
            sequence = seq
            
        current_beat = start_beat
        for note, oct, dur in sequence:
            self.add_note(track_idx, note, oct, current_beat, dur * step)
            current_beat += dur * step

    def render(self):
        max_beat = 0
        for track in self.tracks:
            for note in track['notes']:
                end_beat = note[1] + note[2]
                if end_beat > max_beat:
                    max_beat = end_beat
                    
        total_duration = (max_beat / self.bpm) * 60.0
        total_samples = int((total_duration + 1.0) * SAMPLE_RATE)
        mix = np.zeros(total_samples, dtype=np.float32)
        
        beat_dur = 60.0 / self.bpm
        
        for track in self.tracks:
            a, d, s_lvl, r = track['envelope']
            vol = track['volume']
            wave_type = track['waveform']
            
            for freq, start_beat, duration_beat in track['notes']:
                if freq == 0:
                    continue
                    
                start_sec = start_beat * beat_dur
                dur_sec = duration_beat * beat_dur
                start_idx = int(start_sec * SAMPLE_RATE)
                dur_idx = int(dur_sec * SAMPLE_RATE)
                
                a_idx = int(a * SAMPLE_RATE)
                d_idx = int(d * SAMPLE_RATE)
                r_idx = int(r * SAMPLE_RATE)
                
                if a_idx + d_idx + r_idx > dur_idx:
                    a_idx = min(a_idx, int(dur_idx * 0.1))
                    r_idx = min(r_idx, int(dur_idx * 0.3))
                    d_idx = max(0, dur_idx - a_idx - r_idx)
                
                s_idx = dur_idx - a_idx - d_idx - r_idx
                if s_idx < 0: s_idx = 0
                
                env_a = np.linspace(0, 1, a_idx)
                env_d = np.linspace(1, s_lvl, d_idx)
                env_s = np.full(s_idx, s_lvl)
                env_r = np.linspace(s_lvl, 0, r_idx)
                envelope = np.concatenate([env_a, env_d, env_s, env_r])
                
                actual_len = len(envelope)
                t = np.arange(actual_len) / SAMPLE_RATE
                
                if wave_type == 'square':
                    wave = np.sign(np.sin(2 * np.pi * freq * t))
                elif wave_type == 'triangle':
                    wave = 2 * np.abs(2 * (freq * t - np.floor(freq * t + 0.5))) - 1
                elif wave_type == 'saw':
                    wave = 2 * (freq * t - np.floor(freq * t + 0.5))
                elif wave_type == 'noise':
                    wave = np.random.uniform(-1, 1, actual_len)
                    wave = np.convolve(wave, np.ones(5)/5, mode='same')
                else:
                    wave = np.sin(2 * np.pi * freq * t)
                
                signal = wave * envelope * vol
                
                end_idx = start_idx + actual_len
                if end_idx <= total_samples:
                    mix[start_idx:end_idx] += signal
                else:
                    rem = total_samples - start_idx
                    mix[start_idx:] += signal[:rem]
                    
        max_val = np.max(np.abs(mix))
        if max_val > 0:
            mix = mix / max_val * 0.95
            
        return np.int16(mix * 32767)

def save_wav(filename, data):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    wavfile.write(filename, SAMPLE_RATE, data)

def generate_track(filename, bpm, scales, pad_chords, loops=18):
    # loops = 18 at 85 bpm * 16 beats = 203 seconds = ~3m23s
    print(f"Génération de {filename}...")
    s = Synth(bpm=bpm)
    melody = s.add_track('triangle', 0.4, (0.3, 0.4, 0.6, 0.8))
    pad = s.add_track('sine', 0.25, (1.0, 0.5, 0.8, 1.5))
    bass = s.add_track('triangle', 0.35, (0.2, 0.4, 0.4, 0.8))
    
    for loop in range(loops):
        offset = loop * 16
        
        # choose a scale/chord progression for this loop
        scale = random.choice(scales)
        chord = random.choice(pad_chords)
        
        # Melody: 8 notes per 8 beats (step 1.0)
        m_seq = []
        for _ in range(16):
            if random.random() < 0.2:
                m_seq.append(('REST', 4, 1))
            else:
                n = random.choice(scale)
                octave = random.choice([3, 4, 4, 5])
                m_seq.append((n, octave, 1))
        
        s.add_sequence(melody, m_seq, offset, step=1.0)
        
        # Pad: 2 chords per 16 beats
        p_seq = [(chord[0], 3, 8), (chord[1], 3, 8)]
        s.add_sequence(pad, p_seq, offset, step=1.0)
        
        # Bass: 4 notes
        b_seq = [(chord[0], 2, 4), (chord[1], 2, 4), (chord[0], 2, 4), (random.choice(scale), 2, 4)]
        s.add_sequence(bass, b_seq, offset, step=1.0)

    save_wav(f'public/audio/{filename}', s.render())

scales1 = [['D', 'E', 'F', 'G', 'A', 'A#', 'C'], ['D', 'F', 'A', 'C']]
chords1 = [['D', 'C'], ['D', 'A#'], ['F', 'C']]
generate_track('exploration1.wav', 75, scales1, chords1, loops=16)

scales2 = [['E', 'F#', 'G', 'A', 'B', 'C', 'D'], ['E', 'G', 'B', 'D']]
chords2 = [['E', 'D'], ['E', 'C'], ['G', 'D']]
generate_track('exploration2.wav', 80, scales2, chords2, loops=16)

scales3 = [['A', 'B', 'C', 'D', 'E', 'F', 'G'], ['A', 'C', 'E', 'G']]
chords3 = [['A', 'G'], ['A', 'F'], ['C', 'G']]
generate_track('exploration3.wav', 70, scales3, chords3, loops=16)

print("Musiques d'exploration longues générées avec succès.")
