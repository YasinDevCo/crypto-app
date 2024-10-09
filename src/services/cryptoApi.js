const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-ZxVZTjZc19qiMFxCdMNDm9QZ";
const geCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = (coin) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`;

export { geCoinList, searchCoin,marketChart };

//  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-ZxVZTjZc19qiMFxCdMNDm9QZ
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&x-cg-pro-api-key=CG-ZxVZTjZc19qiMFxCdMNDm9QZ
