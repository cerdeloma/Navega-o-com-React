import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (

    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/variavel">Param #1</Link>
                </li>
                <li>
                    <Link to="/param/numero">Param #2</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/notFound">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>

)

export default Menu