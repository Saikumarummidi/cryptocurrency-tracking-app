import React from 'react'

const ImgCard = (props) => {
  return (
    <div>
        <img src={props.url} alt={props.name} style={{display: 'grid'}} />
        <p>{props.name}</p>
        <p>Rank : {props.rank}</p>
        <p>Price in $ {props.price}</p>
        <p>marketCap : {props.marketCap}</p>
    </div>
  )
}

export default ImgCard