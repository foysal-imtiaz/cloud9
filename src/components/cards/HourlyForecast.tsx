import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import WeatherIcon from "../WeatherIcon"
import type { Coords } from "../../types"

type Props = {
  coords: Coords
}

export default function HourlyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  })
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-3 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div
          key={hour.dt}
          className="flex flex-col 2xl:justify-between gap-1 items-center p-1"
        >
          <p className="whitespace-nowrap text-xs">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <WeatherIcon className="size-6" src={hour.weather[0].icon} />
          <p className="text-xs">{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  )
}