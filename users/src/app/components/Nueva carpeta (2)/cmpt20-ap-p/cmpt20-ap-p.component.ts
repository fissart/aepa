  import { Component, OnInit } from '@angular/core';
  import { Svc14MVService } from '../../services/svc14-mv.service';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import { environment } from '../../../environments/environment';
  import { ActivatedRoute } from '@angular/router';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-cmpt20-ap-p',
    templateUrl: './cmpt20-ap-p.component.html',
    styleUrls: ['./cmpt20-ap-p.component.css']
  })

  export class Cmpt20APPComponent implements OnInit {

  public title!: string;
  public description!: string;
  public img!: string;
  markdown!: string;
  public loading!: string;
  public _value: number = 0;
  data: any = [];
  public photoSelected!: string | ArrayBuffer | null;
  idexpo!:string;
  type!: string;
  name!: string;
  id!: string;
  public archivos: any = [];
  apiUrl = environment.apiURL;
  rol = localStorage.getItem('rol')
  constructor(
  private router: ActivatedRoute,
  private routerr: Router,
  private Service: Svc14MVService,
  private modal: NgbModal,
  ) { }
  capturandoFile(event: any) {
    this.archivos = [];
  const ww = event.target.files[0];
  this.archivos.push(ww);
  if (event.target.files[0]) {
  this.type = event.target.files[0].type;
  this.name = event.target.files[0].name;
  const reader = new FileReader();
  reader.onload = e => this.photoSelected = reader.result;
  reader.readAsDataURL(event.target.files[0]);
  }
  }

  get value(): number {
  return this._value;
  }
  set value(value: number) {
  if (!isNaN(value) && value <= 100) {
  this._value = value;
  }
  }

  onImgError(event: any) {
  event.target.src = './assets/negz.png'
  }

  options = {
  "offset": 0,
  "tolerance": 0,
  "classes": {
  "initial": "animated",
  "pinned": "bounceInDown",
  "unpinned": "bounceOutUp"
  }
  };

  gets(){
  this.Service.gettts("APe", this.idexpo)
  .subscribe(
  (res: any) => {
  this.data = res;
  console.log(res);
  },
  err => console.log(err)
  )
  }


  ngOnInit(): void {
  this.idexpo=this.router.snapshot.paramMap.get('id')+'';
  this.router.params.subscribe(params => {
  console.log(localStorage.getItem('idcurso') || "" )
  this.gets()
  });
  }

  create(subtype:string) {
  this.Service.savve(this.idexpo, "APe", subtype)
  .subscribe(
  (res: any) => {
  console.log(res);
  this.gets()
  },
  err => console.log(err)
  )
  }

creatte(event: any , subtype:string) {
console.log(event.target.value);

  this.Service.savvve(this.idexpo, "APe", subtype, event.target.value)
  .subscribe(
  (res: any) => {
  console.log(res);
  this.gets()
  },
  err => console.log(err)
  )
  /*
*/
  }


  delete(id:string) {
  if (window.confirm('Desea borrar este documento?')) {
  this.Service.remove(id)
  .subscribe(
  (res: any) => {
  console.log(res);
  this.gets()
  },
  err => console.log(err)
  )
  }
  }

  open1(ww: any, id: string, title: string, description: string, file: string) {
  this.id = id;
  this.title = title;
  this.img = file;
  this.markdown = description;
  this.modal.open(ww, { size: 'xl', scrollable: false })
  }

  open2(w: any, id: string, title: string, description: string, file: string) {
  this.id = id;
  this.title = title;
  this.img = file;
  this.markdown = description;
  this.modal.open(w, { size: 'xl', scrollable: true })
  }

  updatenews(title: HTMLInputElement, description: HTMLTextAreaElement ) {
  this.Service.update(this.id, title.value, description.value, this.archivos[0])
  .subscribe(
  (res: any) => {
  this.loading = "false";
  this.value = Math.round((100 / res.total) * res.loaded);
  if (res.total == res.loaded && res.type > 0) {
  this.loading = "";
  this.modal.dismissAll();
  this.gets()
  this.img = "";
  this.value = 0;
  this.name = "";
  this.photoSelected=""
  this.archivos = [];
  }
  },
  err => console.log(err)
  )
  }

  }
