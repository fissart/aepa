import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../../services/users.service'
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})

export class UserPreviewComponent implements OnInit {
    apiUrl = environment.apiURL;
    id!: string;
    public photow: any = [];
    public archivos: any = [];
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;

 public userrol: any = localStorage.getItem('rol');

    onImgError(event: any) {
        event.target.src = './assets/negz.png'
    }

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }


    // options: KatexOptions = {
    //     displayMode: true,
    //     macros: {
    //         "\\RR": "\\mathbb{R}",
    //         "\\CC": "\\mathbb{C}",
    //         "\\WW": "\\mathbb{W}"
    //     },
    //     errorColor: '#cc0000',
    // };

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: UsersService,
        private router: Router
    ) { }
get_user(){
     this.photoService.getUser()
				.subscribe(
					(res: any) => {
					//	this.userrol = res[0].rol;
						console.log(res[0], "getUser")

					},
					err => console.log(err)
				);
}
    ngOnInit() {
//        this.get_user()
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.photoService.getOneUser(this.id)
                .subscribe(
                    (res: any) => {
                        this.photow = res[0];
                        //this.userrol = res[0].rol;
                        console.log(this.photow);
                    },
                    err => console.log(err)
                )
        });
    }

    markdown!: string;

    capturandoFile(event: any) {
        console.log(event.target.files);
        console.log(this.archivos)
        const ww = event.target.files[0];
        this.archivos = [];//resetea la matriz a rango 1
        this.archivos.push(ww);
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    deletePhoto(id: string) {
        this.photoService.deletePhoto(id)
            .subscribe(res => {
                console.log(res)
                this.router.navigate(['/photos']);
            })
    }

    updatePhoto(name: HTMLInputElement, correo: HTMLInputElement, password: HTMLInputElement, rol: HTMLInputElement, celular: HTMLInputElement, carrera: HTMLInputElement, mension: HTMLInputElement, ciclo: HTMLInputElement, sexo: HTMLInputElement, dni: HTMLInputElement ) {
        this.photoService.updatePhoto(this.id, name.value, correo.value, password.value, rol.value, celular.value, carrera.value, mension.value, ciclo.value, sexo.value, dni.value, this.photow.filosophy,  this.archivos[0])
            .subscribe((res: any) => {
                this.loading = "false";
                this.value = Math.round((100 / res.total) * res.loaded);
                console.log(res.total);
                console.log(res.loaded);
                if (res.total == res.loaded && res.type > 0) {
                    this.router.navigate(['/']);
                }
            });
        return false;
    }

}
