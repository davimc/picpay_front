import {LuDollarSign, LuMessageCircle, LuWallet2} from 'react-icons/lu'
import './styles.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const i = [<LuWallet2/>,'Carteira']
const icons = new Map<string, [any,any,any]>()
    
icons.set('wallet', [<LuWallet2/>,'Carteira','wallets'])
icons.set('transfer', [<LuDollarSign/>, 'Transferir','transfers'])
icons.set('notification', [<LuMessageCircle/>, 'Notificação','notifications'])


function navigation() {

    const [classActive, setClassActive] = useState('wallet');        
    return(
        <div className="navigation">
        <ul>
            {Array.from(icons).map(([key,val]) => {
                return(
                <li className={classActive == key? 'list active': 'list'} id={key} key = {key} onClick={() => setClassActive(key)}>
                    <span className="nav-icon" >
                            {val[0]}
                        </span>
                        <span className="nav-text">{val[1]}</span>
                    {/*<Link to={val[2]} >
                        
                </Link>*/}
                </li>
                )
            })}
            <div className="indicator"></div>
        </ul>
    </div>
    )
}
export default navigation