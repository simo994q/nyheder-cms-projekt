import { NewsContainer } from "../../Layout/NewsContainer/NewsContainer"
import { Article } from "../Article/Article"
import { getAllArticles } from "../../queries/getAllArticles"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'

export const AllArticles = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getAllArticles)
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);
    
    let classNumber = 1

    return (
        <>
            <NewsContainer>
                {data?.articles.map((item, index) => {
                    if (classNumber === 8) {
                        classNumber = 1
                    }
                    return (
                        <Article data={item} key={index} class={`article${classNumber}`}/>
                    )
                })}
            </NewsContainer>
        </>
    )
}