import React from "react";
import "./App.css";

const games = [
  {
    id: 1,
    title: "Puzzle Master",
    description: "Solve intricate puzzles against the clock to test your logical thinking.",
    difficulty: 2,
    image: "/api/placeholder/250/150",
    completed: true,
  },
  {
    id: 2,
    title: "Memory Match",
    description: "Test your memory skills by matching pairs before time runs out.",
    difficulty: 3,
    image: "/api/placeholder/250/150",
    completed: true,
  },
  {
    id: 3,
    title: "Word Wizard",
    description: "Create words from random letters to build your vocabulary skills.",
    difficulty: 4,
    image: "/api/placeholder/250/150",
    completed: true,
  },
  {
    id: 4,
    title: "Speed Racer",
    description: "Navigate through challenging tracks and beat your best time.",
    difficulty: 4,
    image: "/api/placeholder/250/150",
    completed: false,
  },
  {
    id: 5,
    title: "Code Breaker",
    description: "Decipher complex codes and unlock the secret messages.",
    difficulty: 5,
    image: "/api/placeholder/250/150",
    completed: false,
    locked: true,
    unlockHint: "Complete Speed Racer to unlock",
  },
  {
    id: 6,
    title: "Brain Teaser",
    description: "The ultimate challenge that combines all previous skills.",
    difficulty: 5,
    image: "/api/placeholder/250/150",
    completed: false,
    locked: true,
    unlockHint: "Complete Code Breaker to unlock",
  },
];

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-image" style={{ backgroundImage: `url(${game.image})` }}></div>
      <div className="game-content">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-description">{game.description}</p>
        <div className="game-footer">
          <div className="difficulty">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < game.difficulty ? "" : "empty"}></span>
            ))}
          </div>
          <button className="play-button" disabled={game.locked}>
            {game.completed ? "Play Again" : game.locked ? "Locked" : "Play Now"}
          </button>
        </div>
      </div>
      {game.completed && <div className="completion-badge">✓</div>}
      {game.locked && (
        <div className="locked-overlay">
          <div className="lock-icon">🔒</div>
          <p>{game.unlockHint}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const completedGames = games.filter((g) => g.completed).length;

  return (
    <div>
      <header className="header">
        <div className="container header-content">
          <div className="logo">GameQuest</div>
          <div className="user-profile">
            <span>Level 3</span>
            <div className="avatar">JS</div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="progress-section">
          <h2>Your Quest Progress</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(completedGames / games.length) * 100}%` }}></div>
          </div>
          <p>{completedGames} of {games.length} games completed</p>
        </div>

        <h1>Games Collection</h1>
        <p>Complete each game to unlock the next challenge!</p>

        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
