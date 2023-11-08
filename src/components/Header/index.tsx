import logo from '../../assets/ppay-icon.png'
import { AiFillLinkedin as InIcon} from 'react-icons/ai'

import './styles.css'

function Header() {
    const style = { backgroundColor: "white", fontSize: "1.2em",borderRadius: "30%", color: "blue", padding:"0.5px", margin: "1px 3px 1px 5px"}

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Picpay"/>
                <h1>Picpay Simplificado</h1>
            </div>
            <p className='dev-contact'> Desenvolvido por
                <span className='dev-contact-link'>
                <InIcon style = {style}/>
                    <a href="https://www.linkedin.com/in/davi-matos-carvalho/"> davi-In</a>
                </span>
            </p>
        </header>
    )
}
export default Header