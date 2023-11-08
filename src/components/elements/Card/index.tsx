

import { IconType } from 'react-icons';
import './styles.css'

interface Infos {
    title: string,
    info: string,
    image: IconType;
}

function Card(props: Infos) {
    return (
        <div className="card-container">
            {<props.image className='card-image'/>}
            
                <div className='card-infos'>
                    <h2 className="card-name">{props.title}</h2>
                    <p className="card-description">{props.info}</p>
                </div>
        </div>
    )
}
export default Card;