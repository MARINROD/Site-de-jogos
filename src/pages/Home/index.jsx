// Home.js
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import './styles.css';
import Footer from '../../components/Footer';
import Loader from '../../components/LoaderCard';

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredGames, setFilteredGames] = useState([]);

  async function getGames() {
    setLoading(true);
    try {
      const email = 'seu-email@example.com';
      const response = await fetch(
        `https://games-test-api-81e9fb0d564a.herokuapp.com/api/data`,
        {
          headers: {
            'dev-email-address': email
          }
        }
      );
      const data = await response.json();
      if (data?.error) {
        setLoading(false);
        return;
      }
      setGames(data);
      setFilteredGames(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os jogos:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getGames();
  }, []);

  function handleFilterGames(filteredGames) {
    setFilteredGames(filteredGames);
  }

  return (
    <div className='home-container'>
      <Header games={games} filterGames={handleFilterGames} />
      <div className='cards-container'>
        {loading ? (
          <Loader />
        ) : (
          filteredGames.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              imageUrl={game.thumbnail}
              description={game.short_description}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
