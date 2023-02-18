import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ImgCard from './ImgCard';

const Home = () => {
    const [ search, setSearch ] = useState('');
    const [ data, setData ] = useState([]); 
    const handler = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=30")
        .then(res => setData(res.data.coins))
    },[]);

  return (
    <>
        <div className='header'>
            <input type='text' value={search} onChange={handler} placeholder='Search...' />
        </div>
        {
            data.length > 0 && 
            <div className='grid-container'>
                {data.filter(crypto =>
                crypto.name.toLowerCase().includes(search.toLowerCase()))
                .map(crypto => 
                <div>
                    <ImgCard 
                        name={crypto.name} rank={crypto.rank} price={crypto.price}
                        marketCap={crypto.marketCap} key={crypto.id} url={crypto.icon}
                    />
                </div>
                )}
            </div>
        }
    </>
  )
}

export default Home