// src/components/App.jsx
import { useState, useEffect } from 'react';
import Card from './Components/Card.jsx';
import Scoreboard from './Components/ScoreBoard.jsx';
import './Styles/App.css';


const App = () => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = "a45ApVpzgbKzgJA3noobkNirAGrOZyPn";
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=funny&limit=12`;
      const response = await fetch(url);
      const data = await response.json();
      setCards(data.data.map((item) => ({ id: item.id, url: item.images.original.url })));
    };
    fetchImages();
  }, []);

  const shuffleCards = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setBestScore(Math.max(currentScore, bestScore));
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setCurrentScore(currentScore + 1);
    }
    setCards(shuffleCards(cards));
  };

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} url={card.url} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default App;