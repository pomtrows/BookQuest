import os
import json

log_file = r"C:\Users\Pomito\.gemini\antigravity\brain\cff18087-5d72-4a92-83ac-37a11a24a945\.system_generated\logs\transcript_full.jsonl"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if "La Traversée Infernale" in line:
                print("Found match in line!")
                print(f"Keys: {data.keys()}")
                if 'type' in data: print(f"Type: {data['type']}")
                if 'source' in data: print(f"Source: {data['source']}")
                if 'content' in data:
                    print(f"Content length: {len(data['content'])}")
                    # print snippet
                    idx = data['content'].find("La Traversée")
                    print(data['content'][max(0, idx-50):idx+100])
        except Exception as e:
            print("Error parsing line", e)
