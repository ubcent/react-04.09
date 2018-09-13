export class GetDate {
    constructor() {}

    static now() {
        let date = new Date();
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();
        
        dd = dd < 10 ? '0' + dd : dd;
        mm = mm < 10 ? '0' + mm : mm;

        date = mm + '/' + dd + '/' + yyyy;
        
        return date;
    }
}
