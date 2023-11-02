import { BsPersonCircle } from 'react-icons/bs'
import Founds from './../Founds'

import './styles.css'

function Resume() {
    return (
        <div className="resume-container">
            <div className='resume-profile'>
                < BsPersonCircle className='profile-image'/>
                <div>
                    <p>Olá,</p>
                    <p>--INSERIR NOME--</p>
                </div>
            </div>

            <div className='resume-founds'>
                <Founds />
            </div>


        </div>
    )
}
export default Resume;