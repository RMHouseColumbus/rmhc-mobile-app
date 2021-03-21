import {load} from "./StorageService";

export interface FamilyRoomItem extends GoogleCalendarItem {
}

export interface MealItem extends GoogleCalendarItem {
}

export interface ActivityItem extends GoogleCalendarItem {
}

export interface GoogleCalendarItem {
    summary: string,
    description: string
    start: Date
    end: Date
    htmlLink: string
}

export class ContentService {

    private static readonly S3_URL = "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/content.json";
    private static readonly MEAL_FEED = "https://www.googleapis.com/calendar/v3/calendars/lqqc0o0vqck3c2gr99gfapqrks@group.calendar.google.com/events?calendarId=lqqc0o0vqck3c2gr99gfapqrks%40group.calendar.google.com&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
    private static readonly ACTIVITY_FEED = "https://www.googleapis.com/calendar/v3/calendars/3fhqva87ob641vg51ubph8r0ks%40group.calendar.google.com/events?cId=M2ZocXZhODdvYjY0MXZnNTF1YnBoOHIwa3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
    private static readonly BHP_FEED = "https://www.googleapis.com/calendar/v3/calendars/rmhceventvolunteers%40gmail.com/events?cId=M2FqZjE4cTZkdmxndXRsbGkyaG5kaW11b3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
    private static readonly RIVERSIDE_FEED="https://www.googleapis.com/calendar/v3/calendars/3fhqva87ob641vg51ubph8r0ks%40group.calendar.google.com/events?cId=MjJoczQ0a3M4aHJiM20xZHFwNWxocmRodWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
                                            
    public static checkCache(key: string) {
        return load(key)
            .then(res => res ? null : null)
            .catch(e => null);
    }

    public static load() {

        const myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');

        const myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.S3_URL, myInit)
            .then(res => {
                return res.json()
            });
    }


    public static contentForPage(page: string): Promise<any> {
        return this.checkCache(page)
            .then(fromCache => {
                if (fromCache) {
                    return fromCache;
                }
                return this.load()
                    .then(json => {
                        if (json[page]) {
                            // save(page, json[page]);
                            return json[page];
                        } else {
                            return {
                                content: null
                            }
                        }
                    })
            })
    }

    private static buildGoogleCalendarUrl = (base: string) => {
        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        const params = {
            singleEvents: "true",
            timeZone: "American_New_York",
            maxAttendees: 1,
            maxResults: 15,
            sanitizeHtml: true,
            timeMin: today.toISOString(),
            timeMax: nextweek.toISOString(),
            orderBy: "startTime"
        };
        return base + Object.keys(params).map(key => `&${key}=${encodeURIComponent(params[key])}`).join("")
    };

    public static buildMealCalendarUrl: () => string = () => {
        return ContentService.buildGoogleCalendarUrl(ContentService.MEAL_FEED);
    };

    public static buildActivityCalendarUrl: () => string = () => {
        return ContentService.buildGoogleCalendarUrl(ContentService.ACTIVITY_FEED);
    };

    public static buildBHPCalendarUrl: () => string = () => {
        return ContentService.buildGoogleCalendarUrl(ContentService.BHP_FEED);
    };

    public static buildRiversideCalendarUrl: () => string = () => {
        return ContentService.buildGoogleCalendarUrl(ContentService.RIVERSIDE_FEED);
    };

    public static getGoogleFeed: <T>(name: string, url: () => string, mapper: (item: any) => T) => Promise<T[]> = (name: string, url: () => string, mapper: (item: any) => any) => {
        const today = new Date();
        const cacheKey = `${today.getMonth().toString()}-${today.getDay().toString()}-${name}`;
        return ContentService.checkCache(cacheKey)
            .then(fromCache => {
                    if (fromCache) {
                        return fromCache.map(mapper);
                    }
                    return fetch(url())
                        .then(async res => {
                            const json = await res.json();
                            return json.items.map(mapper);
                        });
                }
            );
    };

    private static mapGoogleCalendarItem = (item: any) => {
        const gItem: GoogleCalendarItem = {
            summary: item.summary,
            description: item.description,
            start: new Date(item.start.dateTime),
            end: new Date(item.end.dateTime),
            htmlLink: item.htmlLink
        };
        return gItem;
    };

    public static activityFeed: () => Promise<ActivityItem[]> = () => {
        return ContentService.getGoogleFeed<ActivityItem>('activity', ContentService.buildActivityCalendarUrl, ContentService.mapGoogleCalendarItem);
    };

    public static mealFeed: () => Promise<MealItem[]> = () => {
        return ContentService.getGoogleFeed<MealItem>('meals', ContentService.buildMealCalendarUrl, ContentService.mapGoogleCalendarItem);
    };

    public static bhpFamilyRoomFeed: () => Promise<FamilyRoomItem[]> = () => {
        return ContentService.getGoogleFeed<FamilyRoomItem>('bhp', ContentService.buildBHPCalendarUrl, ContentService.mapGoogleCalendarItem);
    };
    public static riversideFamilyRoomFeed: () => Promise<FamilyRoomItem[]> = () => {
        return ContentService.getGoogleFeed<FamilyRoomItem>('riverside', ContentService.buildRiversideCalendarUrl, ContentService.mapGoogleCalendarItem);
    };
}