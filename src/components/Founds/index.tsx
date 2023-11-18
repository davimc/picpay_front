
import { useState } from 'react'
import { BsEye, BsEyeSlash as Invisible } from 'react-icons/bs'
import { IconType } from 'react-icons'

import './styles.css'
interface Found {
    amount: number
}
function Founds(props: Found) {
    const [icon, setIcon] = useState(BsEye)
    return (
        <div className='founds-container'>
            {/** TODO corrigir problema desse if que está comparando semrpe dando false
            */}
            <button className='founds-visible' onClick={() => {
                setIcon(icon == BsEye ? Invisible : BsEye)
                console.log(icon)
                console.log(BsEye)
                console.log(Invisible)
            }}>
                {icon}
            </button >
            <p className='founds-type'>R$</p>
            <p className='founds-value'>{props.amount}</p>
        </div>
    )
} export default Founds