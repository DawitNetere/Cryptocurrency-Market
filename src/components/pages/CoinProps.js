import React from 'react';import './Coin.css'

 const CoinProps = ({
     id,symbol,name,image,current_price,market_cap,market_cap_rank,total_volume,high_24h,low_24h,price_change_24h,
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
price_change_percentage_1h_in_currency,
 }) => {
    return (
        <div><div><div className="coin__props--container">
            <h4>{id}</h4>
            <h4>{symbol}</h4>
            <h4>{name}</h4>
            <img src={image} alt="img" className="coin__img"/>
            
        </div></div>
            
        </div>
    )
}


export default CoinProps;
