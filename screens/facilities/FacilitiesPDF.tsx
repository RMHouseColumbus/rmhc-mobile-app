import React, { useCallback, useState } from "react";
import { WebView } from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";

import { useContentfulAsset } from "../../hooks/useContentful";
import { entries } from "../../contentful/ContenfulTypes";

export default function FacilitiesPDF() {
  const { data, loading } = useContentfulAsset(entries.assets.floorplan);
  const [url, setUrl] = useState<string>();

  useFocusEffect(
    useCallback(() => {
      if (data?.file) {
        setUrl(`https://docs.google.com/gview?embedded=true&url=https:${data.file.url}`);
      }
      return () => {
        setUrl(undefined);
      };
    }, [url, data])
  );

  if (!url || loading) {
    return <></>;
  }
  return (
    <WebView
      source={{
        uri: url,
      }}
    />
  );
}
