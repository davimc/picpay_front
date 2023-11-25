import { BsPersonCircle } from 'react-icons/bs'
import Founds from './../Founds'
import { WalletLogged } from '../../models/Wallets';
import { useContext, useEffect, useState } from 'react'

import './styles.css'
import { TokenContext } from '../../App';
import axios from 'axios';

function Resume() {
    const token = useContext(TokenContext)
    const [wallet, setWallet] = useState<WalletLogged>({
        id: 0,
        name: '- - - - - -',
        amount: 0.00, 
        email: ''
    })
    useEffect(() => {
            (axios.get('http://localhost:8080/wallets/logged',
                {
                    headers: {
                        Authorization: token
                    }
                }).then(function (response) {

                    setWallet(response.data);
                }).catch(function (error) {
                    console.log(error)
                }))
    }, [token])
return (


    <div className="resume-container">

        <div className='resume-profile'>
            < BsPersonCircle className='profile-image' />
            <div>
                <p>Olá,</p>
                <p>{wallet.name}</p>
            </div>
        </div>

        <div className='resume-founds'>
            <Founds amount={wallet.amount} />
        </div>


    </div>
)
}
export default Resume;