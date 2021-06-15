import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../Services/imageservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestserviceService } from '../Services/restservice.service';

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
  optionValue

  get f() { return this.checkoutForm.controls; }

  constructor(private sanitizer: DomSanitizer, private imageService: ImageserviceService,
    private formBuilder: FormBuilder, private http: HttpClient, private rs: RestserviceService) {
    this.checkoutForm = formBuilder.group({
      category: formBuilder.control('initial value', Validators.required)
    })

  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      category: ['', Validators.required],
      type: ['', Validators.required],
      Product_Name: ['', Validators.required],
      availability: ['', Validators.required],
      Product_id: ['', Validators.required],
      address: ['', Validators.required],
      Product_Price: ['', Validators.required],
      Product_Description: ['', Validators.required],
      extras: ['']
    });
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

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
      this.imgURL = reader.result;
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
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
  }

  onUpload() {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.checkoutForm.value, null, 4));

    const fd = new FormData()
    fd.append('image', this.base64textString)
    const image = {
      Product_Image: this.base64textString
    }
    this.http.post('http://localhost:3000/Product', image).subscribe(
      (res: any) => {
        this.onSubmit(res.id)
      },
      (err) => {
        console.error(err)
      })

  }

}


