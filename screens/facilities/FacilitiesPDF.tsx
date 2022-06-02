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
      if (data) {
        setUrl(`http:${data.file.url}`);
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
