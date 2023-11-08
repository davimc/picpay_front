import Card from '../../elements/Card'
import { BsPersonCircle } from 'react-icons/bs'
import { useState } from 'react'


import './styles.css'


export default function Transfer() {
    const [chave, setChave] = useState<string>('')
    const [valor, setValor] = useState<number>();

    return (
        <>
            <form className='transfer-form'>
                <label htmlFor="chave">Chave:<br/>
                    <input type="email" value={chave} id="chave" placeholder='example@email.com' onChange={e => setChave(e.target.value)} />
                </label>
                <label htmlFor="amount">Valor:<br/>
                    <input type="number" value={valor} id="amount" placeholder='R$ 0,00' onChange={e => setValor((e.target.value as number))} />
                </label>
                <button type='submit'>Transferir</button>
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