
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { CurseService } from '../../services/curse.service';
import { UsersService } from '../../services/users.service';
import { ThemesService } from "../../services/themes.service";
/*
import md from 'markdown-it';
import mk from 'markdown-it-katex';
import texmath from 'markdown-it-texmath';
import  katex  from 'katex';
*/
@Component({
    selector: 'app-asignature',
    templateUrl: './asignature.component.html',
    styleUrls: ['./asignature.component.css']
})

export class AsignatureComponent implements OnInit {
    public loading!: string;
    public _value: number = 0;
    public DateNow! : string;
    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }

    markdown!: string;
    markdown2!: string;
     markdownw!:any;
      outHtml!:string;

    onImgError(event: any) {
        event.target.src = './assets/www_.jpg'
    }
    iduser = localStorage.getItem('id');
    apiUrl = environment.apiURL;
    public text: string = "";
    public file: string = "";

    document = {
        name: 'Angular 2',
        description: 'An amazing Angular 2 pdf',
        url: {
          url: 'http://localhost:3000/uploads/tasks/a3b6b604-a4bc-4ef8-9e6f-3b959508421c.pdf',
          withCredentials: true
          }
        }
    public title: string = "wwwwwwwwwwwwwwwwwwwwwwww";
    public description: string = "";
    public task: string = "";
    public time: string = "";
    pdfSrc = "this.apiUrl+'/'+ this.text";
    idcurso!: string;
    photo: any = [];
    photouser: any = [];
    photouserteacher: any = [];

str = `"Euler\'s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\RR^2$. $$\\int_1$$"`
    constructor(
        private router: ActivatedRoute,
        private routerr: Router,
        private themesService: ThemesService,
        private Tw: Title,
        private curseService: CurseService,
        private usersService: UsersService,
        private modal: NgbModal,
    ) {
/*
      this.markdownw=md().use(texmath.use(katex), {delimiters:'dollars'});

      this.outHtml=this.markdownw.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$ $$\\sum$$');
*/
    /*
    this.markdownw=   md().use(mk, {"throwOnError" : false, "errorColor" : " #cc0000"});
    this.outHtml = this.markdownw.render('# Math Rulez! \n  $\\sqrt[2]{3x-1}+(1+x)^2$ $\\int_1^{2}$');
    */
  }

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

totalPages!: number;
  page: number = 1;
  isLoaded: boolean = false;


     nextPage() {
        this.page += 1;
      }

      previousPage() {
        this.page -= 1;
      }

      afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
      }

getcurse(){
  localStorage.setItem("idcurso", this.router.snapshot.paramMap.get('idcurso') + '');
  this.router.params.subscribe(params => {
      //console.log(localStorage.getItem('idcurso') || "" )
      this.curseService.getCurse(localStorage.getItem('idcurso') || "" )
          .subscribe(
              (res: any) => {
                  this.photo = res[0];
                  this.Tw.setTitle(res[0].title);
                  console.log(res[0],"1")

                  this.usersService.getUserTeacher(res[0].user)
                      .subscribe(
                          (res: any) => {
                              this.photouserteacher = res[0];
                              console.log(res[0],"3")
                        //localStorage.setItem('imguser', res.foto);
                          },
                          err => console.log(err)
                      );

              },
              err => console.log(err)
          )
          if (localStorage.getItem('id')) {
              this.usersService.getUser()
                  .subscribe(
                      (res: any) => {
                          this.photouser = res[0];
                          //console.log(res[0],"2")
                    //localStorage.setItem('imguser', res.foto);
                      },
                      err => console.log(err)
                  );
          };

  });
}

    ngOnInit(): void {
      this.getcurse()
      var str = new Date().setSeconds(0,0);

      var dt = new Date(str).toISOString();
      this.DateNow=dt;


        this.idcurso = localStorage.getItem('idcurso') || "";
        localStorage.removeItem('idunity');

    }
    /*  selectedUser(id: string) {
        this.routerr.navigate(['/photo/new']);
        console.log(id);
      };
    */
    selectheme(id: string, idunity: string) {
        this.routerr.navigate(['/tema', id, idunity]);
        //localStorage.setItem("idunity", idunity)
    };

updatetask(idtask: string ) {
        this.routerr.navigate(['/task', idtask]);
        //localStorage.setItem("idunity", idunity)
    };

deletetask(idtask: string ) {
        if (window.confirm('Desea eliminar la tarea de este tema?')) {
            this.themesService.deletetask(idtask)
                .subscribe(res => {
                    this.router.params.subscribe(params => {
                        this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                            .subscribe(
                                (res: any) => {
                                    this.photo = res[0];
                                    //console.log(res[0])
                                },
                                err => console.log(err)
                            )
                    });
                });
        }
    };

    CreateSection(iduser: string, idcurse: string, cursecode: string, ) {
        //console.log(localStorage.getItem('id'));
        this.curseService.createUnity(iduser, idcurse, cursecode)
            .subscribe(res => {
                this.router.params.subscribe(params => {
                    this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                        .subscribe(
                            (res: any) => {
                                this.photo = res[0];
                                //this.routerr.navigate(['#www'])
                                //console.log(res[0])
                            },
                            err => console.log(err)
                        )
                });
            });
        return false;

        //console.log(this.archivos[0]);
    }

    savetheme(idtheme: string) {
        this.themesService.createtheme(idtheme, localStorage.getItem('idcurso') || "", localStorage.getItem('id') || "")
            .subscribe(
                res => {
                    console.log(res);
                    this.router.params.subscribe(params => {
                        this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                            .subscribe(
                                (res: any) => {
                                    this.photo = res[0];
                                    //console.log(res[0])
                                },
                                err => console.log(err)
                            )
                    });
                },
                err => console.log(err)
            );
        return false;
    }

    /*updatetheme(title: HTMLInputElement, description: HTMLTextAreaElement, task: HTMLTextAreaElement, time: HTMLInputElement) {
        this.themesService.updateTheme(title.value, description.value, task.value, time.value)
            .subscribe(
                res => {
                    console.log(res);
                    this.router.params.subscribe(params => {
                        this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                            .subscribe(
                                (res: any) => {
                                    this.photo = res[0];
                                    //console.log(res[0])
                                },
                                err => console.log(err)
                            )
                    });
                },
                err => console.log(err)
            );
        return false;
    }*/


    errase(idtheme: string, ntask: string ) {
        if (ntask == '0') {
        if (window.confirm('Desea eliminar este tema?')) {
            this.themesService.delete(idtheme)
                .subscribe(res => {
                    this.router.params.subscribe(params => {
                        this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                            .subscribe(
                                (res: any) => {
                                    this.photo = res[0];
                                    //console.log(res[0])
                                },
                                err => console.log(err)
                            )
                    });
                });
        }
            }else{alert('Debe borrar la tarea correspondiente')}
    }


editunity(id: string) {
		this.routerr.navigate(['/unity', id]);
		//console.log(id);
	};

edittheme(idw: string) {
		this.routerr.navigate(['/theme', idw]);
		//console.log(id);
	};

  themecalificacion(id:string, www:string) {
  		this.routerr.navigate([`/theeme/${id}/${localStorage.getItem('idcurso') || ""}`]);
  		//console.log(id);
  	};

selectedCard(id: string) {
  this.routerr.navigate(['/cursoup', id]);
  console.log(id);
};

std(id: string) {
	this.routerr.navigate(['/integers', id]);
	console.log(id);
};

    errasesection(id: string, ntemas: string ) {
    if (ntemas == '0') {
        if (window.confirm('Desea eliminar este módulo?')) {
            this.curseService.delete(id)
                .subscribe(res => {
                    this.router.params.subscribe(params => {
                        this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                            .subscribe(
                                (res: any) => {
                                    this.photo = res[0];
                                    //console.log(res[0])
                                },
                                err => console.log(err)
                            )
                    });
                });
        }
    }else{alert('Debe borrar todos los temas del módulo')}
    }
    open1(ww: any, textw: string, textww: string) {
        this.modal.open(ww, { size: 'xl', scrollable: true })
        this.text = textw;
        this.file = textww;
console.log(textw,textww);

    }

    open2(www: any, textw: string) {
        this.modal.open(www, { size: 'xl', scrollable: true })
        this.text = textw;

    }
    open3(www: any, textw: string) {
        this.modal.open(www, { size: 'xl', scrollable: true })
        this.text = textw;

    }

    openw(www__: any, id: string, title: string, description: string, task: string, time: string) {
        console.log(title, description, task, time)
        this.title = "title";
        this.description = description;
        this.task = task;
        this.time = time;
        this.modal.open(www__, { size: 'xl', scrollable: false });
    }
}
