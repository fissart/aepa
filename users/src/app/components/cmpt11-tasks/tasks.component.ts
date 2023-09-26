import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service'
import { environment } from '../../../environments/environment';
//import { KatexOptions } from 'ng-katex';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    idtheme: string = "";
    idunity: string = ""
    iduser: string = "";
    idcurse: string = ""
    pdfSrc: string = ""
    type: string = ""
    name: string = ""
    markdown="Escriba algo aqui"
    apiUrl = environment.apiURL;
    photo: any = [];


    public archivos: any[] = [];
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }


  constructor(
    private router: ActivatedRoute,    private routerr:Router,
    private task: TaskService
  ) { }

  ngOnInit(): void {
    localStorage.setItem("idunity", this.router.snapshot.paramMap.get('idunity') + '')
      this.iduser = localStorage.getItem('id') || "";
      this.idcurse = localStorage.getItem('idcurso') || "";
      this.idtheme = this.router.snapshot.paramMap.get('idtheme') + '';
      this.idunity  = this.router.snapshot.paramMap.get('idunity') + '';
      console.log(localStorage.getItem('id') || "" )
}


  onImgError(event: any) {
        event.target.src = './assets/save.png'
    }
capturandoFile(event: any) {
    const ww = event.target.files[0];
    this.archivos = [];//resetea la matriz a rango 1
    this.pdfSrc = "";//resetea la matriz a rango 1
    this.archivos.push(ww);
    console.log(event.target.files[0].type);
    if (event.target.files[0]) {
      this.type = event.target.files[0].type
      this.name = event.target.files[0].name
      console.log(event.target.files);
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }



savetask(task: HTMLTextAreaElement) {
    console.log(this.idtheme, this.idunity, this.idcurse, this.iduser)
        this.task.savetask('', task.value, this.idtheme, this.idunity, this.idcurse, this.iduser, 'F', this.archivos[0] )
            .subscribe(
                (res:any) => {
                    this.loading = "false";
                    this.value = Math.round((100 / res.total) * res.loaded);
                    if (res.total == res.loaded && res.type > 0 && res.ok) {
                    console.log(res.ok);
                      this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    }
                },
                err => console.log(err)
            );
        return false;
        }

}
