export class product{
    Id : number
    Name :string 
    Price: string 
    blogImg:string
    desp: string 
    
    constructor(id:number, name:string, price:string, blogimg:string, desp:string){
        this.Id = id
        this.Name=name
        this.Price=price
        this.blogImg=blogimg
        this.desp=desp
    }
}
