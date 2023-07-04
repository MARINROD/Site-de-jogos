// Header.js
import './styles.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

function Header({ games, filterGames }) {
    const [search, setSearch] = useState('');

    function handleSearch(event) {
        const searchCharacter = event.target.value;
        setSearch(searchCharacter);

        const filteredGames = games.filter((game) =>
            game.title.toLowerCase().startsWith(searchCharacter.toLowerCase())
        );
        filterGames(filteredGames);
    }

    return (
        <header>
            <img src={logo} alt="logo" />
            <div className='header-filters'>
                <input
                    type="text"
                    placeholder='     Pesquise aqui seu jogo...'
                    value={search}
                    onChange={handleSearch}
                />
                <select>
                    <option value=''>All</option>
                </select>
            </div>
        </header>
    );
}

export default Header;
