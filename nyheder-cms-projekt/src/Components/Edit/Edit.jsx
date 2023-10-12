import style from './Edit.module.scss'
import { useParams } from 'react-router-dom'
import { getOneArticle } from '../../queries/getOneArticle'
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'
import { useForm } from "react-hook-form";
import { useState } from 'react'

export const Edit = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getOneArticle, { artId: `${id}` })
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    console.log(data);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setUser({ username: data.Brugernavn, password: data.Password })
    };

    const [title, setTitle] = useState(data?.articles[0].title)

    return (
        <>
            <div className={style.editContainer}>
                <div className={style.editContent}>
                    <h2>Rediger</h2>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="Title">Titel</label>
                        <input value={data?.articles[0].title} className={style.inputField} {...register("Title", { required: true })} />
                        <label htmlFor="">Beskrivelse</label>
                        <input className={style.inputField} {...register("Title", { required: true })} />
                        <label htmlFor="">Dato</label>
                        <input className={style.inputField} {...register("Date", { required: true })} />
                        <label htmlFor="">Forfatter</label>
                        <input className={style.inputField} {...register("Author", { required: true })} />
                        <label htmlFor="">Tekst</label>
                        <input className={style.inputField} {...register("Text", { required: true })} />
                        <label htmlFor="">Billede</label>
                        <input className={style.inputField} {...register("Image", { required: true })} />
                        <label htmlFor="">Kategori</label>
                        <input className={style.inputField} {...register("Category", { required: true })} />
                        <input type="submit" value="Opdater" />
                    </form> */}
                    <form>
                        <label htmlFor="Title">Titel</label>
                        <input type="text" value={title}/>
                        <label htmlFor="">Beskrivelse</label>
                        <input className={style.inputField} {...register("Title", { required: true })} />
                        <label htmlFor="">Dato</label>
                        <input className={style.inputField} {...register("Date", { required: true })} />
                        <label htmlFor="">Forfatter</label>
                        <input className={style.inputField} {...register("Author", { required: true })} />
                        <label htmlFor="">Tekst</label>
                        <input className={style.inputField} {...register("Text", { required: true })} />
                        <label htmlFor="">Billede</label>
                        <input className={style.inputField} {...register("Image", { required: true })} />
                        <label htmlFor="">Kategori</label>
                        <input className={style.inputField} {...register("Category", { required: true })} />
                        <input type="submit" value="Opdater" />
                    </form>

                </div>
            </div>
        </>
    )
}