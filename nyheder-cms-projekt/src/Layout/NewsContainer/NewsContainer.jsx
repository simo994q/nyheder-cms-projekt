import style from './NewsContainer.module.scss'

export const NewsContainer = ({children}) => {
    return (
        <>
            <div className={style.articlesContainer}>
                {children}
            </div>
        </>
    )
}