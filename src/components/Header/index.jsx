import './styles.css'
import logo from '../../assets/logo.png'
function Header({ search, setSearch }) {

    function handleSearch(event) {
        setSearch(event.target.value)
    }
    return (
        <header>
            <img src={logo} alt="logo" />
            <div className='header-filters'>
                <input type="text" placeholder='     Pesquise aqui seu jogo...'
                    value={search}
                    onChange={handleSearch}
                />
                <select>
                    <option value=''>All</option>
                </select>
            </div>
        </header>
    )
}
export default Header;