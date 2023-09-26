import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CurseService } from '../../services/curse.service'
//import { Photo } from '../../interfaces/Photo'

import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './curse-preview.component.html',
  styleUrls: ['./curse-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {
  options = {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      //"pinned": "flipInX",
      //"unpinned": "flipOutX"
      //"pinned": "bounceInDown",
      //"unpinned": "bounceOutUp"
      //"pinned": "swingInX",
      //"unpinned": "swingOutX"
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  };
  onImgError(event: any) {
    //		event.target.src = 'https://source.unsplash.com/random/1200x1000/?img=0'
    event.target.src = './assets/upload.png'
  }

  apiUrl = environment.apiURL;
  id!: string;
  type: string = ""
  name: string = ""
  photo: any = [];
  public archivos: any = [];
  public photoSelected!: string | ArrayBuffer | null;
  public loading!: string;
  public _value: number = 0;
  public rol = localStorage.getItem('rol');
  get value(): number {
    return this._value;
  }
  set value(value: number) {
    if (!isNaN(value) && value <= 100) {
      this._value = value;
    }
  }





  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: CurseService,
    private modal: NgbModal,
    private router: Router
  ) { }

  markdown: string = "www";

  getcurse() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          (res: any) => {
            this.photo = res[0];
            console.log(res);
            this.markdown = res[0].description;
            //console.log(this.description)
          },
          err => console.log(err)
        )
    });

  }



  ngOnInit() {
    this.getcurse()

  }



  typefile: string = ""

  FileCurse: any = [];


  FileCursse(event: any, curse: string, codigo: string) {
    const ww = event.target.files[0];
    this.FileCurse = [];//resetea la matriz a rango 1
    //this.FileCurse.push(ww);
    if (event.target.files[0]) {
      //console.log(event.target.files[0]);
      //this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      const reader = new FileReader();
      //reader.onload = e => this.photoSelected = reader.result;
      //reader.readAsDataURL(event.target.files[0]);
      //console.log(curse, this.name, this.typefile, this.FileCurse[0]);
      this.photoService.filecurse(curse, this.name, "curse", codigo, event.target.files[0])
        .subscribe((res: any) => {
          this.loading = "false";
          this.value = Math.round((100 / res.total) * res.loaded);
          console.log(res.total);
          console.log(res.loaded);
          if (res.total == res.loaded && res.type > 0) {
            this.getcurse();
            this.value = 0;
            this.loading = ""
          }

        })

    }
  }


  capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];//resetea la matriz a rango 1
    this.archivos.push(ww);
    //console.log(event.target.files);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/user']);
      })
  }
  /*
    updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement){
      this.photoService.updatePhoto(this.id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      });
      return false;
    }
    */
  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement, meet: HTMLInputElement) {
    console.log(this.id, title.value, description.value, meet.value, this.archivos[0]);
    this.photoService.updatePhoto(this.id, title.value, description.value, meet.value, "true", this.archivos[0])
      .subscribe((res: any) => {
        this.loading = "false";
        this.value = Math.round((100 / res.total) * res.loaded);
        if (res.total == res.loaded && res.type > 0) {
          if (localStorage.getItem('idcurso')) {
            this.router.navigate(['/curso', localStorage.getItem('idcurso')])
          } else {
            this.router.navigate(['/'])

          };
        }
        console.log(res)
      });
    return false;
  }

  text: string = ""

  openfile(file: any, textw: string) {
    this.modal.open(file, { size: 'xl', scrollable: true })
    this.text = textw;

  }


  onBlurFilosophyUpdate(event: any, id: string) {
    console.log(event.target.value);
    console.log(id);
    this.photoService.filecurseupdate(id, event.target.value)
      .subscribe((res: any) => {
        this.getcurse();
        //this.usser();
      })
  }


  FileCursedelete(id: string) {
    if (window.confirm('Desea eliminar archivo?')) {
      this.photoService.filecursedelete(id)
        .subscribe((res: any) => {
          //this.usser();
          this.getcurse();

        })
    }
  }


  onContentChanged = (event: any) => {
    this.markdown = event.html;
    console.log(this.markdown);

  }

  /*
    updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
      this.photoService.updatePhoto(this.photo._id, title.value, description.value)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/photos']);
        });
      return false;
    }
    */
}
