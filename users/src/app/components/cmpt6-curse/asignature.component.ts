
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    public DateNow!: string;
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
    markdownw!: any;
    outHtml!: string;

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
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer,

    ) {
        iconRegistry.addSvgIconLiteral('student', sanitizer.bypassSecurityTrustHtml(`
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 width="44.979px" height="44.979px" viewBox="0 0 44.979 44.979" style="enable-background:new 0 0 44.979 44.979;"
        	 xml:space="preserve">
        <g>
        	<g>
        		<path d="M28.502,17.371c-0.002,0-11.213-0.004-12.011-0.004c0,0-0.005,0-0.006,0c-1.021,0-1.853,0.846-1.85,1.867l0.04,11.565
        			c0.004,1.018,0.83,1.863,1.845,1.863c0.002,0,0.005,0,0.007,0c0.574,0,1.086-0.287,1.423-0.701l0.729,11.256
        			c0.064,1.006,0.9,1.762,1.909,1.762h3.804c1.008,0,1.842-0.767,1.908-1.772l0.727-11.276c0.338,0.438,0.849,0.731,1.425,0.731
        			c0.002,0,0.003,0,0.007,0c1.016,0,1.841-0.86,1.848-1.871l0.037-11.544C30.347,18.235,29.522,17.371,28.502,17.371z"/>
        		<circle cx="22.491" cy="11.022" r="5.115"/>
        		<path d="M11.14,9.006c-0.001,0-8.809-0.003-9.435-0.003c0,0-0.004,0-0.005,0c-0.801,0-1.455,0.665-1.453,1.467l0.031,9.085
        			c0.003,0.8,0.652,1.464,1.45,1.464c0.001,0,0.004,0,0.005,0c0.451,0,0.854-0.225,1.118-0.55l0.573,8.841
        			c0.051,0.789,0.707,1.383,1.5,1.383h2.989c0.791,0,1.446-0.602,1.499-1.391l0.57-8.859c0.266,0.343,0.667,0.575,1.12,0.575
        			c0.001,0,0.002,0,0.005,0c0.798,0,1.446-0.677,1.451-1.47l0.03-9.07C12.589,9.685,11.941,9.006,11.14,9.006z"/>
        		<circle cx="6.418" cy="4.018" r="4.018"/>
        	</g>
        	<g>
        		<path d="M33.839,9.006c0.001,0,8.809-0.003,9.436-0.003h0.004c0.802,0,1.455,0.665,1.453,1.467l-0.03,9.085
        			c-0.003,0.8-0.652,1.464-1.45,1.464c-0.001,0-0.004,0-0.005,0c-0.451,0-0.854-0.225-1.118-0.55l-0.572,8.841
        			c-0.052,0.789-0.707,1.383-1.5,1.383h-2.99c-0.791,0-1.445-0.602-1.498-1.391l-0.57-8.859c-0.266,0.343-0.667,0.575-1.12,0.575
        			c-0.001,0-0.002,0-0.005,0c-0.799,0-1.447-0.677-1.451-1.47l-0.029-9.07C32.39,9.685,33.038,9.006,33.839,9.006z"/>
        		<circle cx="38.562" cy="4.018" r="4.018"/>
        	</g>
        </g>
        </svg>
`));

        iconRegistry.addSvgIconLiteral('upload', sanitizer.bypassSecurityTrustHtml(`
<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="upload_laptop_arrow"><g><g id="laptop_3_"><g><g><g><g><path d="M3.5,26C3.224,26,3,25.776,3,25.5v-16C3,8.673,3.673,8,4.5,8h5.001c0.276,0,0.5,0.224,0.5,0.5         S9.777,9,9.501,9H4.5C4.225,9,4,9.225,4,9.5v16C4,25.776,3.776,26,3.5,26z" fill="#263238"/><path d="M28.5,26c-0.276,0-0.5-0.224-0.5-0.5v-16C28,9.225,27.775,9,27.5,9h-5C22.224,9,22,8.776,22,8.5         S22.224,8,22.5,8h5C28.327,8,29,8.673,29,9.5v16C29,25.776,28.776,26,28.5,26z" fill="#263238"/></g></g></g><g><g><path d="M28.5,30h-25C2.121,30,1,28.879,1,27.5C1,27.224,1.224,27,1.5,27h11c0.276,0,0.5,0.224,0.5,0.5        S12.776,28,12.5,28H2.086c0.206,0.582,0.762,1,1.414,1h25c0.652,0,1.208-0.418,1.414-1H19.5c-0.276,0-0.5-0.224-0.5-0.5        s0.224-0.5,0.5-0.5h11c0.276,0,0.5,0.224,0.5,0.5C31,28.879,29.879,30,28.5,30z" fill="#263238"/></g></g></g></g></g><g><g id="transfer_9_"><g><path d="M13.502,20c-0.276,0-0.5-0.224-0.5-0.5V9h-1.5c-0.183,0-0.352-0.1-0.438-0.261      c-0.088-0.16-0.081-0.355,0.018-0.51l4.5-7c0.186-0.285,0.656-0.285,0.842,0l4.5,7c0.099,0.154,0.105,0.35,0.018,0.51      C20.854,8.9,20.685,9,20.502,9h-1.5v8.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-9c0-0.276,0.224-0.5,0.5-0.5h1.084      l-3.584-5.575L12.418,8h1.084c0.276,0,0.5,0.224,0.5,0.5v11C14.002,19.776,13.778,20,13.502,20z" fill="#263238"/></g></g><circle cx="18.5" cy="19.5" fill="#263238" r="0.5"/></g></g></svg>
`));
        iconRegistry.addSvgIconLiteral('expand', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 489.3 489.3" style="enable-background:new 0 0 489.3 489.3;" xml:space="preserve">
  <g>
  	<g>
  		<path d="M0,12.3V477c0,6.8,5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H24.5V24.5h440.2V235
  			c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V12.3C489.3,5.5,483.8,0,477,0H12.3C5.5,0,0,5.5,0,12.3z"/>
  		<path d="M489.2,476.9V306.6c0-6.8-5.5-12.3-12.3-12.3H306.6c-6.8,0-12.3,5.5-12.3,12.3V477c0,6.8,5.5,12.3,12.3,12.3H477
  			C483.7,489.2,489.2,483.7,489.2,476.9z M464.7,464.7H318.8V318.8h145.9V464.7z"/>
  		<path d="M219.8,98.1c0-6.8-5.5-12.3-12.3-12.3H98.1c-6.8,0-12.3,5.5-12.3,12.3v109.5c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3
  			v-80l138.7,138.7c2.4,2.4,5.5,3.6,8.7,3.6c3.2,0,6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3L127.6,110.3h79.9
  			C214.3,110.3,219.8,104.8,219.8,98.1z"/>
  	</g>
  </g>
  </svg>
`));

        iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 width="494.936px" height="494.936px" viewBox="0 0 494.936 494.936" style="enable-background:new 0 0 494.936 494.936;"
  	 xml:space="preserve">
  <g>
  	<g>
  		<path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
  			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
  			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
  			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
  		<path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
  			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
  			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
  			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
  			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
  			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
  	</g>
  </g>
  </svg>
`));
        iconRegistry.addSvgIconLiteral('remove', sanitizer.bypassSecurityTrustHtml(`
<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
`));
        iconRegistry.addSvgIconLiteral('file', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 width="339.999px" height="339.999px" viewBox="0 0 339.999 339.999" style="enable-background:new 0 0 339.999 339.999;"
  	 xml:space="preserve">
  <g>
  	<g>
  		<g>
  			<path d="M329.242,276.007h-26.765v-26.764c0-2.761-2.237-5-5-5h-16.474c-2.762,0-5,2.239-5,5v26.764H249.24c-2.763,0-5,2.239-5,5
  				v16.472c0,2.763,2.237,5,5,5h26.764v26.766c0,2.761,2.238,5,5,5h16.474c2.763,0,5-2.239,5-5v-26.766h26.765c2.762,0,5-2.237,5-5
  				v-16.472C334.242,278.246,332.004,276.007,329.242,276.007z"/>
  			<path d="M275.475,147.486l-82.964-82.965c-2.746-2.745-7.162-2.862-10.046-0.268c-14.861,13.354-93,81.184-171.941,105.162
  				l-0.855,0.259c-2.051,0.623-3.727,2.114-4.582,4.082c-0.854,1.969-0.801,4.209,0.146,6.133l0.395,0.799
  				c0.004,0.012,0.009,0.02,0.016,0.027c0.271,0.564,11.652,24.328,13.133,57.812c0.916,20.819-2.102,40.832-8.945,59.519
  				c-2.441,0.19-4.834,1.215-6.703,3.084c-4.168,4.167-4.166,10.921,0,15.087s10.92,4.167,15.086,0
  				c2.408-2.409,3.416-5.682,3.039-8.82l76.486-76.488c1.908-1.907,2.609-4.71,1.824-7.289c-2.703-8.891-0.291-18.509,6.299-25.098
  				c4.756-4.758,11.078-7.377,17.809-7.377c6.731,0,13.059,2.619,17.813,7.377c4.758,4.757,7.375,11.08,7.375,17.809
  				c0,6.728-2.617,13.051-7.377,17.81c-4.754,4.754-11.074,7.371-17.799,7.372c-2.494,0-4.953-0.361-7.311-1.075
  				c-2.582-0.782-5.379-0.08-7.283,1.824L32.61,318.749c-3.143-0.378-6.416,0.628-8.826,3.038c-4.166,4.166-4.164,10.921,0,15.087
  				c4.166,4.166,10.922,4.167,15.088,0c1.869-1.869,2.893-4.258,3.084-6.702c16.48-6.036,34.014-9.104,52.15-9.104
  				c2.275,0,4.604,0.049,6.922,0.145c33.588,1.385,58.088,13.064,58.314,13.173l0.775,0.382c1.014,0.498,2.117,0.749,3.221,0.748
  				c0.99,0.001,1.98-0.2,2.91-0.603c1.963-0.855,3.457-2.529,4.08-4.579l0.258-0.854c23.979-78.942,91.807-157.083,105.16-171.943
  				C278.338,154.645,278.221,150.233,275.475,147.486z"/>
  			<path d="M337.857,86.973L253.019,2.138c-1.368-1.37-3.228-2.139-5.163-2.138c-1.938-0.001-3.797,0.768-5.164,2.137
  				l-36.295,36.299c-2.854,2.853-2.854,7.477,0,10.329l84.84,84.834c1.369,1.371,3.225,2.14,5.164,2.14
  				c1.936,0,3.793-0.771,5.161-2.14l36.298-36.297C340.711,94.45,340.711,89.826,337.857,86.973z"/>
  		</g>
  	</g>
  </g>
  </svg>
`));
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

    public show!: string;
    strnew = new Date()
    dt = new Date(this.strnew).toISOString();


    getcurse() {
        localStorage.setItem("idcurso", this.router.snapshot.paramMap.get('idcurso') + '');
        this.router.params.subscribe(params => {
            //console.log(localStorage.getItem('idcurso') || "" )
            this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                .subscribe(
                    (res: any) => {
                        this.photo = res[0];
                        this.Tw.setTitle(res[0].title);
                        console.log(res[0], "1")

                        this.usersService.getUserTeacher(res[0].user)
                            .subscribe(
                                (res: any) => {
                                    this.photouserteacher = res[0];
                                    console.log(res[0], "3")
                                    const datteb = new Date(res[0].dateb);
                                    const dattee = new Date(res[0].datee);
                                    const dattteb = new Date(datteb).toISOString();
                                    const datttee = new Date(dattee).toISOString();
                                    //console.log(res[0].dateb)
                                    if (dattteb < this.dt && this.dt < datttee) {
                                        this.show = "ok";
                                        console.log("true");
                                    } else {
                                        this.show = "none";
                                        console.log("false");
                                    };

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
        var str = new Date().setSeconds(0, 0);

        var dt = new Date(str).toISOString();
        this.DateNow = dt;


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

    updatetask(idtask: string) {
        this.routerr.navigate(['/task', idtask]);
        //localStorage.setItem("idunity", idunity)
    };

    deletetask(idtask: string) {
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

    CreateSection(iduser: string, idcurse: string, cursecode: string,) {
        //console.log(localStorage.getItem('id'));
        this.curseService.createUnity(iduser, idcurse, cursecode)
            .subscribe(res => {
                this.router.params.subscribe(params => {
                    this.curseService.getCurse(localStorage.getItem('idcurso') || "")
                        .subscribe(
                            (res: any) => {
                                this.photo = res[0];
                                //this.routerr.navigate(['#www'])
                                console.log('res[0]')
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


    errase(idtheme: string, ntask: string) {
        if (ntask == '0') {
            if (window.confirm('Desea eliminar este tema?')) {
                this.themesService.delete(idtheme)
                    .subscribe(res => {
                        console.log(res)
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
        } else { alert('Debe borrar la tarea correspondiente') }
    }


    editunity(id: string) {
        this.routerr.navigate(['/unity', id]);
        //console.log(id);
    };

    edittheme(idw: string) {
        this.routerr.navigate(['/theme', idw]);
        //console.log(id);
    };

    themecalificacion(id: string, www: string) {
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

    errasesection(id: string, ntemas: string) {
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
        } else { alert('Debe borrar todos los temas del módulo') }
    }
    open1(ww: any, textw: string, textww: string) {
        this.modal.open(ww, { size: 'xl', scrollable: true })
        this.text = textw;
        this.file = textww;
        console.log(textw, textww);

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
