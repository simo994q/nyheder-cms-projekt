import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

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

    return (
        <>
            <div className={style.headerContainer}>
                <div className={style.headerSecondContainer}>
                    <h1>INGN</h1>
                    <ul>
                        {links.map((item, index) => {
                            return (
                                <li key={index}><NavLink to={`${item.link}`}>{item.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    <div>
                        <img src="/user.svg" alt="" />
                        <img src="/menu.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}