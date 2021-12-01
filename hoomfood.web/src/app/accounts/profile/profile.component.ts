import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/models/product.service';
export interface user {
  firstName: string
  email: string
  id: number
  gender?: string
  nationality?: string
  location?: string
  city?: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: user={
    firstName: '',
    email: '',
    id: 0,
  }
   
  registerForm: FormGroup;
  submitted = false;
  register: boolean;
  
  base64textString: string;
  public imagePath;
  imgURL: any;
  public message: string;
  selectedFile: File
  images = []
  
  urls = [];
  constructor(private productService: ProductService,
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.productService.userData
    this.registerForm = this.formBuilder.group({
      location: [''],
      gender: [''],
      city: [''],
      nationality: [''],
      number: [''],
    })
  }
  get f() { return this.registerForm.controls; }
 
  onUpload(id) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http
      .patch(`http://localhost:3000/users/${this.user[0].id}`, this.registerForm.getRawValue())
      .toPromise()
      .then((resp) => {
        this.register = true;
        this.registerForm.reset();  
      })
      .catch();
  }
  onSubmit() {
    this.submitted = true;

    const image = {
      ProfileImage: this.images
    }
    this.http.patch(`http://localhost:3000/users/${this.user[0].id}`, image).subscribe(
      (res: any) => {
        this.onUpload(res.id)
      },
      (err) => {
        console.error(err)
      })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
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
}
