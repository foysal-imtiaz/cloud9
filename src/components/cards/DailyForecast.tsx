import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import Card from "./Card"
import WeatherIcon from "../WeatherIcon"
import type { Coords } from "../../types"

type Props = {
  coords: Coords
}

export default function DailyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  })
  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex flex-col gap-2 2xl:justify-between"
    >
      {data.daily.map((day) => (
        <div key={day.dt} className="flex justify-between items-center">
          <span className="w-10 text-sm">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </span>
          <WeatherIcon src={day.weather[0].icon} className="size-6" />
          <span className="text-sm text-blue-400">{Math.round(day.temp.min)}°</span>
          <span className="text-sm text-orange-400">{Math.round(day.temp.max)}°</span>
          <span className="text-sm text-gray-400">{day.humidity}%</span>
        </div>
      ))}
    </Card>
  )
}