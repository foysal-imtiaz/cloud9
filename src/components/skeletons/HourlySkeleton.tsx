import Card from "../cards/Card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function HourlySkeleton({}: Props) {
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-3 overflow-x-scroll"
    >
      {Array.from({ length: 48 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 items-center p-1 2xl:justify-between"
        >
          <Skeleton className="w-12 h-4" />
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="w-6 h-4" />
        </div>
      ))}
    </Card>
  )
}