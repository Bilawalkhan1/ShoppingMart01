export class product {
    Product_id: number
    Product_Name: string
    Product_Price: string
    Product_Image: []
    Product_Description: string
    availability: string
    address: string
    category: string
    type: string
    color: string
    gears: number
    brand: string
    model: number
    enginecc: number

    constructor(type: string, id: number, category: string, name: string, price: string, blogimg: string, desp: string, availabilty: string, address: string) {
        this.Product_id = id
        this.type = type
        this.category = category
        this.Product_Name = name
        this.Product_Price = price
        this.Product_Image = []
        this.Product_Description = desp
        this.address = address
        this.availability = availabilty
    }
}
