import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import NewsCard from '../components/NewsCard';
import { DataContext } from '../context/DataContext';

const Details = () => {
    const navigate = useNavigate()
    const {data} = useContext(DataContext)
    const {key} = useParams();
    const newsDetails = data.filter((item)=>{
           return item.id == key
    })
    console.log("newsDetails",newsDetails)

  return (
    <div className='flex flex-col gap-3 w-full justify-center items-center h-screen'>
        <NewsCard 
        detailPage={true}
        author={newsDetails[0]?.author}
        description={newsDetails[0]?.description}
        title={newsDetails[0]?.title}
        image={newsDetails[0]?.urlToImage}
        publishedOn={newsDetails[0]?.publishedAt}
        url={newsDetails[0]?.url}
        content={newsDetails[0]?.content}
        />
        <p onClick={()=>navigate('/')}>
            ⬅ Back
        </p>
    </div>
  )
}

export default Details