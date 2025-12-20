import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Skeleton } from 'antd';

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
                }, 2000);
                console.log(res.data.articles)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>

            {data.length !== 0 ? (

                data.map((data, index) => (

                    <div className='border-2 p-2 m-4' key={index}>

                        s.No
                        Name

                    </div>
                    // }

                ))
            ) :
                (<> <Skeleton active />; </>)
            }

        </>
    )
}

export default App