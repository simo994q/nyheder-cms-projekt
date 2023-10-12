import style from './Edit.module.scss'
import { useParams } from 'react-router-dom'
import { getOneArticle } from '../../queries/getOneArticle'
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'

export const Edit = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getOneArticle, { artId: `${id}` })
    })

    return (
        <>
            <div className={style.editContainer}>
                <div className={style.editContent}>
                    <h2>Rediger</h2>

                </div>
            </div>
        </>
    )
}