import Card from '../../elements/Card'
import { BsPersonCircle } from 'react-icons/bs'
import { useState, useMemo,  } from 'react'

import './styles.css'

interface keyAlert<Type> {
    type: Type,
    hidde: Boolean;
}
function isNumeric(num: string) {
    return !isNaN(parseFloat(num));
}
export default function Transfer() {
    const [key, setKey] = useState<keyAlert<string>>({type: '', hidde: false})
    const [amount, setAmount] = useState<keyAlert<number>>({type:0.00,hidde: false});
    const handleTransfer = () => {    
        console.log(amount.hidde? 'true':'false')
        setAmount({...amount, hidde:amount.type == 0})
        setKey({...key,hidde: key.type == ''})
        
    }
    return (
        <>
            <form className='transfer-form' onSubmit={e => e.preventDefault()}>
                <label htmlFor="key">Chave:<br/>
                    <input type="email" value={key.type} id="key" placeholder='example@email.com' onChange={e => setKey({...key,type:e.target.value})} />
                    <p className={key.hidde? 'alert':'alert hidden'}>O campo está vazio!</p>
                </label>
                <label htmlFor="amount">Valor:<br/>
                    <input type="number" min={0} step={0.01}value={amount.type.toFixed(2)} id="amount"  onChange={e => {
                    //TODO corrigir pproblema com o backspace
                    setAmount(({...amount, type: (!isNaN(parseFloat(e.target.value)) ? (parseFloat(e.target.value)*10):(amount.type/10))}))
                    }} onWheel={e => e.preventDefault()}/>
                    <p className={amount.hidde? 'alert':'alert hidden'}>O campo está vazio!</p>
                </label>
                <button type='submit' onClick={handleTransfer}>Transferir</button>
            </form>

            {
                /**TO DO: scroll 
                 * obs: css html {overflow: hidden}
                 **/
            }
            <div className='transfer-contacts-container'>
                <div className='transfer-contacts'>
                    <Card image={BsPersonCircle} info='--INSERIR CHAVE--' title='--INSERIR NOME--' />
                    <Card image={BsPersonCircle} info='--INSERIR CHAVE--' title='--INSERIR NOME--' />
                    <Card image={BsPersonCircle} info='--INSERIR CHAVE--' title='--INSERIR NOME--' />
                    <Card image={BsPersonCircle} info='--INSERIR CHAVE--' title='--INSERIR NOME--' />
                    <Card image={BsPersonCircle} info='--INSERIR CHAVE--' title='--INSERIR NOME--' />
                </div>
            </div>
        </>
        
    )
    
}