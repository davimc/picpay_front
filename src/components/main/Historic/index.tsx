import { GoMoveToEnd as In, GoMoveToStart as Out } from 'react-icons/go'
import Card from '../../elements/Card'
import { TokenContext } from '../../../App'
import { useState, useContext, useEffect } from 'react'
import './styles.css'
import axios from 'axios'

export default function Historic() {
    const token = useContext(TokenContext)

    const [notification, setNotification] = useState([])
    useEffect(()=>{axios.get('http://localhost:8080/notifications',
        {
          headers: {
            Authorization: token
          }   
        }
    ).then(function (response){
        console.log('okokokok')
        console.log(response.data)
    }).catch(function (error) {
        console.log(error)
        console.log('historic' )
    })
    },[notification])
    return (
    <>
        <Card image={Out} info='50,00 enviados para XXXXX' title='Transferência' />
        <Card image={Out} info='50,00 enviados para XXXXX' title='Transferência' />
        <Card image={In} info='10,00 recebidos de XXXXX' title='Transferência' />
        <Card image={In} info='540,00 recebidos de XXXXX' title='Transferência' />
    </>)
}