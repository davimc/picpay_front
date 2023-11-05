import { BsPersonCircle } from 'react-icons/bs'

import './styles.css'
import { User } from '../../../models/Users';

function Card(props: User) {
    return (
        <div className="card-container">
            <BsPersonCircle className='card-image' />

            <div className='card-infos'>
                <h2 className="card-name">{props.name}</h2>
                <p className="card-description">{props.email}</p>
            </div>
        </div>
    )
}
export default Card;