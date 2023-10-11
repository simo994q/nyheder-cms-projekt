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

    const [navigation, setNavigation] = useState('closed')

    const openMenu = () => {
        if (navigation == 'closed') {
            setNavigation('open')
        } else if (navigation == 'open') {
            setNavigation('closed')
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
                    <ul className={`mobileList ${navigation}`}>
                        {links.map((item, index) => {
                            return (
                                <li key={index}><NavLink to={`${item.link}`} onClick={() => openMenu()}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <div>
                        <NavLink to='/login'><img src="/user.svg" alt="" /></NavLink>
                        <img className={style.menu} src="/menu.svg" alt="" onClick={() => openMenu()} />
                    </div>
                </div>
            </div>
        </>
    )
}