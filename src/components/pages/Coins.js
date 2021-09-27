import React, { useContext, useState } from 'react';
import CoinProps from './CoinProps';
import { StateContext } from '../contex/GlobalState';
import './Coin.css';

function Coins () {
  const [search, setSearch] = useState('')
  const { coins } = useContext(StateContext)

  const filteredCoins = coins.filter(
    coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div className='coins__container'>
      <div>
        <h1>Search coins</h1>
        <form>
          <input
            type='text'
            onChange={handleChange}
            placeholder='Search coins'
          />
        </form>
      </div>{' '}
      {filteredCoins.map(coin => {
        return (
          <CoinProps
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            volume={coin.market_cap}
            image={coin.image}
          />
        )
      })}
    </div>
  )
}

export default Coins
