import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import style from './MainLayout.module.scss'

export const MainLayout = () => {
    return (
        <>
            <Header />
            <div className={style.contentContainer}>
                <Outlet />
            </div>
            <Footer />
        </>

    )
}