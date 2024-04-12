import type { Asset, AssetFields, Entry, EntryCollection, EntrySkeletonType, FieldsType } from "contentful";
import { useContext, useEffect, useState } from "react";

import type { Entries, CEntry, CAsset } from "../contentful/ContenfulTypes";
import { DataContext } from "../context/DataContext";

export function useContentfulEntries<T extends FieldsType>(entries: Entries) {
  const { client } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<EntryCollection<EntrySkeletonType<T>>>();

  const execute = async () => {
    setLoading(true);
    const fetched: EntryCollection<EntrySkeletonType<T>> = await client.getEntries<T>(entries);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [entries]);

  const result = () => ({
    data: data?.items.map((a) => a.fields as T) ?? [],
    loading,
  });

  return result();
}

export function useContentfulEntry<T extends FieldsType>(entry: CEntry): {
  data: T,
  loading: boolean
} {
  const { client } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Entry<EntrySkeletonType<T>>>();

  const execute = async () => {
    setLoading(true);
    const fetched: Entry<EntrySkeletonType<T>> = await client.getEntry<T>(entry);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [entry]);

  const result = () => ({
    data: data?.fields as T,
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
    data: data?.fields as AssetFields,
    loading,
  });

  return result();
}
