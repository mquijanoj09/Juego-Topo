# Juego Topo (Whack-a-Mole Game)

A fun and interactive Whack-a-Mole game built with modern web technologies. Test your reflexes by catching the moles as they pop up from their holes!

![Game Preview](src/images/character.png)

## 🎮 Features

- **Dynamic Gameplay**: Moles appear randomly in different holes
- **Score System**: Earn different points based on hole types
  - Regular holes: 100 points
  - Special holes: 200 points
- **Lives System**: Start with 5 lives, lose one for each miss
- **Difficulty Levels**: Choose between Easy, Medium, and Hard
- **Sound Effects**: Engaging audio feedback for hits and misses
- **Vibration Feedback**: Optional device vibration on misses
- **High Scores**: Local storage of top 10 scores
- **Responsive Design**: Works on both desktop and mobile devices

## 🛠️ Technologies Used

- HTML5
- SCSS/CSS3
- JavaScript (ES6+)
- Parcel (Bundler)
- Howler.js (Audio)
- Capacitor (Mobile)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

## 📱 Mobile App Build

To build for Android:

```bash
npm run setup
```

This will:

1. Install dependencies
2. Build the project
3. Initialize Capacitor
4. Add Android platform
5. Sync the project
6. Open Android Studio

## 🎯 Game Controls

- Click/tap on holes when you see a mole
- Quick reactions are key to high scores
- Watch your remaining lives
- Try to beat your high score!

## ⚙️ Settings

- **Music Toggle**: Enable/disable background music
- **Sound Effects**: Toggle game sound effects
- **Difficulty**: Choose between Easy, Medium, Hard
- **Vibration**: Enable/disable device vibration

## 📊 Scoring System

- Regular holes (brown): 100 points
- Special holes (green): 200 points
- Track your high scores in the leaderboard

## 🎨 Customization

The game uses SCSS for styling, making it easy to customize:

- `_base.scss`: Core styles
- `_game.scss`: Game-specific styles
- `_menu.scss`: Menu interface
- `_settings.scss`: Settings panel
- `_scores.scss`: Leaderboard styling

## 🔧 Project Structure

```
src/
├── audio/          # Game sound effects
├── images/         # Game assets
├── js/             # JavaScript modules
├── sass/           # SCSS style files
└── index.html      # Entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Credits

- Development: Miguel Quijano Jaramillo & Jhonatan Bosch
- Version: 1.0.0
- Year: 2024

## 🐛 Known Issues

- None currently reported

## 🔜 Future Enhancements

- Online multiplayer mode
- Additional power-ups
- More sound effects
- Achievement system
- Different themes
