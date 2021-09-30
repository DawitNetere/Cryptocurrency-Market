import React, { useContext, useState } from 'react';
import CoinProps from './CoinProps';
import { StateContext } from '../../context/GlobalState';
import './Coin.css';
import { Link } from 'react-router-dom';

function Coins () {
  const [search, setSearch] = useState('')
  const { coins } = useContext(StateContext)

  const filteredCoins = coins.filter(
    coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
      coin.id.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <>
            <CoinProps
              key={coin.id}
              image={coin.image}
              name={coin.name}
              current_price={coin.current_price}
              symbol={coin.symbol}
             price_change_24h={coin.price_change_percentage_24h}
            />
           <Link to={`/coin/${coin.id}`}>
              <button className='view-detail-btn'>View Details</button>
            </Link>
          </>
        )
      })}
    </div>
  )
}

export default Coins
