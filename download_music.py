import urllib.request
import zipfile
import os

url = "https://opengameart.org/sites/default/files/JRPG%20Music%20Pack%20%231%20%5BExploration%5D%20by%20Juhani%20Junkala.zip"
dest = r"C:\PROJET\Book Quest\public\audio\jrpg_exploration.zip"
extract_to = r"C:\PROJET\Book Quest\public\audio\jrpg_exploration"

print("Downloading...")
urllib.request.urlretrieve(url, dest)
print("Extracting...")
with zipfile.ZipFile(dest, 'r') as zip_ref:
    zip_ref.extractall(extract_to)

os.remove(dest)
print("Done!")
