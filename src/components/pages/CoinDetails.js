import React, { useContext } from 'react'
import { StateContext } from '../../context/GlobalState'
import { useParams } from 'react-router-dom';
import "./CoinDetails.css"

function CoinDetails () {
  const { coinId } = useParams()

  const { coins } = useContext(StateContext)
 
  const thisCoin = coins.filter(coin => coin.id === coinId) ; 
   

  return (
    <div>
      <section>
        {thisCoin.map(coin => {
          return (
            <div key={coin.id} className='coin-details'>
            
              <div className='coin-detail-image'>
                <img src={coin.image} alt='coin' />
              </div>
              <div className='coin-detail-info'>
                <h3>{coin.name}</h3>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default CoinDetails
