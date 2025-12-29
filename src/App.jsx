import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import CustomSkeleton from './Components/CustomSkeleton/CustomSkeleton'

function App() {

    const d = new Date()
    const presentDate = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate() - 3}`;
    // console.log(presentDate)

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        `from=${presentDate}&` +
        'sortBy=popularity&' +
        'apiKey=3f1954ad22c44757a48118aa7fc39c90';

    const [data, setData] = useState([])

    useEffect(() => {

        document.title = 'BlogVerse | Home';

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
        <div className='cards_Container'>

            {data.length !== 0 ? (

                data.slice(-25,).map((data, index) => {

                    const { author, content, description, publishedAt, source, title, url, urlToImage } = data;

                    return (

                        <div key={index} className="blog_Card">

                            <a href={url} target='_blank' >
                                <img src={urlToImage} alt={title} className='w-inherit rounded-2xl' />
                            </a>

                            <p className='w-36 my-1.5 p-1 bg-blue-600 rounded-2xl text-[12px]'>Published At: {publishedAt.slice(0, 10)}</p>

                            <h4 className='p-1 bg-blue-600 rounded-2xl w-44 my-1.5'>
                                Publisher: {source.name}
                            </h4>

                            <h4>
                                description: {description}
                            </h4>

                        </div>

                    );

                })
            ) :
                (<> <CustomSkeleton /> </>)
            }

        </div>
    )
}

export default App