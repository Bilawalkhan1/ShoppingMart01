export class product{
    Product_id : number
    Product_Name :string 
    Product_Price: string 
    Product_Image:string
    Product_Description: string 
    availability: string
    address:string
    category:string
    
    constructor(id:number,category:string, name:string, price:string, blogimg:string, desp:string, availabilty:string, address:string){
        this.Product_id = id
        this.category= category
        this.Product_Name=name
        this.Product_Price=price
        this.Product_Image=blogimg
        this.Product_Description=desp
        this.address = address
        this.availability = availabilty
    }
}
