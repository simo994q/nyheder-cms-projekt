import { getCategory } from "../../queries/getCategory"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'
import { NewsContainer } from "../../Layout/NewsContainer/NewsContainer"
import { Article1 } from "../Article/Article1"
import { Article2 } from "../Article/Article2"

export const Politics = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getCategory, {cat: "politik"})
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    let classNumber = 1

    return (
        <>
            <NewsContainer>
            {data?.articles.map((item, index) => {
                    if (classNumber === 10) {
                        classNumber = 1
                        classNumber++
                        return (
                            <Article1 data={item} key={index} class={`article${classNumber - 1}`} />
                        )
                    } else {
                        if (classNumber === 1 || classNumber ===  6 || classNumber ===  7) {
                            classNumber++
                            return (
                                <Article1 data={item} key={index} class={`article${classNumber - 1}`} />
                            )
                        } else if (classNumber === 2 || classNumber === 3 || classNumber === 4 || classNumber === 5|| classNumber ===  8 || classNumber ===  9) {
                            classNumber++
                            return (
                                <Article2 data={item} key={index} class={`article${classNumber - 1}`} />
                            )
                        }
                    }
                })}
            </NewsContainer>
        </>
    )
}