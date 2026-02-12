import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './Card'
import { getWeather } from '../../api'

type Props = {}

export default function DailyForecast({}: Props) {

  const {data} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 33.44, lon: -94.04})
  })

  return (
    <Card title="Daily Forecast">
        <div className='flex flex-col gap-4'>
            {data?.daily.map((day => (
                <div key={day.dt} className='flex justify-between'>
                    <p>DATE</p>
                    <img 
                        className='size-8'
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} 
                    />
                </div>
            )))}
        </div>
    </Card>
  )
}