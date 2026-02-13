import Card from "../cards/Card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function AdditionalInfoSkeleton({}: Props) {
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Skeleton className="w-16 h-5" />
            <Skeleton className="size-5 rounded-full" />
          </div>
          <Skeleton className="w-8 h-5" />
        </div>
      ))}
    </Card>
  )
}