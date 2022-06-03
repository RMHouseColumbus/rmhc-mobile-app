import BasicCache from "../commons/Cache";

import type { FeedType } from "./CalendarFeeds";
import { Feeds } from "./CalendarFeeds";
import type { GoogleCalendarItem } from "./GCalTypes";

export class GCalClient {
  private _cache: BasicCache;

  constructor() {
    this._cache = new BasicCache();
  }

  async getFeed(feed: FeedType) {
    const url = this.createGoogleCalendarUrl(feed);
    if (this._cache.has(feed)) {
      console.log(`Reading ${feed} from cache`);

      return this._cache.read<GoogleCalendarItem[]>(feed);
    } else {
      console.log(`Fetching ${feed}`);
      const items = await this.fetchFeed(url);
      this._cache.put(feed, items);
      return items;
    }
  }

  private async fetchFeed(url: string): Promise<GoogleCalendarItem[]> {
    const res = await fetch(url);
    const data = await res.json();
    const { items } = data;
    return items.map((item: any) => {
      return {
        summary: item.summary,
        description: item.description,
        start: new Date(item.start.dateTime),
        end: new Date(item.end.dateTime),
        htmlLink: item.htmlLink,
      } as GoogleCalendarItem;
    });
  }

  private createGoogleCalendarUrl = (feed: FeedType) => {
    const today = new Date();
    const nextweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const params = {
      singleEvents: "true",
      timeZone: "American_New_York",
      maxAttendees: "1",
      maxResults: "15",
      sanitizeHtml: "true",
      timeMin: today.toISOString(),
      timeMax: nextweek.toISOString(),
      orderBy: "startTime",
    };
    return (
      Feeds[feed] +
      Object.keys(params)
        .map(
          (key) =>
            `&${key}=${encodeURIComponent(params[key as keyof typeof params])}`
        )
        .join("")
    );
  };
}

export const gcal = new GCalClient();
