import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'

import style from './Detailed.module.scss'

export const Detailed = () => {

    const { id } = useParams()

    const oneArticle = `query MyQuery {
        articles(where: {id: "${id}"}) {
          author
          catcher
          category
          date
          id
          title
          stage
          content {
            html
          }
          image {
            url
          }
        }
      }
      `

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, oneArticle)
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    function createMarkup() {
        return { __html: data?.articles[0].content.html };
    }

    return (
        <>
            <div className={style.detailedContainer}>
                <div className={style.detailedContent}>
                    <img className={style.detailedImg} src={data?.articles[0].image.url} alt="" />
                    <h2 className={style.detailedHeader}>{data?.articles[0].title}</h2>
                    <p className={style.detailedDate}>D. {data?.articles[0].date.slice(5, 7)}/{data?.articles[0].date.slice(8, 10)}-{data?.articles[0].date.slice(0, 4)} - af {data?.articles[0].author}</p>
                    <div className={style.detailedText} dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
        </>
    )
}