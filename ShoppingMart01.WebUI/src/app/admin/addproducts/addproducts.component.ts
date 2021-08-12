import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../../Services/imageservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestserviceService } from '../../Services/restservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  base64textString: string;
  products: any[];
  submitted = false;
  checkoutForm: FormGroup
  public imagePath;
  imgURL: any;
  public message: string;
  selectedFile: File
  images = []
  optionValue
  urls = [];
  vehicle: boolean = false
  formData: any = [];
  modelData: any = []
  model: any = []
  cities: any[] = []
  SubCategoryId: number;
  CategoryName: string;
  SubCategoryName: string;
  data: any;
  get f() { return this.checkoutForm.controls; }
  provinceList: Array<any> = [
    {},
    { name: 'kpk', cities: ['', 'Abbottabad', 'Bannu', 'Battagram', 'Buner', 'Charsadda', 'Chitral', 'Dera Ismail Khan', 'Hangu', 'Haripur', 'Karak', 'Kohat', 'Charsadda', 'Lakki Marwat', 'Lower Dir'] },
    { name: 'punjab', cities: ['', 'Attock', 'Bahawalnagar', 'Bahawalpur', 'Bhakkar', '	Chakwal', '	Chiniot', '	Dera Ghazi Khan', 'Faisalabad', '	Gujranwala', '	Gujrat', 'Hafizabad', 'Jhang', 'Jhelum', 'Kasur'] },
    { name: 'sindh', cities: ['', 'Hyderabad', '	Karachi', 'Badin', '	Bandhi', '	Bhiria City', 'Bhirkan', 'Chak', '		Dadu', 'Daharki', '	Daulatpur', '		Digri', 'Gambat', 'Jungshahi', 'Islamkot'] },
    { name: 'balochistan', cities: ['', 'Quetta', 'Turbat.', 'Khuzdar.', 'Hub, Balochistan', '	Chaman', '	Gwadar', '	Dera Allah Yar', 'Sibi', '	Nushki', '	Chitkan', 'Qilla Saifullah', '	Muslim Bagh', '	Qilla Abdullah', 'Washuk'] },
    { name: 'gilgit', cities: ['', 'Diamer', 'Ghanche', 'Ghizer', 'Gilgit', '	Gojal Upper Hunza', '	Kharmang', 'Nagar', 'Astore', '	Skardu'] },
  ];

  constructor(private sanitizer: DomSanitizer, private imageService: ImageserviceService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private rs: RestserviceService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.checkoutForm = formBuilder.group({
      category: formBuilder.control('initial value', Validators.required)
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.CategoryName = params.get('categ');
      this.SubCategoryId = Number(params.get('id'));
      this.SubCategoryName = params.get('subcateg');
    });
    this.data = this.capitalizeFirstLetter(this.SubCategoryName)
    console.log(this.CategoryName, this.SubCategoryId, this.SubCategoryName)
    if (this.CategoryName == 'vehicles') {
      this.vehicle = true
      console.log('vehicle', this.CategoryName)
    }
    else {
      this.vehicle = false
    }
  }
  capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      categoryid: [''],
      Category: [this.capitalizeFirstLetter(this.CategoryName)],
      CategoryType: [this.capitalizeFirstLetter(this.SubCategoryName)],
      category: ['', Validators.required],
      type: ['', Validators.required],
      Product_Name: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      Product_Price: ['', Validators.required],
      Product_Description: ['', Validators.required],
      model: ['', Validators.required],
      enginecc: ['', Validators.required],
      year: ['', Validators.required],
      color: [''],
      gear: [''],
    });

    this.productService.getModelData(this.data).subscribe((filterData: any) => {
      this.model = filterData;
      console.log(this.model)
    })

    this.productService.getFormData().subscribe(response => {
      this.formData = response
      console.log('response', response)
    })

  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader()
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

    }

    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.urls.push(reader.result)
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.images.push({ img: this.base64textString })
    console.log('string', btoa(binaryString));
  }

  onSubmit(id): void {
    this.rs.createProduct(id, this.checkoutForm.value)
      .subscribe(
        (response) => {
        },
        error => console.error(error)
      )
    this.checkoutForm.reset();
    this.router.navigateByUrl('/home')
  }

  onUpload() {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      return;
    }
    const image = {
      Product_Image: this.images
    }
    this.http.post('http://localhost:3000/Product', image).subscribe(
      (res: any) => {
        this.onSubmit(res.id)
      },
      (err) => {
        console.error(err)
      })
  }
  onValueChange(event) {
    this.productService.getSubCategory(event).subscribe((filterData: any) => {
      this.modelData = filterData;
      console.log('name', event)
      console.log('value', filterData)
    })
  }

  changeProvince(count) {
    this.cities = this.provinceList.find(con => con.name == count).cities;
  }
  onSubCategoryValueChanges(event) {

  }
}


