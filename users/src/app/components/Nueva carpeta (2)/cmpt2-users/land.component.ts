import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as THREE from 'three';
//import { OrbitControls } from "OrbitControls";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { UsersService } from "../../services/users.service";
import { TaskService } from "../../services/task.service";
import { CurseService } from '../../services/curse.service'
import { environment } from "../../../environments/environment";
//import { Www } from '../../interfaces/Www'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { KatexOptions } from 'ng-katex';
//import { KatexOptions } from 'ngx-markdown';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-land',
	templateUrl: './land.component.html',
	template: `<ng-katex [equation]="equation"></ng-katex>`,
	styleUrls: ['./land.component.css'],
})

export class LandComponent implements OnInit {
	equation: string = '\\sum_{i=1}^nx_i';
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

	todo = [
		'Get to work',
		'Pick up groceries',
		'Go home',
		'Fall asleep'
	];

	done = [
		'Get up',
		'Brush teeth',
		'Take a shower',
		'Check e-mail',
		'Walk dog'
	];

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}

	apiUrl = environment.apiURL;
	photos: any = [];
	wwwww = [];


	// options: KatexOptions = {
	// 	displayMode: true,
	// 	macros: {
	// 		"\\RR": "\\mathbb{R}",
	// 		"\\CC": "\\mathbb{C}",
	// 		"\\WW": "\\mathbb{W}"
	// 	},
	// 	errorColor: '#cc0000',
	// };


	public archivos: any = [];
	public cursessource: any = [];
	public CurseTeacher: any = [];
	public photoSelected!: string | ArrayBuffer | null;
	public text: string = "";
	public year: number = 0;
	public rol = localStorage.getItem('rol')
	onImgError(event: any) {
		//		event.target.src = './assets/negz.jpg'
		 event.target.src = './assets/negz.png'
	}
	onImgError2(event: any) {
		//		event.target.src = './assets/negz.jpg'
		 event.target.src = './assets/www_.jpg'
	}


	constructor(
		private router: Router,
		private userService: UsersService,
		private task: TaskService,
		private curseService: CurseService,
		private modal: NgbModal
	) { }

    getuser() {
        this.userService.getUser()
				.subscribe(
					(res: any) => {
						this.photos = res[0];
						console.log(res,"getuser")
    			},
					err => console.log(err)
				);
    }

getsCurseTeacher(){
		     this.curseService.getsCurseTeacher(localStorage.getItem('id') || "").subscribe(
		            (res: any) => {
		                this.CurseTeacher = res[0].curses;
		                console.log(res, "getsCurseTeacher");
		            },
		            err => console.log(err)
		        )
}

Getcursesources(){
				 this.curseService.Getcursesources().subscribe(
								(res: any) => {
										this.cursessource = res;
										console.log(res, "www");
								},
								err => console.log(err)
						)
		}

ngOnInit() {
    this.year = new Date().getFullYear();
		if (localStorage.getItem('id')) {
			this.getuser()
		};

		if(localStorage.getItem('rol')=="1") {
		this.userService.get().subscribe(
			(res: any) => {
				this.wwwww = res;
				console.log(res,"newwwww");
			},
			err => console.log(err)
		)
		}

		localStorage.removeItem('idcurso');

		if(localStorage.getItem('rol')=="2") {
		this.getsCurseTeacher()
    }

		if(localStorage.getItem('rol')=="2") {
		this.Getcursesources()
		}

}

	open1(ww: any, textw: string) {
		this.modal.open(ww, { size: 'lg', scrollable: true })
		this.text = textw;

	}

	open2(www: any, textw: string) {
		this.modal.open(www, { size: 'xl', scrollable: true })
		this.text = textw;

	}



	capturandoFile(event: any) {
		const ww = event.target.files[0];
		this.archivos.push(ww);
		//console.log(event.target.files);
		if (event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = e => this.photoSelected = reader.result;
			reader.readAsDataURL(event.target.files[0]);
		}
	}



	deleteUser(ww: string, nlenght:string, nlengght:string) {
        if(nlenght=='0' && nlengght=='0'){
		if (window.confirm('Desea borrar este usuario?')) {
			this.userService.deletePhoto(ww)
				.subscribe(res => {
					console.log(res);
					this.router.navigate(['/user']);
				if(ww==localStorage.getItem('id')){
                localStorage.removeItem('id');
                }

					this.userService.get().subscribe(
						(res: any) => {
							this.wwwww = res;
						},
						err => console.log(err)
					)
				})
		}
        }else{alert('Debe borrar todos los cursos del usuario')}

    }


	NewCurse(id: string) {
		this.curseService
			.createCurse(id)
			.subscribe(
				(res: any) => {
					console.log(res);
					if(localStorage.getItem('rol')=="2") {
					this.getsCurseTeacher()
			}
		},
				err => console.log(err)
			);
		return false;
	}

	NewCurseTeacher(iduser: string, title: string, especialidad: string, mension: string, credito: string, ciclo: string, codigo: string, requisito: string) {
		//console.log(iduser, this.year, title, especialidad, mension, credito, ciclo, codigo, requisito);
		this.curseService.createCurseNew(iduser, this.year, title, especialidad, mension, credito, ciclo, codigo, requisito)
			.subscribe(
				(res: any) => {
					if (res.usser.msg=="ok") {

						console.log(res.usser.msg);
						this.getsCurseTeacher()
					}else{
						alert(res.usser.msg);
					}
				},
				err => console.log(err)
			);
	}


	deleteCurse(id: string) {
		if (window.confirm('Are sure you want to delete this item ?')) {
			this.curseService.deletePhoto(id)
				.subscribe(res => {
					console.log(res)
					if(localStorage.getItem('rol')=="2") {
					this.getsCurseTeacher()
			}
				})
		}
	}

	selectedCard(id: string) {
		this.router.navigate(['/cursoup', id]);
		console.log(id);
	};

	goCurse(id: string) {
		this.router.navigate(['/curso', id]);
	};


	selectedUser(id: string) {
		this.router.navigate(['/user', id]);
		//console.log(id);
	};

	showProduct: boolean = false;

	opinionTRUE(img_id: string) {
		const ww = "verdad";
		this.userService.createOpinion(localStorage.getItem('id') || '{}', img_id, ww)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)


			});

	}

	opinionFALSE(img_id: string) {
		const ww = "falso";
		this.userService.createOpinion(localStorage.getItem('id') || '{}', img_id, ww)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)

			});

	}


	      delete_average(id: string) {
	          if (window.confirm('Desea borrar registro de nota?')) {
	        this.task.delete_average( id )
	            .subscribe(
	                (res:any) => {
	                  //this.getIntegeraverage()
	                },
	                err => console.log(err)
	            );
	          }
	        return false;
	}


/*

	opinionDelete(img_id: string) {
		this.userService.deleteOpinion(localStorage.getItem('id') || '{}', img_id)
			.subscribe(res => {
				console.log(res);
				this.router.navigate(['/']);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)

			});

	}
	someMethodWithFocusOutEvent3(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, event.target.textContent, description, password, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});
	}
	someMethodWithFocusOutEvent2(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, title, event.target.textContent, password, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});
	}
	someMethodWithFocusOutEvent(event: any, id: string, title: string, description: string, password: string) {
		console.log(event.target.textContent, title, description);
		this.userService.updatePhoto(id, title, description, event.target.textContent, this.archivos[0])
			.subscribe(res => {
				console.log(res);
				this.userService.get().subscribe(
					(res: any) => {
						this.wwwww = res;
						console.log(res)
					},
					err => console.log(err)
				)
				this.router.navigate(['/']);
			});


	}

*/


}


/*


db.wwws.insertMany(
[
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")}
])
*/
