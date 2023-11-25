import {CiCreditCard1 as Cartao, CiBarcode as Boleto, CiExport  as Saque} from 'react-icons/ci'
import Card from '../../elements/Card'

import './styles.css'


const styles = {width: '55px', height: '55px'}
export default function Wallet() {
    return (
        <div className="wallet-container">
            <div className="options-container">
                <div className="option">
                    <Cartao style={styles}/>
                    <p className='option-text'>Cartões</p>
                </div>
                <div className="option">
                    <Boleto style={styles}/>
                    <p className='option-text'>Pagar Boleto</p>
                </div>
                <div className="option">
                    <Saque style={styles}/>
                    <p className='option-text'>Saque</p>
                </div>
            </div>
            <div className="list-container">
                <h4>Promoções</h4>
                <div className="list-options"></div>
                <div className="list-options"></div>
                <div className="list-options"></div>
            </div>
        </div>
    )
}