import axios from "axios";
import moment from "moment";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/tron/market_chart",
      {
        params: {
          vs_currency: "usd",
          days: "30",
          interval: "daily",
        },
      }
    );

    const processedData = response.data.prices.map((p) => ({
      timestamp: p[0],
      date: moment(p[0]).format("DD/MM/YYYY"),
      price: parseFloat(p[1].toFixed(3)),
    }));

    console.log(processedData);
    res.status(200).json(processedData);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
}
