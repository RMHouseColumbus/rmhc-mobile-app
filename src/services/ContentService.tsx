export class ContentService {

    private static S3_URL = "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/content.json";

    
    
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
                return json[page];
            });
    }


}