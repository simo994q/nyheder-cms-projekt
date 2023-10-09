import style from './Article.module.scss'
import { NavLink } from 'react-router-dom'
import './Article.module.scss'

export const Article = (props) => {

    return (
        <>
            <div className={props.class}>
                <h2>{props.data.title}</h2>
                <p>{props.data.catcher}</p>
                <p>D. {props.data.date.slice(5, 7)}/{props.data.date.slice(8, 10)}-{props.data.date.slice(0, 4)} - af {props.data.author}</p>
                <NavLink>Læs mere</NavLink>
                <img src={props.data.image.url} alt="" />
            </div>
        </>
    )
}