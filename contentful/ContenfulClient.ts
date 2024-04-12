/* eslint-disable camelcase,import/extensions,@typescript-eslint/ban-ts-comment */

// @ts-ignore
import * as contentful from 'contentful'

import type {
  Asset,
  ContentfulClientApi,
  CreateClientParams,
  Entry,
  EntryCollection, EntrySkeletonType, FieldsType
} from "contentful";

import BasicCache from "../commons/Cache";
import { environment } from "../environment";

import type { Entries, CEntry, CAsset } from "./ContenfulTypes";



const contentfulClient: ContentfulClientApi<undefined> = contentful.createClient({
  accessToken: environment.CONTENTFUL_ACCESS_TOKEN,
  space: environment.CONTENTFUL_SPACE,
  environment: environment.CONTENTFUL_ENVIRONMENT,
});

export class ContentfulClient {
  private _client: ContentfulClientApi<undefined>;
  private _cache: BasicCache;

  constructor(options?: CreateClientParams) {
    this._client = contentfulClient;
    this._cache = new BasicCache();
  }

  public getAsset = async ({ id }: CAsset) => {
    if (this._cache.has(id)) {
      console.log(`Reading Asset ${id} from cache`);
      return this._cache.read<Asset>(id);
    } else {
      console.log(`Fetching Asset ${id}`);
      const asset = await contentfulClient.getAsset(id);
      this._cache.put(id, asset);
      return asset;
    }
  };

  public getEntry = async <T extends FieldsType>({ id }: CEntry): Promise<Entry<EntrySkeletonType<T>>> => {
    if (this._cache.has(id)) {
      console.log(`Reading ${id} from cache`);
      return this._cache.read<Entry<EntrySkeletonType<T>>>(id);
    } else {
      console.log(`Fetching ${id}`);
      const entry = await contentfulClient.getEntry<EntrySkeletonType<T>>(id);
      this._cache.put(id, entry);
      return entry;
    }
  };

  public getEntries = async <T extends FieldsType>({
    contentType: content_type,
  }: Entries): Promise<EntryCollection<EntrySkeletonType<T>>> => {
    const key = `entries_${content_type}`;
    if (this._cache.has(key)) {
      console.log(`Reading ${key} from cache`);
      return Promise.resolve(this._cache.read<EntryCollection<EntrySkeletonType<T>>>(key));
    } else {
      console.log(`Fetching ${key}`);
      const entries = await contentfulClient.getEntries<EntrySkeletonType<T>>({
        content_type,
      });
      console.log(JSON.stringify(entries))
      this._cache.put(key, entries);
      return entries;
    }
  };
}

export const client = new ContentfulClient();
