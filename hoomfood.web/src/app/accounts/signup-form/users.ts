export class Users{
    id:number;
    email:any;
    name:string;
    password:any

    constructor(id: number, email: any, name: string, password: any){
        this.id = id
        this.name = name
        this.email = email
        this.password = password

    }
}