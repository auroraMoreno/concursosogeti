export class User {
    constructor(
        public identifier: string,
        public identity = {
            name:"",
            firstname:"",
            secondname:"",
            sex:"",
            dateofbirth: "",
            height: ""
        },
        public job:string,
        public job_grade:number,
        public bank_money: number,
        public phone_number: string,
        public licenses = {
            weapon:""
        },
        public phone_calls: Array<string>,
        public validated: boolean,
        public house_id: number       
    ) {}
}