import React, { useEffect, useState } from "react";
import TableCoins from "../module/TableCoins";
import { geCoinList } from "../../services/cryptoApi";
import Pagination from "../module/Pagination";
import Search from "../module/Search";
import Chart from "../module/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(geCoinList(page, currency));
        const json = await res.json();
        setIsLoading(false);
        setCoins(json);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} setChart={setChart}/>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} currency={currency} setCurrency={setCurrency} />}
    </div>
  );
}

export default HomePage;
