import { useEffect } from 'react';
import './styles.css'
import gamepad from '../../assets/gamepad.png'
import buttons from '../../assets/buttons.png'

function Card({ title, imageUrl, description }) {



    return (
        <div className='card'>
            <img src={imageUrl} alt='game' />
            <div className='card-informer'>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className='video-game'>
                <img src={gamepad} alt="gamepad" />
                <img src={buttons} alt="buttons" />
            </div>
        </div>
    )
}

export default Card;