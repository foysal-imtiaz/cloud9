import type { Dispatch, SetStateAction } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type Props = {
  mapType: string
  setMapType: Dispatch<SetStateAction<string>>
}

export default function MapTypeDropdown({ mapType, setMapType }: Props) {
  return (
    <Select value={mapType} onValueChange={(value) => setMapType(value)}>
      <SelectTrigger className="w-full xs:w-[180px] font-semibold">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {types.map((type) => {
          const label = type.split("_")[0]
          const capitalized = label.charAt(0).toUpperCase() + label.slice(1)
          return (
            <SelectItem key={type} value={type}>
              {capitalized}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

const types = [
  "clouds_new",
  "precipitation_new",
  "pressure_new",
  "wind_new",
  "temp_new",
]