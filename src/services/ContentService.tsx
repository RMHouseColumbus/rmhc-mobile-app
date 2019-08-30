export class ContentService {

    private static S3_URL = "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/content.json";


    public static load() {
        return fetch(this.S3_URL)
            .then(res => {
                return res.json()
            });
    }


    public static contentForPage(page: string): Promise<any> {
        return this.load()
            .then(json => {
                return json[page];
            });
    }


}