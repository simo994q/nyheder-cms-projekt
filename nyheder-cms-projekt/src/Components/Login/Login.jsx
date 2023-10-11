import { useContext, useEffect } from 'react';
import style from './Login.module.scss'
import { useForm } from "react-hook-form";
import { User } from '../../context/Context'


export const Login = () => {

    const { user, setUser } = useContext(User)

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        setUser({ username: data.Brugernavn, password: data.Password })
    };

    if (user) {
        return (
            <>
                <div className={style.loginContainer}>
                    <div className={style.loginForm}>
                        <h2>Du er logget ind som {user.username}</h2>
                        <input className={style.inputSubmit} type="submit" value='Logud' onClick={() => setUser(false)} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={style.loginContainer}>
                    <div className={style.loginForm}>
                        <h2>Log Ind</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="Burgernavn">Brugernavn:</label>
                            <input className={style.inputField} {...register("Brugernavn", { required: true })} />
                            <label htmlFor="Password">Password:</label>
                            <input className={style.inputField} {...register("Password", { required: true })} />
                            <input className={style.inputSubmit} type="submit" />
                        </form>
                    </div>
                </div>
            </>
        )
    }

}