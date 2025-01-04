import json

# Load the data from your JSON file with UTF-8 encoding
with open('games.json', 'r', encoding='utf-8') as file:
    games = json.load(file)

# Create a dictionary to store unique games by their 'id'
unique_games = {}

for game in games:
    game_id = game['id']
    if game_id not in unique_games:
        unique_games[game_id] = game

# Convert the dictionary values back into a list
unique_games_list = list(unique_games.values())

# Save the unique games back to a new JSON file with UTF-8 encoding
with open('games_unique.json', 'w', encoding='utf-8') as outfile:
    json.dump(unique_games_list, outfile, indent=4, ensure_ascii=False)

print("Duplicates removed, unique games saved to 'games_unique.json'.")
