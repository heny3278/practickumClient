import User from "./User";

export default class Child{
    constructor(
        public Id:number,
        public FirstName:string,
        public LastName:string,
        public Tz:string,
        public BirthDate:Date,
        public ParentId:number,
        public parent:User=new User("","","",new Date(),"",""),
        ){}
}

