import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/app/Classes/product';
import { ProductService } from '../../models/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() CategoryId : string
  @Input() SubCategoryId? : number

  dataproduct: any
  modelData:any[]=[]
  products: product[] = [];
  filters: any[] = [];
  filterData: any[] = [];
  filteredProducts: product[] = [];
  locationFilteredProducts: product[] = [];
  categories$: Observable<any>;
  category: any;
  models: any;
  products$: Observable<any>;
  subcategory: any
  province: any;
  address: any;  
  display:boolean
  cities: any[]=[]
  provinceList: Array<any> = [
    {},
    { name: 'kpk', cities: ['', 'Abbottabad', 'Bannu', 'Battagram', 'Buner', 'Charsadda', 'Chitral', 'Dera Ismail Khan', 'Hangu', 'Haripur', 'Karak', 'Kohat', 'Charsadda', 'Lakki Marwat', 'Lower Dir'] },
    { name: 'punjab', cities: ['', 'Attock', 'Bahawalnagar', 'Bahawalpur', 'Bhakkar', '	Chakwal', '	Chiniot', '	Dera Ghazi Khan', 'Faisalabad', '	Gujranwala', '	Gujrat', 'Hafizabad', 'Jhang', 'Jhelum', 'Kasur'] },
    { name: 'sindh', cities: ['', 'Hyderabad', '	Karachi', 'Badin', '	Bandhi', '	Bhiria City', 'Bhirkan', 'Chak', '		Dadu', 'Daharki', '	Daulatpur', '		Digri', 'Gambat', 'Jungshahi', 'Islamkot'] },
    { name: 'balochistan', cities: ['', 'Quetta', 'Turbat.', 'Khuzdar.', 'Hub, Balochistan', '	Chaman', '	Gwadar', '	Dera Allah Yar', 'Sibi', '	Nushki', '	Chitkan', 'Qilla Saifullah', '	Muslim Bagh', '	Qilla Abdullah', 'Washuk'] },
    { name: 'gilgit', cities: ['', 'Diamer', 'Ghanche', 'Ghizer', 'Gilgit', '	Gojal Upper Hunza', '	Kharmang', 'Nagar', 'Astore', '	Skardu'] },
  ];
  GetCategoryId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, 
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
console.log("check", this.CategoryId)
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      this.subcategory = params.get('subcategory');
      this.GetCategoryId = Number(params.get('id'));
      this.SubCategoryId = Number(params.get('sid'));
    });
    this.address = this.route
      .paramMap
      .subscribe(params => {
        this.address = +params['address'];
      });
    this.getFilterData()
  }

  getFilterData() {
    if (this.GetCategoryId) {
      this.productService.getFilterData(this.GetCategoryId).subscribe(filters => {
        this.filters = filters;
      });
    }
  }

  changeProvince(count) {
    this.cities = this.provinceList.find(con => con.name == count).cities;
  }

  onValueChange(event){
    this.productService.getModelData(event).subscribe((filterData:any) => {
      this.modelData = filterData;
  })
}

  onStateChange(event) {
    this.productService.getProdByLocation(event).subscribe(products => {
      this.products = products;
      // this.filteredProducts = this.products
    });
    // this.router.navigate([], { queryParams: { address: event } })
  }
}