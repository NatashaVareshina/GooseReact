import { useState } from 'react'
import './menu.css'

const menu = [
    {id: 'firstSection', item: 'КТО ЖЕ ТАКОЙ ГУСЬ?'},
    {id: 'secondSection', item: 'ГУСИНАЯ ЛЮБОВЬ'},
    {id: 'thirdSection', item: 'ЕЩЕ ЧУТЬ-ЧУТЬ О ГУСЯХ'},
    {id: 'fourthSection', item: 'ГУСИ-РОДИТЕЛИ'},
    {id: 'fifthSection', item: 'ГО-ГО-ГО?'},
]

export default function Menu() {
    const menuPoint = menu.map(element => 
        <li key={element.id}>
            <a
                className='header_menu_link' 
                href={element.id}
            >
                {element.item}
            </a>
        </li>
    )

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav>
            <div className='btn' onClick={() => setIsOpen(!isOpen)}>
                <div className={`btn__burger${isOpen ? ' open' : ''}`}>
                    <ul className='menu'>{menuPoint}</ul>
                </div>
            </div>
        </nav>
    )
}