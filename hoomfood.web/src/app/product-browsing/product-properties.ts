import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class ProductProperties {

    GetProductFilterProperties() {
        return ({
            MobileBrands:
                [
                    { BrandName: "Samsung", Checked: false },
                    { BrandName: "Apple", Checked: false },
                    { BrandName: "Oppo", Checked: false }
                ],
            MobileOs: [
                { OSName: "IOS", Checked: false },
                { OSName: "Android", Checked: false }
            ],
            Color:
                [
                    { color: "Black", Checked: false },
                    { color: "White", Checked: false },
                    { color: "Grey", Checked: false },
                ],
            CarBrands:
                [
                    { BrandName: "Suzuki", Checked: false },
                    { BrandName: "Toyota", Checked: false },
                    { BrandName: "Honda", Checked: false },
                ]

        })
    }

}
