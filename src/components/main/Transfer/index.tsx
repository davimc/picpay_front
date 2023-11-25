import Card from '../../elements/Card'
import { BsPersonCircle } from 'react-icons/bs'
import { useMemo, useState } from 'react'

import './styles.css'
import axios from 'axios';

interface keyAlert<Type> {
    type: Type,
    hidde: Boolean;
}
export default function Transfer() {
    const [key, setKey] = useState<keyAlert<string>>({ type: '', hidde: false })
    const [amount, setAmount] = useState<keyAlert<number>>({ type: 0.00, hidde: false });
    const transf = () => {
        console.log('test')
    }
    const handleTransfer = () => {

        setAmount({ ...amount, hidde: amount.type == 0 })
        setKey({ ...key, hidde: key.type == '' })
        if (amount.type !== 0 && key.type !== '') {
            transf();
            console.log(axios({
                method:'get',
                url: 'http://localhost:8080/users/1',
                responseType: 'json'
            }).then(function (response) {
                console.log(response)
            } ).catch(function (error) {
                console.log(error)
            }))
        }
    }
    return (
        <>
            <form className='transfer-form' onSubmit={e => e.preventDefault()}>
                <label htmlFor="key">Chave:<br />
                    <input type="email" value={key.type} id="key" placeholder='example@email.com' onChange={e => setKey({ ...key, type: e.target.value })} />
                    <p className={!key.hidde ? 'alert hidden' : 'alert'}>O campo está vazio!</p>
                </label>
                <label htmlFor="amount">Valor:<br />

                    <input type="number" min={0} step={0.01} value={amount.type.toFixed(2)} id="amount" onChange={e => {
                        //TODO corrigir pproblema com o backspace
                        setAmount(({ ...amount, type: (!isNaN(parseFloat(e.target.value)) ? (parseFloat(e.target.value) * 10) : (amount.type / 10)) }))
                    }} />
                    <p className={amount.hidde ? 'alert' : 'alert hidden'}>O campo está vazio!</p>
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