/* eslint-disable camelcase,import/extensions,@typescript-eslint/ban-ts-comment */

// @ts-ignore
import { createClient } from "contentful/dist/contentful.browser.min.js";
import type {
  ContentfulClientApi,
  CreateClientParams,
  Entry,
  EntryCollection,
} from "contentful";

import BasicCache from "../commons/Cache";
import { environment } from "../environment";

import type { Entries, CEntry } from "./ContenfulTypes";

const contentfulClient: ContentfulClientApi = createClient({
  accessToken: environment.CONTENTFUL_ACCESS_TOKEN,
  space: environment.CONTENTFUL_SPACE,
  environment: environment.CONTENTFUL_ENVIRONMENT,
});

export class ContentfulClient {
  private _client: ContentfulClientApi;
  private _cache: BasicCache;

  constructor(options?: CreateClientParams) {
    this._client = contentfulClient;
    this._cache = new BasicCache();
  }

  public getEntry = async <T>({ id }: CEntry): Promise<Entry<T>> => {
    if (this._cache.has(id)) {
      console.log(`Reading ${id} from cache`);

      return this._cache.read<Entry<T>>(id);
    } else {
      console.log(`Fetching ${id}`);
      const entry = await contentfulClient.getEntry<T>(id);
      this._cache.put(id, entry);
      return entry;
    }
  };

  public getEntries = async <T>({
    contentType: content_type,
  }: Entries): Promise<EntryCollection<T>> => {
    const key = `entries_${content_type}`;
    if (this._cache.has(key)) {
      console.log(`Reading ${key} from cache`);
      return Promise.resolve(this._cache.read<EntryCollection<T>>(key));
    } else {
      console.log(`Fetching ${key}`);
      const entries = await contentfulClient.getEntries<T>({
        content_type,
      });
      this._cache.put(key, entries);
      return entries;
    }
  };
}

export const client = new ContentfulClient();
