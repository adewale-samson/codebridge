import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export interface PropsContextType {
    data: NewsData ;
}
export interface NewsData {
    id: string;
    title: string;
    imageUrl: string;
    summary: string;
    publishedAt: string;
    newsSite: string;
}
export interface InfoProps {
    info: NewsData;  
}
export interface ReadContextType {
    click: NewsData | null;
}


const useFetch = (url: string) => {
    const navigate = useNavigate()
    const [news, setNews] = useState<NewsData[]>([]);
    const [click, setClick] = useState<NewsData | null>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response)
                const slicedResponse = response.data.slice(4, 10)
                setNews(slicedResponse);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [url]);

    const handleClick = (info: NewsData)  => {
        if(info.title){
          setClick(info)
          navigate('/articlepage', {state: {click: info}})
        }
        };
    const backHandler = () => {
        navigate(-1)
    }


    return { news, click, handleClick, backHandler }
}

export default useFetch