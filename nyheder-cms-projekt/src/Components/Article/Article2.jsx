import { NavLink } from 'react-router-dom'
import './Article.css'
import { useContext } from 'react'
import { User } from '../../context/Context'

export const Article2 = (props) => {

    const { user, setUser } = useContext(User)

    if (user) {
        return (
            <>
                <div className={props.class}>
                    <div className={'articleContent'}>
                        <h2 className='articleHeader'>{props.data.title}</h2>
                        <p className='articleDate'>D. {props.data.date.slice(5, 7)}/{props.data.date.slice(8, 10)}-{props.data.date.slice(0, 4)} - af {props.data.author}</p>
                        <div className='linkAndEdit'>
                            <NavLink className='articleLink' to={`/${props.data.category.toLowerCase()}/${props.data.id}`}>Læs mere</NavLink>
                            <div>
                                <NavLink to={`/edit/${props.data.id}`}><img src="/edit.svg" alt="" /></NavLink>
                                <img src="/delete.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={'articleImg'}>
                        <img src={props.data.image.url} alt="" />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={props.class}>
                    <div className={'articleContent'}>
                        <h2 className='articleHeader'>{props.data.title}</h2>
                        <p className='articleDate'>D. {props.data.date.slice(5, 7)}/{props.data.date.slice(8, 10)}-{props.data.date.slice(0, 4)} - af {props.data.author}</p>
                        <NavLink className='articleLink' to={`/${props.data.category.toLowerCase()}/${props.data.id}`}>Læs mere</NavLink>
                    </div>
                    <div className={'articleImg'}>
                        <img src={props.data.image.url} alt="" />
                    </div>
                </div>
            </>
        )
    }

}