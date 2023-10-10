import { NavLink } from 'react-router-dom'
import './Article.css'

export const Article2 = (props) => {

    return (
        <>
            <div className={props.class}>
                <div className={'articleContent'}>
                    <h2 className='articleHeader'>{props.data.title}</h2>
                    <p className='articleDate'>D. {props.data.date.slice(5, 7)}/{props.data.date.slice(8, 10)}-{props.data.date.slice(0, 4)} - af {props.data.author}</p>
                    <NavLink className='articleLink'>Læs mere</NavLink>
                </div>
                <div className={'articleImg'}>
                    <img src={props.data.image.url} alt="" />
                </div>
            </div>
        </>
    )
}