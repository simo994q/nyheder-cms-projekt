import { getInland } from "../../queries/getInland"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'

export const Inland = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getInland)
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    return (
        <></>
    )
}