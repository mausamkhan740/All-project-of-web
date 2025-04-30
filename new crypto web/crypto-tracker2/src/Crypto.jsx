import { useEffect, useState } from "react";
import axios from "axios";
import "./Crypto.css";

export default function Crypto() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        })
        .then((res) => setCoins(res.data))
        .catch((err) => console.error("API Error:", err));
    }, []);

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="main-wrapper">
            <div className="header">
                <h1 className="title">Crypto Tracker</h1>
                <div className="search-section">
                    <label htmlFor="search">Search: </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search currency..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="container">
                {filteredCoins.map((coin) => {
                    const isUp = coin.price_change_percentage_24h >= 0;
                    const changeClass = isUp ? "change-up" : "change-down";
                    const priceChangeValue = coin.price_change_24h?.toFixed(2) || 0;

                    return (
                        <div className="box" key={coin.id}>
                            <img src={coin.image} alt={coin.name} className="coin-img" />
                            <h2>{coin.name}</h2>
                            <p><strong>Symbol:</strong> {coin.symbol.toUpperCase()}</p>
                            <p><strong>Current Price:</strong> ${coin.current_price.toLocaleString()}</p>
                            <p><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</p>
                            <p className={changeClass}>
                                <strong>24h Change:</strong> {coin.price_change_percentage_24h?.toFixed(2)}% 
                                ({isUp ? "+" : ""}${priceChangeValue})
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
