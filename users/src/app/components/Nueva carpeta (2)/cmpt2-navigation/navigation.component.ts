import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CurseService } from '../../services/curse.service'
import { UsersService } from "../../services/users.service";

import { environment } from '../../../environments/environment';
//import { Photo } from '../../interfaces/Photo'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  apiUrl = environment.apiURL;
  //photo: Photo[] = [];
    public photo: any = [];
public isCollapsed = true;

 //public idcurso: any = "";
 public rol: any = "";
 public user: any = "";

    constructor(public authService: AuthService, public curseService: CurseService, public userService: UsersService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { iconRegistry.addSvgIconLiteral('www', sanitizer.bypassSecurityTrustHtml(`
  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
`));}

  ngOnInit() {
  //this.imguser = localStorage.getItem('imguser');
            //console.log( localStorage.getItem('idcurso'),"wwwwwwwwwwwwww");
//            this.idcurso = localStorage.getItem('idcurso');

			if (localStorage.getItem('id')) {
			this.userService.getUser()
				.subscribe(
					(res: any) => {
						this.photo = res[0];
					//	console.log(res)
                  //localStorage.setItem('imguser', res.foto);
					},
					err => console.log(err)
				);
		};
/*
        setTimeout
        (() => {
              if(this.photo.length == 0){
                this.authService.logout()
              }
              console.log("Hello from setTimeout");
              console.log(this.photo);
          }, 10000);
*/
  }
    /*
  OnChanges() {
     this.imguser = localStorage.getItem('imguser');
     this.idcurso = localStorage.getItem('idcurso');
      console.log( localStorage.getItem('idcurso'));
  }
  */
  onImgError(event: any) {
    event.target.src = './assets/negz.png'
    //event.target.src = 'https://source.unsplash.com/random/800x800/?img=0'
  }


}
