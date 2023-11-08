import { GoMoveToEnd as In, GoMoveToStart as Out } from 'react-icons/go'
import Card from '../../elements/Card'

import './styles.css'

export default function Wallet() {
    return (
    <>
        <Card image={Out} info='50,00 enviados para XXXXX' title='Transferência' />
        <Card image={Out} info='50,00 enviados para XXXXX' title='Transferência' />
        <Card image={In} info='10,00 recebidos de XXXXX' title='Transferência' />
        <Card image={In} info='540,00 recebidos de XXXXX' title='Transferência' />
    </>)
}