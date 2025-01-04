import React from 'react';
import { Link } from 'react-router-dom';

const popularTags = ['spin-wheel', 'Interactive', 'NapTech Games', 'Baby', 'Highscore', 'Classic', 'frog', 'Chicken', 'Simulator', 'Stickman', 'hunter', 'angry', 'IO', 'Timing', 'swipe', 'King', 'Candy', 'Skill', 'angrybirds', 'endless', 'monstertruck', 'Grimace Shake', 'Rhythm', 'Fruit', 'waterslide', 'surprize', 'Girls', 'valentines', 'trap', 'Island', 'Taxi', 'Bicycle', 'Christmas', 'Slot Machine', 'Fairy', 'Pony', 'blockchain', 'Shark', 'valentine', 'Rabbit', 'atv', 'Kids', 'assasin', 'attack', 'HTML5', 'survival', 'Tank', 'weapons', 'surprise', 'Casino', 'Clans', 'FreezeNova', 'Relaxation', 'Arcade', 'gambling', 'Funny', 'Color', 'Violence', 'Mine', 'smash', 'Word', 'Kiss', 'Matching', 'Mahjong', 'Santa Claus', 'html5 games', 'Puzzle', 'Dungeon', 'Ball', 'run', 'Brain', 'Bricks', 'Monkey', 'Grooming', 'watermelon', 'Yoga', 'running', 'Cool', 'assassin', 'bus', 'Educational', 'Bird', 'blackjack', 'Hair', 'Enemies', 'Food', 'slide', 'Air', 'Sports', 'Impostor', 'airplane', 'Memory', 'Logical', 'iPad', 'Dress Up', 'Mind', 'Crazy', 'Frozen', 'Arena', 'Baby Hazel', 'Fire', 'Cute', 'Creation', 'Traffic', 'Surgery', 'roblox', 'buggy', 'Stealth', 'sort', 'Racing', 'H5', 'Gold', 'Clash', 'Balance', 'Road', 'Bubble', 'sneak', '3D', 'Parking', '.io', 'water', 'Typing', 'Sprunki', 'Cat', 'RPG', 'World of Alice', 'First Person Shooter', 'Interactive Fiction', 'Escape', 'Love', 'mapi games', 'carparking', 'Best', 'apocalypse', 'Match-3', 'ship', 'Guessing', 'Knight', 'Witch', 'Multiplayer', 'Fall Boys', 'Grimace', 'Fish', 'Craft', 'Magic', 'throwing', 'Sport', 'Science', 'Poppy Playtime', 'Ladybug', 'Hypercasual', 'Sword', 'trial car', 'Zombie', 'Cook', 'Slacking', 'CSGO', 'Strategy', 'Train', 'firefighters', 'Snake', 'ships', 'Blood', 'Motorcycle', 'OnlyUp', 'Music', 'Shoot', 'Point And Click', '2 Player Games', 'Kill', 'Baby Games', 'Nail', 'Level', 'Alien', 'goat', 'unity', 'Ballon', 'digital circus', 'Disney', 'Army', 'Ghost', 'Shopping', 'free games for your site', 'Killing', 'Winter', 'Sim', 'Ice', 'Punch', 'Turn', 'car tuning', 'Gun', 'World', 'circus', 'Sudoku', 'sumo', 'Kid', 'Tanks', 'Room', 'Spongebob', 'Platform', 'Anime', 'Granny', 'onlinegames io', 'Skills', 'Wizard', 'Online', 'jungle', "Shoot 'Em Up", 'unity games for your website', 'Battle', 'Snow', 'Worms', 'Castle', 'Sniper', 'Number', 'Collecting', 'Decorate', 'Bomb', 'Drawing', 'Cartoon', 'Car', 'Batman', 'Motocross', 'Difference', 'Robot', 'Bullet', 'Ski', 'Pool', 'Coloring', 'Hello Kitty', 'surfers', 'Sandbox', 'Soccer', 'Undead', 'Turn Based', 'hexagon', 'Crafting', 'Physics', 'Mario', 'Sofia', 'hockey', 'Casual', 'Rickshaw', 'city', 'Best Games', 'Boat', 'Enemy', 'Submachine', 'Skateboard', 'Summer', 'Dora', 'Ninjago', 'hexa', 'Horror', 'Cartoon Network', 'Pomni', 'Tower Defense', 'Pirate', '3D Games', 'Zuma', 'Skating', '2048', 'destruction', 'dino', 'sliding', 'Moto', 'Red', 'WebGL', 'Business', 'dash', 'steal', 'amazing', 'blocky', 'Hunting', 'Defense', 'Side Scrolling', 'Pokemon', 'touch', 'Retro', 'Math', 'Dragon', 'Kissing', 'Tetris', 'Supercars', 'slider', 'Ben 10', 'demolition', 'Driving', 'puzzleblock', 'onetouch', 'Billiard', 'Draw', 'cut', 'Decoration', 'Machine', 'builder', 'Super', 'Collection', 'Dragon Ball Z', 'Fun', 'Princess', 'Miraculous Ladybug', 'egg', 'cannon', 'Elsa', 'Design', 'Mermaid', 'Bike', 'Panda', 'Silver', 'Boy', 'eating', 'ambulance', 'Google', 'temple', 'Launch', 'Rocket', 'destroying', 'Games', 'eggs', 'Movie', 'Tennis', 'Forest', 'Spaceship', 'touchscreen', 'Shooter', 'Football', 'Quiz', 'Police', 'gta', 'Animal', 'Mouse', 'Management', 'drifting', 'lion', 'Logic', 'Clicker', 'Jewel', 'Santa', 'mineblock', 'offroad', 'Farm', 'Warrior', 'PvP', 'Seduction', 'Kiz 10', 'Miner', 'Samurai', 'Hidden', 'Adult', 'Whack', 'Doctor', 'Worm', 'chair', 'Helicopter', 'tomb', 'Obstacle', 'Wolf', 'Jumping', 'battleship', 'Simpson', 'Easter', 'vehicle', '1 Player', 'Click', 'Card', 'Mobile', 'Fashion', 'Friv', 'Bejeweled', '2D', 'Pinball', 'Makeover', 'Rescue', 'angryplants', 'huggy', 'unity games for your site', 'Geometry', 'free games for your website', 'sorting', 'html5 games for your site', 'Slither', 'Battlegrounds', '2 Player', 'Cake', 'War', 'trucks', 'Bridge', 'Monster', 'Minion', 'Slicing', 'Lego', 'Jigsaw', 'games for your website', 'Stack', 'Poker', '.io Games', 'Fantasy', 'BMX Games', 'Barbie', 'PacMan', 'Ninja', 'Action', 'Simulation', 'Nails', 'Fishing', 'Skibidi', 'Block', 'Girl', 'Race', 'Flight', 'Board', 'Bubble Shooter', 'crash', 'Space', 'arrows', 'Subway Surfers', 'military', 'Levels', 'Restaurant', 'Street Fighting', 'Penguin', 'unity games', 'html games for your website', 'Top Down', 'Game', 'TukTuk', 'fps', 'fly', 'Cleaning', 'Celebrity', 'Shooting', 'Minecraft', 'Pixel', 'Boxing', 'Spiderman', 'Dinosaur', 'Family', 'Horse', 'drift', 'Bounce', 'Adventure', 'hex', 'Vampire', 'Halloween', 'Polygon', 'Arkanoid', 'free html5 games for your website', 'House', 'Truck', 'Bow', 'Play', 'two player games', 'Fruits', 'Baseball', 'kiz10', 'BMX', 'Hot', 'Planet', 'Detective', 'mountain', 'HTML', 'Aircraft', 'Fall Guys', 'Basketball', 'Boys', 'Maze', 'iPhone', 'Letters', 'Burger', 'grow', 'valentine day', 'Solitaire', 'eggames', 'Skibidi Toilet', 'bottle', 'Cars', 'Match3', 'Stunts', 'Fight', 'building', 'Superhero', 'arrow', 'New', 'Android', 'wheel', 'subway', 'Dating', 'Jelly', 'Golf', 'Kart', 'build', 'Ever After High', 'wheels', 'Mentolatux', 'Helix', 'Avoid', 'tractor', 'Holiday', 'Prison', 'transport', 'destroy', 'School', 'Dancing', 'Person', 'Cooking', 'Brawl', 'Unity3D', 'Thief', 'Pipe', 'Plane', 'Match 3', 'sound', 'Fighting', 'Pou', 'Plant', 'jump', 'construction', '8 Ball Pool', 'sky', 'MMO'];

export function TagsSection() {
  return (
    <div className="flex flex-wrap gap-2">
        {popularTags.map((tag, index) => (
          <Link 
            key={index} 
            to={`/tag/${tag.toLowerCase()}`}
            className="inline-block py-1 px-4 rounded-full text-sm bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors duration-300"
          >
            {tag}
          </Link>
        ))}
      </div>
  );
}
