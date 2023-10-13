import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'
import { getOneArticle } from '../../queries/getOneArticle'
import dompurify from 'dompurify';
import style from './Detailed.module.scss'

export const Detailed = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getOneArticle, { artId: `${id}` })
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    return (
        <>
            <div className={style.detailedContainer}>
                <div className={style.detailedContent}>
                    <img className={style.detailedImg} src={data?.articles[0].image.url} alt="" />
                    <h2 className={style.detailedHeader}>{data?.articles[0].title}</h2>
                    <p className={style.detailedDate}>D. {data?.articles[0].date.slice(8, 10)}/{data?.articles[0].date.slice(5, 7)}-{data?.articles[0].date.slice(0, 4)} - af {data?.articles[0].author}</p>
                    <div className={style.detailedText} dangerouslySetInnerHTML={{ __html: dompurify.sanitize(data?.articles[0].content.html) }} />
                </div>
            </div>
        </>
    )
}