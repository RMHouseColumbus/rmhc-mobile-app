import type { Asset, Entry, EntryCollection } from "contentful";
import { useContext, useEffect, useState } from "react";

import type { Entries, CEntry, CAsset } from "../contentful/ContenfulTypes";
import { DataContext } from "../context/DataContext";

export function useContentfulEntries<T>(entries: Entries) {
  const { client } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<EntryCollection<T>>();

  const execute = async () => {
    setLoading(true);
    const fetched: EntryCollection<T> = await client.getEntries<T>(entries);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [entries]);

  const result = () => ({
    data: data?.items.map((a) => a.fields) ?? [],
    loading,
  });

  return result();
}

export function useContentfulEntry<T>(entry: CEntry) {
  const { client } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Entry<T>>();

  const execute = async () => {
    setLoading(true);
    const fetched: Entry<T> = await client.getEntry<T>(entry);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [entry]);

  const result = () => ({
    data: data?.fields,
    loading,
  });

  return result();
}

export function useContentfulAsset(asset: CAsset) {
  const { client } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Asset>();

  const execute = async () => {
    setLoading(true);
    const fetched = await client.getAsset(asset);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [asset]);

  const result = () => ({
    data: data?.fields,
    loading,
  });

  return result();
}
