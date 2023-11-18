import { BsPersonCircle } from 'react-icons/bs'
import Founds from './../Founds'
import { WalletLogged } from '../../models/Wallets';
import { useContext, useEffect, useState } from 'react'

import './styles.css'
import { TokenContext } from '../../App';
import axios from 'axios';

//const token = useContext(tokenContext)
//const wallet = 
function Resume() {
    const token = useContext(TokenContext)
    const [wallet, setWallet] = useState<WalletLogged | null>(null)
    useEffect(() => {
            (axios.get('http://localhost:8080/wallets/logged',
                {
                    headers: {
                        Authorization: token
                    }
                }).then(function (response) {

                    setWallet(response.data);
                    return ''
                }).catch(function (error) {
                    console.log(error);
                    return ''
                }))
    }, [token])
return (


    <div className="resume-container">

        <div className='resume-profile'>
            < BsPersonCircle className='profile-image' />
            <div>
                <p>Olá,</p>
                <p>{wallet ? wallet.name : 'INSIRA O NOME'}</p>
            </div>
        </div>

        <div className='resume-founds'>
            <Founds amount={wallet ? wallet.amount : 30.50} />
        </div>


    </div>
)
}
export default Resume;