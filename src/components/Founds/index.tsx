
import { useState } from 'react'
import { BsEye as Visible, BsEyeSlash as Invisible } from 'react-icons/bs'
import {IconType} from 'react-icons'

import './styles.css'

function Founds() {
    const [icon, setIcon] = useState(Visible) 
    return (
        <div className='founds-container'>
            {/** TODO corrigir problema desse if que está comparando semrpe dando false
            */}
            <button className='founds-visible' onClick={() => {
                setIcon(icon == Visible? Invisible:Visible)
                console.log(icon)
                console.log(icon == Invisible)
            }}>
                {icon}
            </button >
            <p className='founds-type'>R$</p>
            <p className='founds-value'>--INSERIR SALDO--</p>
        </div>
    )
}export default Founds