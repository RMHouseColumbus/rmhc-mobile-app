import { Linking } from "react-native";

import { isAndroid } from "../constants/Platform";

interface MapLinkParams {
  street: string;
  zip: string;
  city: string;
}

interface GeoLinkParams {
  lat: string | number;
  long: string | number;
  z: number;
  q: "restaurants" | "shopping" | string;
}

export interface MapLink {
  uri: string;
  openMap: () => void;
}

export default function useMapLink({
  street,
  zip,
  city,
}: MapLinkParams): NonNullable<MapLink> {
  const provider = isAndroid ? "google" : "apple";

  const destination = encodeURIComponent(`${street} ${zip}, ${city}`);
  const uri = `https://maps.${provider}.com/?daddr=${destination}`;
  return {
    uri,
    openMap: () => Linking.openURL(uri),
  };
}

export function useGeoLink(params: GeoLinkParams): NonNullable<MapLink> {
  const uri = createGeoLink(params);
  return {
    uri,
    openMap: () => Linking.openURL(uri),
  };
}

export function createGeoLink({ lat, long, z, q }: GeoLinkParams) {
  const provider = isAndroid ? "google" : "apple";
  const latLongPath = `${lat},${long}&z=${z}&q=${q}`;
  return `https://maps.${provider}.com/?sll=${latLongPath}`;
}
