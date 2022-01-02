import React from 'react'


const CoinProps = ({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap,
  market_cap_rank,
  total_volume,
  high_24h,
  low_24h,
  price_change_24h,
  price_change_percentage_24h,
  market_cap_change_24h,
  market_cap_change_percentage_24h,
  circulating_supply,
  total_supply,
  max_supply,
  ath,
  ath_change_percentage,
  ath_date,
  atl,
  atl_change_percentage,
  atl_date,
  roi,
  last_updated,
  price_change_percentage_1h_in_currency
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          {price_change_24h < 0 ? (
            <p className='coin-percent red'>{price_change_24h.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{price_change_24h.toFixed(2)}%</p>
          )}
          
         
        </div>
      </div>
    </div>
  );
};

export default CoinProps;
