import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import './Navigation.css'

export const Header = () => {

    const links = [
        { title: 'Alle', link: '/' },
        { title: 'Indland', link: '/indland' },
        { title: 'Udland', link: '/udland' },
        { title: 'Teknologi', link: '/teknologi' },
        { title: 'Sport', link: '/sport' },
        { title: 'Politik', link: '/politik' },
        { title: 'Samfund', link: '/samfund' }
    ]

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        if (isOpen == false) {
            setIsOpen(true)
        } else if (isOpen == true) {
            setIsOpen(false)
        }
    }

    return (
        <>
            <div className={style.headerContainer}>
                <div className={style.headerSecondContainer}>
                    <h1>INGN</h1>
                    <ul className={style.deskList}>
                        {links.map((item, index) => {
                            return (
                                <li key={index}><NavLink to={`${item.link}`}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <ul className={`mobileList ${isOpen ? 'open' : 'closed'}`}>
                        {links.map((item, index) => {
                            return (
                                <li key={index}><NavLink to={`${item.link}`} onClick={() => openMenu()}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <div>
                        <NavLink to='/login'><img src="/user.svg" alt="" onClick={() => setIsOpen(false)} /></NavLink>
                        <img className={style.menu} src={isOpen ? '/close.svg' : '/menu.svg'} alt="" onClick={() => openMenu()} />
                    </div>
                </div>
            </div>
        </>
    )
}