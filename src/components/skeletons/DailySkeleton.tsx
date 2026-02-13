import Card from "../cards/Card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function DailySkeleton({}: Props) {
  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex flex-col gap-2 2xl:justify-between"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <Skeleton className="w-8 h-5" />
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="w-6 h-5" />
          <Skeleton className="w-6 h-5" />
          <Skeleton className="w-6 h-5" />
        </div>
      ))}
    </Card>
  )
}