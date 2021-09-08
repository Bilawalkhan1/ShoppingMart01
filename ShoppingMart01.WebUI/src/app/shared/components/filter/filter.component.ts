import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { product } from 'src/app/Classes/product';
import { ProductService } from '../../models/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  dynamicFormArray: any;
  dynamicFormGroup: FormGroup;

  @Input() CategoryId: string
  @Input() SubCategoryId?: number

  modelData: any[] = []
  cities: any[] = []
  GetCategoryId: number;
  public myForm: FormGroup
  closeResult = '';

  provinceList: Array<any> = [
    {},
    { name: 'kpk', cities: [ 'Abbottabad', 'Bannu', 'Battagram', 'Buner', 'Charsadda', 'Chitral', 'Dera Ismail Khan', 'Hangu', 'Haripur', 'Karak', 'Kohat', 'Charsadda', 'Lakki Marwat', 'Lower Dir'] },
    { name: 'punjab', cities: [ 'Attock', 'Bahawalnagar', 'Islamabad', 'Rawalpindi', 'Bahawalpur', 'Bhakkar', '	Chakwal', '	Chiniot', '	Dera Ghazi Khan', 'Faisalabad', '	Gujranwala', '	Gujrat', 'Hafizabad', 'Jhang', 'Jhelum', 'Kasur'] },
    { name: 'sindh', cities: [ 'Hyderabad', '	Karachi', 'Badin', '	Bandhi', '	Bhiria City', 'Bhirkan', 'Chak', '		Dadu', 'Daharki', '	Daulatpur', '		Digri', 'Gambat', 'Jungshahi', 'Islamkot'] },
    { name: 'balochistan', cities: [ 'Quetta', 'Turbat.', 'Khuzdar.', 'Hub, Balochistan', '	Chaman', '	Gwadar', '	Dera Allah Yar', 'Sibi', '	Nushki', '	Chitkan', 'Qilla Saifullah', '	Muslim Bagh', '	Qilla Abdullah', 'Washuk'] },
    { name: 'gilgit', cities: [ 'Diamer', 'Ghanche', 'Ghizer', 'Gilgit', '	Gojal Upper Hunza', '	Kharmang', 'Nagar', 'Astore', '	Skardu'] },
  ];

  constructor (
    private modalService: NgbModal,
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({     
      city: ['', Validators.required],
      province: ['', Validators.required],   
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.GetCategoryId = Number(params.get('id'));
      this.SubCategoryId = Number(params.get('sid'));
    });
    const FilterId = this.GetId(this.GetCategoryId, this.SubCategoryId);
    this.getFilters(FilterId)
  }

  getFilters(FilterId) {
    this.dynamicFormGroup = this.fb.group({});
    this.productService.getFilterData(FilterId)
      .subscribe((x: any) => {
        this.dynamicFormArray = x.map(u => u.controls)
        this.createDynamicFormControl();
      });
  }
  // 
  istrue:boolean=true
  createDynamicFormControl() {
    this.dynamicFormArray.forEach(element => {
      element.forEach(x => {
        this.dynamicFormGroup.addControl(x.id, new FormControl(''));
      });
    });
  }

  onSubmit() {
    let routePath: any = {}
    if (this.myForm.value.province.length > 0) {
      routePath['province'] = this.myForm.value.province
    }
    if (this.myForm.value.city.length > 0) {
      routePath['city'] = this.myForm.value.city
    }

    this.dynamicFormArray.forEach(element => {
      element.forEach(x => {
        if (this.dynamicFormGroup.get(x.id).value)
          Object.keys(this.dynamicFormGroup.controls).forEach(key => {
            if (key === x.id) {
              routePath[key] = this.dynamicFormGroup.get(x.id).value
            }
          })

      })
    });
    this.router.navigate([], { queryParams: routePath })
    this.modalService.dismissAll()
  }
  // 

  changeProvince(count) {
    this.cities = this.provinceList.find(con => con.name == count).cities;
    this.istrue =false
  }

  onValueChange(event) {
    this.productService.getModelData(event).subscribe((filterData: any) => {
      this.modelData = filterData;
    })
  }

  GetId(CategoryId, subcategoryId?) {
    let id: number;
    if (!subcategoryId) {
      id = CategoryId;
    }
    else {
      id = subcategoryId;
    }
    return id;
  }

  //
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-modal-css'})    
  }
}

