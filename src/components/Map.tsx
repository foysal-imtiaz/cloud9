import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { Coords } from "../types"
import { useEffect } from "react"
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk"
import { useTheme } from "./ThemeProvider"

const API_KEY = import.meta.env.VITE_API_KEY

type Props = {
  coords: Coords
  onMapClick: (lat: number, lon: number) => void
  mapType: string
}

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, lon } = coords
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MapTileLayer />
      <TileLayer
        opacity={0.7}
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

// Normalize longitude to be within -180 to 180 range
function normalizeLongitude(lon: number): number {
  while (lon > 180) lon -= 360
  while (lon < -180) lon += 360
  return lon
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void
  coords: Coords
}) {
  const map = useMap()
  map.panTo([coords.lat, coords.lon])

  map.on("click", (e) => {
    const { lat, lng } = e.latlng
    onMapClick(lat, normalizeLongitude(lng))
  })

  return null
}

function MapTileLayer() {
  const map = useMap()
  const { theme } = useTheme()

  useEffect(() => {
    const style = theme === "dark" ? "streets-v2-dark" : "streets-v2-light"
    const tileLayer = new MaptilerLayer({
      style,
      apiKey: "HWHaGZNewhDGduIfpNSg",
    })
    tileLayer.addTo(map)

    return () => {
      try {
        map.removeLayer(tileLayer)
      } catch {
        // Ignore errors during cleanup (WebGL context may already be lost)
      }
    }
  }, [map, theme])

  return null
}