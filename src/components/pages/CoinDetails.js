import React, { useContext } from 'react'
import { StateContext } from '../../context/GlobalState'
import { Link, useParams } from 'react-router-dom';
import "../../_styles/CoinDetails.scss";
import CoinProps from './CoinProps';

function CoinDetails() {
  const { coinId } = useParams()
  const { coins } = useContext(StateContext)
  const thisCoin = coins.filter(coin => coin.id === coinId);


  return (
    <div className="container__header">
      <header className="coin__details--header">
        {thisCoin.map(coin => {
          return (
            <ul className="coin__details--container">
              <CoinProps
              key={coin.id}
              image={coin.image}
              name={coin.name}
              current_price={coin.current_price}
              symbol={coin.symbol}
             price_change_24h={coin.price_change_percentage_24h}
            /></ul>
          )
        })}
         <Link to='/'>
                    <button className='view-detail-btn'>beck</button>
                  </Link>
      </header>
    </div>
  )
}

export default CoinDetails
