import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "../Wallet";
import Historic from "../Historic";
import Transfer from "../Transfer";
import Navigation from "../../Navigation";

import './styles.css'

export default function Content() {
    return (
        
        //TODO create wallet
        <div className='context-container'>
            <Router basename="">
                <Routes>
                    <Route path='/' element={<Wallet />} />
                    <Route path='/wallets' element={<Wallet />} />
                    <Route path='/transfers' element={<Transfer />} />
                    <Route path='/notifications' element={<Historic />} />
                </Routes>
                <div className="context-navigation">
                    <Navigation/>
                </div>
            </Router>

                
        </div>
    )
}