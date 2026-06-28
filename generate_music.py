import wave
import struct
import math
import random
import os

# Create audio directory
os.makedirs('public/audio', exist_ok=True)

SAMPLE_RATE = 44100

def generate_tone(frequency, duration, volume=0.5, wave_type='square'):
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    for i in range(num_samples):
        t = float(i) / SAMPLE_RATE
        if frequency == 0:
            sample = 0
        else:
            if wave_type == 'square':
                sample = volume * (1 if math.sin(2 * math.pi * frequency * t) > 0 else -1)
            elif wave_type == 'sawtooth':
                sample = volume * (2 * (t * frequency - math.floor(t * frequency + 0.5)))
            elif wave_type == 'noise':
                sample = volume * random.uniform(-1, 1)
            else: # sine
                sample = volume * math.sin(2 * math.pi * frequency * t)
        
        # Apply simple envelope (attack and decay) to avoid clicking
        envelope = 1.0
        attack_time = 0.05
        decay_time = 0.05
        if t < attack_time:
            envelope = t / attack_time
        elif t > duration - decay_time:
            envelope = (duration - t) / decay_time
            
        samples.append(sample * envelope)
    return samples

def save_wav(filename, samples):
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1) # Mono
        wav_file.setsampwidth(2) # 2 bytes per sample (16-bit)
        wav_file.setframerate(SAMPLE_RATE)
        for s in samples:
            # Clamp to 16-bit range
            val = int(max(-1.0, min(1.0, s)) * 32767)
            data = struct.pack('<h', val)
            wav_file.writeframesraw(data)

# Frequencies for notes
notes = {'C3': 130.81, 'Eb3': 155.56, 'G3': 196.00, 'C4': 261.63, 'Eb4': 311.13, 'G4': 392.00, 'C5': 523.25}

# 1. Title Theme (Heroic Arpeggio)
title_samples = []
for _ in range(4): # Loop 4 times
    for note in ['C3', 'G3', 'C4', 'Eb4', 'G4', 'Eb4', 'C4', 'G3']:
        title_samples.extend(generate_tone(notes[note], 0.2, volume=0.3, wave_type='square'))
save_wav('public/audio/title.wav', title_samples)

# 2. Exploration (Ambient Drone + Wind)
exp_samples = []
for i in range(8): # 8 seconds loop
    drone = generate_tone(65.41, 1.0, volume=0.4, wave_type='sine') # Low C2
    wind = generate_tone(0, 1.0, volume=0.1, wave_type='noise')
    # Mix drone and wind
    mixed = [d + w for d, w in zip(drone, wind)]
    exp_samples.extend(mixed)
save_wav('public/audio/exploration.wav', exp_samples)

# 3. Combat (Fast aggressive bass)
combat_samples = []
for _ in range(8): # Loop
    combat_samples.extend(generate_tone(130.81, 0.15, volume=0.6, wave_type='sawtooth')) # C3
    combat_samples.extend(generate_tone(0, 0.05, volume=0)) # rest
    combat_samples.extend(generate_tone(146.83, 0.15, volume=0.6, wave_type='sawtooth')) # D3
    combat_samples.extend(generate_tone(0, 0.05, volume=0)) # rest
    combat_samples.extend(generate_tone(130.81, 0.15, volume=0.6, wave_type='sawtooth')) # C3
    combat_samples.extend(generate_tone(0, 0.05, volume=0)) # rest
    combat_samples.extend(generate_tone(0, 0.2, volume=0.5, wave_type='noise')) # Crash
save_wav('public/audio/combat.wav', combat_samples)

# 4. Victory Jingle
vic_samples = []
for note in ['C4', 'E4', 'G4', 'C5']:
    vic_samples.extend(generate_tone(notes.get(note, 261.63 if note=='C4' else 329.63 if note=='E4' else 392.00 if note=='G4' else 523.25), 0.15, volume=0.4, wave_type='square'))
vic_samples.extend(generate_tone(523.25, 0.8, volume=0.4, wave_type='square')) # Hold C5
save_wav('public/audio/victory.wav', vic_samples)

# 5. Death Jingle
death_samples = []
for note in ['C4', 'G3', 'Eb3', 'C3']:
    death_samples.extend(generate_tone(notes[note], 0.3, volume=0.4, wave_type='sawtooth'))
death_samples.extend(generate_tone(65.41, 1.0, volume=0.4, wave_type='sawtooth')) # Hold C2
save_wav('public/audio/death.wav', death_samples)

print("Generated all audio files.")
