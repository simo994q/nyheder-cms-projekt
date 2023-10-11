import style from './Login.module.scss'
import { useForm } from "react-hook-form";


export const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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