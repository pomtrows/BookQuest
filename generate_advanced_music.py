import numpy as np
from scipy.io import wavfile
import os

SAMPLE_RATE = 44100

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

print("Génération de title.wav (Thème épique)...")
s = Synth(bpm=100)
melody = s.add_track('square', 0.6, (0.05, 0.2, 0.5, 0.3))
harmony = s.add_track('triangle', 0.4, (0.1, 0.3, 0.6, 0.4))
bass = s.add_track('saw', 0.5, (0.02, 0.3, 0.3, 0.1))

for loop in range(4):
    offset = loop * 16
    s.add_sequence(melody, "A4 REST A4 A4 E5 REST D5 E5 C5 REST C5 C5 B4 REST G4 B4", offset, step=0.5)
    s.add_sequence(melody, "A4 REST A4 A4 E5 REST D5 E5 F5 REST F5 E5 D5 REST E5 C5", offset + 8, step=0.5)
    
    s.add_sequence(bass, "A2 A2 A2 A2 C3 C3 C3 C3 G2 G2 G2 G2 E2 E2 E2 E2", offset, step=0.5)
    s.add_sequence(bass, "A2 A2 A2 A2 C3 C3 C3 C3 F2 F2 F2 F2 G2 G2 G2 G2", offset + 8, step=0.5)
    
    if loop > 0:
        s.add_sequence(harmony, "E4 A4 C5 A4 E4 C5 E5 C5 D4 G4 B4 G4 B3 E4 G4 E4", offset, step=0.25)
        s.add_sequence(harmony, "E4 A4 C5 A4 E4 C5 E5 C5 A3 C4 F4 C4 B3 D4 G4 D4", offset + 8, step=0.25)

save_wav('public/audio/title.wav', s.render())

print("Génération de exploration.wav (Mystérieux et calme)...")
s = Synth(bpm=85)
melody = s.add_track('triangle', 0.5, (0.2, 0.4, 0.7, 0.5))
pad = s.add_track('sine', 0.3, (0.5, 0.5, 0.8, 1.0))
bass = s.add_track('triangle', 0.4, (0.1, 0.4, 0.4, 0.5))

for loop in range(3):
    offset = loop * 16
    s.add_sequence(melody, "D4 REST F4 A4 G4 REST E4 C4 D4 REST A4 G4 F4 REST E4 F4", offset, step=0.5)
    s.add_sequence(melody, "D4 REST F4 A4 C5 REST B4 G4 A4 REST F4 D4 C4 REST D4 E4", offset + 8, step=0.5)
    
    s.add_sequence(pad, "D4 D4 C4 C4", offset, step=2.0)
    s.add_sequence(pad, "D4 D4 C4 C4", offset + 8, step=2.0)
    
    s.add_sequence(bass, "D2 A2 D3 A2 C2 G2 C3 G2 D2 A2 D3 A2 A1 E2 A2 E2", offset, step=0.5)
    s.add_sequence(bass, "D2 A2 D3 A2 F2 C3 F3 C3 A1 E2 A2 E2 C2 G2 C3 G2", offset + 8, step=0.5)

save_wav('public/audio/exploration.wav', s.render())

print("Génération de combat.wav (Rapide, stressant)...")
s = Synth(bpm=140)
melody = s.add_track('saw', 0.6, (0.01, 0.1, 0.3, 0.1))
bass = s.add_track('square', 0.7, (0.01, 0.1, 0.1, 0.05))
drums = s.add_track('noise', 0.4, (0.01, 0.05, 0.0, 0.05))

for loop in range(6):
    offset = loop * 16
    
    s.add_sequence(melody, "E4 E4 E4 F4 G4 G4 F4 E4 D4 D4 D4 E4 F4 F4 E4 D4", offset, step=0.25)
    s.add_sequence(melody, "E4 E4 B4 B4 A4 A4 G4 F4 E4 E4 E4 F4 G4 F4 E4 D4", offset + 4, step=0.25)
    s.add_sequence(melody, "C4 C4 C4 D4 E4 E4 D4 C4 B3 B3 B3 C4 D4 D4 C4 B3", offset + 8, step=0.25)
    s.add_sequence(melody, "A3 A3 A3 B3 C4 C4 B3 A3 B3 B3 E4 E4 B3 B3 E4 E4", offset + 12, step=0.25)
    
    s.add_sequence(bass, "E2 E2 E2 E3 E2 E2 E2 E3 D2 D2 D2 D3 D2 D2 D2 D3", offset, step=0.25)
    s.add_sequence(bass, "C2 C2 C2 C3 C2 C2 C2 C3 B1 B1 B1 B2 B1 B1 B1 B2", offset + 8, step=0.25)
    
    for i in range(16):
        s.add_sequence(drums, "C4 REST", offset + i, step=0.5)

save_wav('public/audio/combat.wav', s.render())

print("Génération de victory.wav (Triomphant)...")
s = Synth(bpm=120)
melody = s.add_track('square', 0.6, (0.05, 0.1, 0.5, 0.2))
harmony = s.add_track('square', 0.5, (0.05, 0.1, 0.5, 0.2))

s.add_sequence(melody, [('C',5,0.5), ('E',5,0.5), ('G',5,0.5), ('C',6,2.0)], 0, step=0.5)
s.add_sequence(harmony, [('C',4,0.5), ('G',4,0.5), ('E',5,0.5), ('E',5,2.0)], 0, step=0.5)
save_wav('public/audio/victory.wav', s.render())

print("Génération de death.wav (Mélancolique)...")
s = Synth(bpm=90)
melody = s.add_track('saw', 0.6, (0.1, 0.2, 0.6, 0.5))
bass = s.add_track('triangle', 0.5, (0.2, 0.4, 0.5, 0.5))

s.add_sequence(melody, [('E',4,1), ('D#',4,1), ('D',4,1), ('C#',4,2)], 0, step=1.0)
s.add_sequence(bass, [('E',2,1), ('B',1,1), ('F#',1,1), ('A',1,2)], 0, step=1.0)
save_wav('public/audio/death.wav', s.render())

print("Terminé !")
