import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowCard from './ShowCard'

function ShowList() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res => {
            // console.log(res)
            setdata(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div className='showContainer'>

        {
            data.map((Show, index) => <ShowCard key={index} show={Show.show} index={index}></ShowCard>)
        }
        </div>
    )
}

export default ShowList