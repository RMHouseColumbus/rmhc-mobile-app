export interface MealItem {
    summary: string,
    description: string
    start: Date
    end: Date
}

export class ContentService {

    private static readonly S3_URL = "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/content.json";
    private static readonly MEAL_FEED = "https://www.googleapis.com/calendar/v3/calendars/lqqc0o0vqck3c2gr99gfapqrks@group.calendar.google.com/events?calendarId=lqqc0o0vqck3c2gr99gfapqrks%40group.calendar.google.com&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";

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
        return this.load()
            .then(json => {
                if (json[page]) {
                    return json[page];
                } else {
                    return {
                        content: null
                    }
                }
            });
    }

    public static buildCalendarUrl = () => {
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
       return ContentService.MEAL_FEED +  Object.keys(params).map(key =>  `&${key}=${encodeURIComponent(params[key])}`).join("")
    };


    public static mealFeed: () => Promise<MealItem[]> = () => {
        return fetch(ContentService.buildCalendarUrl())
            .then(async res => {
                const mealJson = await res.json();
                return mealJson.items.map(i =>{
                    const mealItem : MealItem = {
                        summary: i.summary,
                        description: i .description,
                        start: new Date(i.start.dateTime),
                        end: new Date(i.end.dateTime)
                    };
                    return mealItem;
                })
            });
    }


}