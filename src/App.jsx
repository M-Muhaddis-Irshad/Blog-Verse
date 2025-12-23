import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import CustomSkeleton from './Components/CustomSkeleton/CustomSkeleton'

function App() {

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        // 'from=2025-12-17&' +
        'sortBy=popularity&' +
        'apiKey=3f1954ad22c44757a48118aa7fc39c90';

    const [data, setData] = useState([])

    useEffect(() => {

        axios.get(url)
            .then(res => {
                setTimeout(() => {
                    setData(res.data.articles)
                }, 1500);
                console.log(res.data.articles)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <p className='m-auto'>My Name is Hacker</p>

            {data.length !== 0 ? (

                data.map((data, index) => {

                    const { author, content, description, publishedAt, source, title, url, urlToImage } = data;

                    return (

                        <div className='border-black rounded-[4px] border-2 p-2 px-6 m-4 grid grid-cols-4 gap-1 row-auto text-white' key={index}>
                            <span className='similarStyling col-span-1 row-span-1 bg-green-400'> s.No: {index + 1} </span>
                            <span className='similarStyling col-span-1 row-span-1 bg-blue-500'> Author: {author} </span>
                            <span className='similarStyling col-span-1 row-span-1 bg-blue-500'> PublishedAt: {publishedAt} </span>
                            <span className='similarStyling col-span-1 row-span-1 bg-blue-500'> Source: {source.id} </span>
                            <span className='similarStyling col-span-2 row-span-2 bg-blue-500'> Title: <br /> {title} </span>
                            <span className='similarStyling col-span-2 row-span-2 bg-green-700'> Name: {author} </span>
                            <span className='similarStyling col-span-2 row-span-2 bg-blue-500'> Content: <br /> {content} </span>
                            <span className='similarStyling col-span-2 row-span-2 text-blue-700'><a href={url}><img src={urlToImage} alt="" /></a> </span>
                            <span className='similarStyling col-span-4 row-span-3 bg-blue-500'> Description: <br /> {description} </span>

                        </div>
                    );

                })
            ) :
                (<> <CustomSkeleton /> </>)
            }

        </>
    )
}

export default App