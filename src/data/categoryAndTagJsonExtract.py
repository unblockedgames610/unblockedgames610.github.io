import json

# Load the JSON data from the file with UTF-8 encoding
with open('games.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Extracting all tags and categories from the data and removing duplicates using a set
tags = set()
categories = set()

for game in data:
    tags.update(game["tags"].split(", "))
    categories.add(game["category"])

# Save unique tags to 'tags.json'
with open('tags.json', 'w', encoding='utf-8') as tags_file:
    json.dump(list(tags), tags_file, ensure_ascii=False, indent=4)

# Save unique categories to 'categories.json'
with open('categories.json', 'w', encoding='utf-8') as categories_file:
    json.dump(list(categories), categories_file, ensure_ascii=False, indent=4)

print("Unique tags and categories have been saved to 'tags.json' and 'categories.json'.")
