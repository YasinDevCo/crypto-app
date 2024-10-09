import chrUp from "./../../assets/chart-up.svg";
import chrDown from "./../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import Styles from "./TableCoins.module.css";
import { marketChart } from "../../services/cryptoApi";
function TableCoins({ coins, isLoading, currency, setChart }) {
  console.log(coins);
  return (
    <div className={Styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={Styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                currency={currency}
                coin={coin}
                key={coin.id}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

const TableRow = ({ currency, coin, setChart }) => {
  const {
    id,
    image,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
    symbol,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
     
      setChart({...json,coin});
      // or
      // setChart({...json,coin:coin});
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={Styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()} </span>
        </div>
      </td>
      <td>{name}</td>
      {/* //-------------- */}
      <td>
        {currency == "usd" && "$"}
        {currency == "eur" && "€"}
        {currency == "jpy" && "¥"}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? Styles.success : Styles.error}>
        {price_change.toFixed()}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chrUp : chrDown} alt={name} />
      </td>
    </tr>
  );
};
