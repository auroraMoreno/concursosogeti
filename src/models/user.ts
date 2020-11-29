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
        public bank_money: number,
        public phone_number: string
    ) {}
}