import {useEffect, useState} from "react";

function CoinTracker()
{
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() =>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
        .then((response) => response.json())
        .then((json)=> {
            setLoading(false);  
            setCoins(json);
        });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CoinTracker;