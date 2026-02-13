import SideCardSkeleton from "./SideCardSkeleton"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function SidePanelSkeleton({}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Air Quality</h1>
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-7" />
          <Skeleton className="w-12 h-5 rounded" />
        </div>
      </div>
      {Array.from({ length: 8 }).map((_, index) => (
        <SideCardSkeleton key={index} />
      ))}
    </div>
  )
}