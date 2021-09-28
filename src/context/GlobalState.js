import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = React.createContext()

function StateProvider({ children }) {
    // state of coins and
    const [coins, setCoins] = useState([])

    // fetching product data

useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y%20"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
      <StateContext.Provider value={{ coins }}>{children}</StateContext.Provider>
  )
}

export {StateContext, StateProvider}