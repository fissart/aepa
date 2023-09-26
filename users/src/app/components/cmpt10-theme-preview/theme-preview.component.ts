import { Component, OnInit } from '@angular/core';
import { ThemesService } from "../../services/themes.service";
import { TaskService } from '../../services/task.service'
import { DomSanitizer } from '@angular/platform-browser';
//import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { MatIconRegistry } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';
declare var $: any;
@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styleUrls: ['./theme-preview.component.css']
})
export class ThemePreviewComponent implements OnInit {
  photo: any = [];
  markdown: string = "www";
  markdown2: string = "www";
  id!: string;
  apiUrl = environment.apiURL;
  type: string = ""
  name: string = ""
  theme: string = ""
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
    private modal: NgbModal,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,

  ) {
    iconRegistry.addSvgIconLiteral('upload', sanitizer.bypassSecurityTrustHtml(`
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="upload_laptop_arrow"><g><g id="laptop_3_"><g><g><g><g><path d="M3.5,26C3.224,26,3,25.776,3,25.5v-16C3,8.673,3.673,8,4.5,8h5.001c0.276,0,0.5,0.224,0.5,0.5         S9.777,9,9.501,9H4.5C4.225,9,4,9.225,4,9.5v16C4,25.776,3.776,26,3.5,26z" fill="#263238"/><path d="M28.5,26c-0.276,0-0.5-0.224-0.5-0.5v-16C28,9.225,27.775,9,27.5,9h-5C22.224,9,22,8.776,22,8.5         S22.224,8,22.5,8h5C28.327,8,29,8.673,29,9.5v16C29,25.776,28.776,26,28.5,26z" fill="#263238"/></g></g></g><g><g><path d="M28.5,30h-25C2.121,30,1,28.879,1,27.5C1,27.224,1.224,27,1.5,27h11c0.276,0,0.5,0.224,0.5,0.5        S12.776,28,12.5,28H2.086c0.206,0.582,0.762,1,1.414,1h25c0.652,0,1.208-0.418,1.414-1H19.5c-0.276,0-0.5-0.224-0.5-0.5        s0.224-0.5,0.5-0.5h11c0.276,0,0.5,0.224,0.5,0.5C31,28.879,29.879,30,28.5,30z" fill="#263238"/></g></g></g></g></g><g><g id="transfer_9_"><g><path d="M13.502,20c-0.276,0-0.5-0.224-0.5-0.5V9h-1.5c-0.183,0-0.352-0.1-0.438-0.261      c-0.088-0.16-0.081-0.355,0.018-0.51l4.5-7c0.186-0.285,0.656-0.285,0.842,0l4.5,7c0.099,0.154,0.105,0.35,0.018,0.51      C20.854,8.9,20.685,9,20.502,9h-1.5v8.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-9c0-0.276,0.224-0.5,0.5-0.5h1.084      l-3.584-5.575L12.418,8h1.084c0.276,0,0.5,0.224,0.5,0.5v11C14.002,19.776,13.778,20,13.502,20z" fill="#263238"/></g></g><circle cx="18.5" cy="19.5" fill="#263238" r="0.5"/></g></g></svg>
`));
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(`
<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"/></svg>
`));
    iconRegistry.addSvgIconLiteral('remove', sanitizer.bypassSecurityTrustHtml(`
<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
`));
    iconRegistry.addSvgIconLiteral('file', sanitizer.bypassSecurityTrustHtml(`
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="48px" id="Layer_1" style="enable-background:new 0 0 64 48;" version="1.1" viewBox="0 0 64 48" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Container_1_"><g><path d="M58,8H6c-1.104,0-2,0.896-2,2v23.999C4,35.104,4.896,36,6,36h52c1.104,0,2-0.896,2-2.001V10    C60,8.896,59.104,8,58,8z" style="fill:#B3B3B3;"/></g></g><g id="Paper_Tray"><g><path d="M42,0H6C4.896,0,4,0.895,4,2v12c0,1.104,0.896,2,2,2h36c1.104,0,2-0.896,2-2V2    C44,0.895,43.104,0,42,0z" style="fill:#4D4D4D;"/></g></g><g id="Shape_2_"><g><path d="M42,32H6c-1.104,0-2,0.895-2,1.999V46c0,1.104,0.896,2,2,2h36c1.104,0,2-0.896,2-2V33.999    C44,32.895,43.104,32,42,32z" style="fill:#999999;"/></g></g><g id="Body_10_"><g><path d="M60,12H4c-2.21,0-4,1.79-4,4v24c0,2.208,1.79,4,4,4v-4    c0-2.21,1.791-4,4-4h32c2.209,0,4,1.79,4,4v4h16c2.209,0,4-1.792,4-4V16C64,13.79,62.209,12,60,12z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#E6E6E6;"/></g></g><g id="Grey_Led"><g><circle cx="54" cy="22" r="2" style="fill:#808080;"/></g></g><g id="Green_Led"><g><circle cx="46" cy="22" r="2" style="fill:#88C057;"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
`));
  }

  text: string = ""
  file: string = ""

  open1(ww: any, textw: string, textww: string) {
    this.modal.open(ww, { size: 'xl', scrollable: true })
    this.text = textw;
    this.file = textww;
  }

  savetask(event: any, theme: string, unity: string, curse: string, user: string) {
    console.log(event.target.value);
    if (event.target.value <= 20 && event.target.value >= 0) {
      //console.log(event.target.value, "this.idunity", theme, unity, curse, user)
      this.task.savetaskready(event.target.value, "Tarea entregada", theme, unity, curse, user, 'P', this.archivos[0])
        .subscribe(
          (res: any) => {
            this.gettheme();
          },
          err => console.log(err)
        );
    } else {
      alert("Introdusca nota vigesimal");
      this.gettheme()
    }
  }

  updateTask(event: any, id: string, task: string, asistence: string) {
    if (event.target.value <= 20 && event.target.value >= 0) {
      this.task.updatetaskready(task, event.target.value, id, asistence ? asistence : '', this.archivos[0])
        .subscribe((res: any) => {
          this.gettheme();
          this.archivos = [];
        });
    } else {
      alert("Introdusca nota vigesimal");
      this.gettheme()

    }
  }

  saveasistant(theme: string, unity: string, curse: string, user: string, asistence: string) {
    this.loading = "false";

    //console.log('', "this.idunity", theme, unity, curse, user, asistence)
    this.task.savetaskready('', "Editar registro", theme, unity, curse, user, asistence, this.archivos[0])
      .subscribe(
        (res: any) => {
          this.gettheme();

        },
        err => console.log(err)
      );

  }

  updateasistant(id: string, task: string, nota: string, asistence: string) {

    this.loading = "false";
    this.task.updatetaskready(task, nota ? nota : '', id, asistence, this.archivos[0])
      .subscribe((res: any) => {
        this.archivos = [];
        //        this.loading = "";
        this.gettheme();

      });
  }


  updatetasskimg(event: any, id: string, task: string, note: string, asistencia: string) {
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
            this._value = 0;
            this.archivos = [];
            this.gettheme();
          }
        });
    }
  }

  createtaskimg(event: any, theme: string, unity: string, curse: string, user: string) {
    if (event.target.files[0]) {
      this.task.savetask('', "Tarea entregada", theme, unity, curse, user, 'P', event.target.files[0])
        .subscribe(
          (res: any) => {
            this.loading = "false";
            this.value = Math.round((100 / res.total) * res.loaded);
            console.log(res.total);
            console.log(res.loaded);
            if (res.total == res.loaded && res.type > 0) {
              this.loading = "";
              this._value = 0;
              this.archivos = [];
              this.gettheme();
            }
          },
          err => console.log(err)
        );
    }
  }



  errasetask(idtask: string) {
    if (window.confirm('Desea eliminar la tarea?')) {
      this.themesService.deletetask(idtask)
        .subscribe(res => {
          this.gettheme();
        });
    }
  };

  onContentChanged = (event: any) => {
    this.markdown = event.html;
    console.log(this.markdown);

  }

  gettheme() {
    this.router.params.subscribe(params => {
      this.theme = params['www'];

      this.themesService.gettheme(params['idtheme'], localStorage.getItem('idcurso') || "")
        .subscribe(
          (res: any) => {
            this.photo = res[0];
            this.markdown = res[0].description;
            const datte = new Date(res[0].time);
            console.log(datte.getTimezoneOffset());
            this.markdown2 = res[0].task;
            this.id = res[0]._id;
            console.log(res[0])
            console.log(params['idtheme'], localStorage.getItem('idcurso') || "");
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
