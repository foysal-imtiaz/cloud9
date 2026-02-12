import { getWeather } from "./api"
import { useQuery } from "@tanstack/react-query"
import Card from "./components/cards/Card"
import DailyForecast from "./components/cards/DailyForecast"

function App() {
  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 33.44, lon: -94.04})
  })
  
  return (
    <>
      <div>
        <Card title="Current Weather">{JSON.stringify(data?.current).slice(0, 100)}</Card>
        <Card title="Hourly Forecast">{JSON.stringify(data?.hourly).slice(0, 100)}</Card>
        <DailyForecast/>
      </div>
    </>
  )
}

export default App