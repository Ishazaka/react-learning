import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [geckoData, setGeckoData] = useState({});

  async function getgecko() {
    let url = `https://api.coingecko.com/api/v3/exchange_rates`;
    let res = await fetch(url);
    let data = await res.json();
    setGeckoData(data.rates);
    // console.log(Object.entries(data.rates))
  }

  useEffect(() => {
    getgecko();
  }, []);

  return (
    <div className="App">

      <div className="content">
        <ul>
          {Object.entries(geckoData).map((item) => (
            <div key={item.index}>
              {item[1].name}: {item[1].value}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
