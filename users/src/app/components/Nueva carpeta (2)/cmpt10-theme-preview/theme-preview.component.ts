import { Component, OnInit } from '@angular/core';
import { ThemesService } from "../../services/themes.service";
import { TaskService } from '../../services/task.service'
//import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { ActivatedRoute, Router} from '@angular/router';
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';
declare var $ :any;
@Component({
    selector: 'app-theme-preview',
      templateUrl: './theme-preview.component.html',
    styleUrls: ['./theme-preview.component.css']
})
export class ThemePreviewComponent implements OnInit {
    photo: any = [];
    markdown: string="www";
    markdown2: string="www";
    id!:string;
    apiUrl = environment.apiURL;
    type: string = ""
    name: string = ""
    theme : string = ""
    public archivos: any[] = [];
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;
    currentTime: string = moment().format('M/D/YYYY hh:mm:ss a');

           get value(): number {
               return this._value;
           }
           set value(value: number) {
               if (!isNaN(value) && value <= 100) {
                   this._value = value;
               }
           }


    constructor(
      private themesService: ThemesService,
      private router: ActivatedRoute,
      private routerr: Router,
      private task: TaskService,
      private modal: NgbModal
    ) { }

    text:string=""
    file:string=""

    open1(ww: any, textw: string, textww: string) {
        this.modal.open(ww, { size: 'xl', scrollable: true })
        this.text = textw;
        this.file = textww;
    }

savetask(event:any, theme: string, unity:string, curse:string, user:string) {
console.log(event.target.value);
if(event.target.value<=20 && event.target.value>=0 ){
//console.log(event.target.value, "this.idunity", theme, unity, curse, user)
    this.task.savetaskready(event.target.value, "Tarea entregada", theme, unity, curse, user, 'P', this.archivos[0])
        .subscribe(
            (res:any) => {
              this.gettheme();
            },
            err => console.log(err)
        );
  }else{
    alert("Introdusca nota vigesimal");
    this.gettheme()
  }
}

updateTask(event:any, id: string, task: string, asistence:string) {
  if(event.target.value<=20 && event.target.value>=0 ){
  this.task.updatetaskready(task, event.target.value, id, asistence?asistence:'', this.archivos[0])
      .subscribe((res: any) => {
        this.gettheme();
        this.archivos = [];
      });
  }else{
    alert("Introdusca nota vigesimal");
    this.gettheme()

  }
}

saveasistant(theme: string, unity:string, curse:string, user:string , asistence:string) {
this.loading = "false";

//console.log('', "this.idunity", theme, unity, curse, user, asistence)
    this.task.savetaskready('', "Editar registro", theme, unity, curse, user, asistence, this.archivos[0])
        .subscribe(
            (res:any) => {
              this.gettheme();

            },
            err => console.log(err)
        );

}

updateasistant(id: string, task: string, nota:string, asistence:string) {

  this.loading = "false";
  this.task.updatetaskready(task, nota?nota:'', id, asistence, this.archivos[0])
      .subscribe((res: any) => {
        this.archivos = [];
//        this.loading = "";
        this.gettheme();

      });
}


updatetasskimg(event:any, id: string, task: string, note: string, asistencia:string) {
//alert(asistencia);
  if (event.target.files[0]) {
    this.task.updatetask(task, note, id, asistencia, event.target.files[0])
        .subscribe((res: any) => {
          this.loading = "false";
          this.value = Math.round((100 / res.total) * res.loaded);
          console.log(res.total);
          console.log(res.loaded);
          if (res.total == res.loaded && res.type > 0) {
            this.loading = "";
            this._value=0;
            this.archivos = [];
            this.gettheme();
          }
        });
  }
}

createtaskimg(event: any, theme: string, unity:string, curse:string, user:string){
      if (event.target.files[0]) {
        this.task.savetask('', "Tarea entregada", theme, unity, curse, user, 'P', event.target.files[0])
            .subscribe(
                (res:any) => {
                  this.loading = "false";
                  this.value = Math.round((100 / res.total) * res.loaded);
                  console.log(res.total);
                  console.log(res.loaded);
                  if (res.total == res.loaded && res.type > 0) {
                    this.loading = "";
                    this._value=0;
                    this.archivos = [];
                    this.gettheme();
                  }
                },
                err => console.log(err)
            );
      }
}



errasetask(idtask: string ) {
    if (window.confirm('Desea eliminar la tarea?')) {
        this.themesService.deletetask(idtask)
            .subscribe(res => {
              this.gettheme();
            });
    }
};

onContentChanged =  (event: any) =>{
   this.markdown=event.html;
  console.log(this.markdown);

 }

gettheme(){
  this.router.params.subscribe(params => {
  this.theme = params['www'];

      this.themesService.gettheme(params['idtheme'], localStorage.getItem('idcurso') || "")
          .subscribe(
              (res: any) => {
                  this.photo = res[0];
                  this.markdown = res[0].description;
                  this.markdown2 = res[0].task;
                  this.id = res[0]._id;
                  //console.log(res[0]);
                  this.loading = "";

              },
              err => console.log(err)
          )
  });
}

    ngOnInit(): void {
      this.gettheme();

    }

    public opttions: Object = {
        language: 'es',
        //charCounterCount: false,
        //toolbarButtons: ['undo', 'redo' , 'alert', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html'],
        //toolbarButtonsXS: ['undo', 'redo' , '-', 'bold', 'italic', 'underline']
        //toolbarButtons: ['bold', 'italic', 'underline','alert'],
        //toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
        //toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
        //toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
      };

    onImgError(event: any) {
           event.target.src = './assets/upload.png'
       }
   capturandoFile(event: any) {
       const ww = event.target.files[0];
               this.archivos = [];//resetea la matriz a rango 1

       this.archivos.push(ww);
       console.log(this.archivos[0]);
       if (event.target.files[0]) {
         this.type = event.target.files[0].type
             this.name = event.target.files[0].name
             //console.log(event.target.files);
         const reader = new FileReader();
         reader.onload = e => this.photoSelected = reader.result;
         reader.readAsDataURL(event.target.files[0]);
       }
     }


    updatetheme(title: HTMLInputElement, description: HTMLTextAreaElement, task: HTMLTextAreaElement, time: HTMLInputElement) {
        //console.log(this.id);
        this.themesService.updateTheme(this.id, title.value, description.value, task.value, time.value, this.archivos[0])
            .subscribe(
                (res: any) => {
                  this.loading = "false";
                  this.value = Math.round((100 / res.total) * res.loaded);
                  console.log(res.total);
                  console.log(res.loaded);
                  if (res.total == res.loaded && res.type > 0) {
//                         this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);

                    console.log(res);
                    this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                  }
                },
                err => console.log(err)
            );
        return false;
    }

}
