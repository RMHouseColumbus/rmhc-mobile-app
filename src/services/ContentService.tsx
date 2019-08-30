export class ContentService {

    private static S3_URL = "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/content.json";

    private static content: any;

    public static load() {
        return fetch(this.S3_URL)
            .then(res => {
                return res.json()
            });
    }

    public static contentForPageLoad(page: string): Promise<any> {
        return this.load()
            .then(json => {
                this.content = json;
                return json[page];
            });
    }

    public static contentForPage(page: string): Promise<any> {
        let content = this.content;
        if (content === null || content === undefined) {
            return this.load()
                .then(json => {
                    this.content = json;
                    return json[page];
                });
        }
        return this.content[page];
    }


}