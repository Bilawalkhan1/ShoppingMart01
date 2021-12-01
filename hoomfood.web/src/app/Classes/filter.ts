export class filter {
    category: string
    cars: []
    id:number
    label:any
    furniture: []
    filters: []
    name:string
    models:[]
    constructor(category: string, filters:string, label:string, name:string) {
        this.category = category
        this.cars = []
        this.filters = []
        this.label = label
        this.name =name
        this.models = []
    }
}