import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  @Input() CategoryId: string
  @Input() SubCategoryId?: number

  modelData: any[] = []
  products: product[] = [];
  filters: any[] = [];
  address: any;
  cities: any[] = []

  provinceList: Array<any> = [
    {},
    { name: 'kpk', cities: ['', 'Abbottabad', 'Bannu', 'Battagram', 'Buner', 'Charsadda', 'Chitral', 'Dera Ismail Khan', 'Hangu', 'Haripur', 'Karak', 'Kohat', 'Charsadda', 'Lakki Marwat', 'Lower Dir'] },
    { name: 'punjab', cities: ['', 'Attock', 'Bahawalnagar', 'Bahawalpur', 'Bhakkar', '	Chakwal', '	Chiniot', '	Dera Ghazi Khan', 'Faisalabad', '	Gujranwala', '	Gujrat', 'Hafizabad', 'Jhang', 'Jhelum', 'Kasur'] },
    { name: 'sindh', cities: ['', 'Hyderabad', '	Karachi', 'Badin', '	Bandhi', '	Bhiria City', 'Bhirkan', 'Chak', '		Dadu', 'Daharki', '	Daulatpur', '		Digri', 'Gambat', 'Jungshahi', 'Islamkot'] },
    { name: 'balochistan', cities: ['', 'Quetta', 'Turbat.', 'Khuzdar.', 'Hub, Balochistan', '	Chaman', '	Gwadar', '	Dera Allah Yar', 'Sibi', '	Nushki', '	Chitkan', 'Qilla Saifullah', '	Muslim Bagh', '	Qilla Abdullah', 'Washuk'] },
    { name: 'gilgit', cities: ['', 'Diamer', 'Ghanche', 'Ghizer', 'Gilgit', '	Gojal Upper Hunza', '	Kharmang', 'Nagar', 'Astore', '	Skardu'] },
  ];
  GetCategoryId: number;

  public myForm: FormGroup
  data: ArrayBuffer;
  filteredProducts: product[];
  paramsObject: any
  myFormGroup: FormGroup;

  constructor (
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      minprice: ['', Validators.required],
      maxprice: ['', Validators.required],
      companyName: ['', Validators.required],
      condition: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      model: ['', Validators.required]
    })

    if (this.router.url.includes('?')) {
      this.route.queryParamMap
        .subscribe((params) => {
          this.paramsObject = { ...params };
          console.log(this.paramsObject.params);
        }
        );
    }

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.GetCategoryId = Number(params.get('id'));
      this.SubCategoryId = Number(params.get('sid'));
    });
    this.address = this.route
      .paramMap
      .subscribe(params => {
        this.address = +params['address'];
      });
    this.getFilters()
    let group = {}
    this.filters.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    })
    this.myFormGroup = new FormGroup(group);
  }

  getFilters() {
    if (this.GetCategoryId) {
      this.productService.getFilterData(this.GetCategoryId, this.SubCategoryId)
        .subscribe(xx => {
          this.filters = xx;
          console.log(xx)
        });
    }
  }

  changeProvince(count) {
    this.cities = this.provinceList.find(con => con.name == count).cities;
  }

  onValueChange(event) {
    this.productService.getModelData(event).subscribe((filterData: any) => {
      this.modelData = filterData;
    })
  }

  onStateChange(event) {
    // this.productService.getProdByLocation(event).subscribe(products => {
    //   this.products = products;
    //   this.filteredProducts = this.products
    //   console.log('productss', this.filteredProducts)
    // });
    // this.router.navigate([], { queryParams: { address: event } })
  }

  onSubmit() {

    let routePath: any = {}
    if (this.myForm.value.province.length > 0) {
      routePath['province'] = this.myForm.value.province
    }
    if (this.myForm.value.city.length > 0) {
      routePath['city'] = this.myForm.value.city
    }
    if (this.myForm.value.condition.length > 0) {
      routePath['condition'] = this.myForm.value.condition
    }
    if (this.myForm.value.companyName.length > 0) {
      routePath['brand'] = this.myForm.value.companyName
    }

    if (this.myForm.value.model.length > 0) {
      routePath['model'] = this.myForm.value.model
    }
    if (this.myForm.value.minprice.length > 0) {
      routePath['minprice'] = this.myForm.value.minprice
    }
    if (this.myForm.value.maxprice.length > 0) {
      routePath['maxprice'] = this.myForm.value.maxprice
    }
    this.router.navigate([], { queryParams: routePath })
  }

}