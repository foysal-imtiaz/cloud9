import Card from "../cards/Card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function CurrentSkeleton({}: Props) {
  return (
    <Card
      title="Current Weather"
      className="md:pb-4"
      childrenClassName="flex flex-col items-center gap-3 2xl:justify-between"
    >
      <div className="flex flex-col gap-1 items-center">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="w-28 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base text-center">Local Time:</p>
        <Skeleton className="w-28 h-7" />
      </div>
      <div className="flex justify-between w-full text-sm">
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">Feels Like</p>
          <Skeleton className="w-12 h-4" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">Humidity</p>
          <Skeleton className="w-12 h-4" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">Wind</p>
          <Skeleton className="w-12 h-4" />
        </div>
      </div>
    </Card>
  )
}