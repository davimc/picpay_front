import Card from '../../elements/Card'
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
            </form>

            {
                /**TO DO: scroll 
                 * obs: css html {overflow: hidden}
                 **/
            }
            <div className='transfer-contacts-container'>
                <div className='transfer-contacts'>
                    <Card id={1} email='--INSERIR CHAVE--' name='--INSERIR NOME--' />
                    <Card id={2} email='--INSERIR CHAVE--' name='--INSERIR NOME--' />
                    <Card id={3} email='--INSERIR CHAVE--' name='--INSERIR NOME--' />
                    <Card id={4} email='--INSERIR CHAVE--' name='--INSERIR NOME--' />
                    <Card id={5} email='--INSERIR CHAVE--' name='--INSERIR NOME--' />
                </div>
            </div>
        </>
    )
}