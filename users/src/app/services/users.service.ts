import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URI = environment.apiURL + "/api/users";
  URI_ = environment.apiURL + "/api/photos";

  constructor(
    private http: HttpClient
  ) { }

  //obtener usuario con opiniones
  getUser() {
  //console.log(localStorage.getItem('id'))
    return this.http.get<any>(`${this.URI}/Controller/633e0130043a66dd23991dbe`);
  }

  getUserTeacher(id:string) {
  //console.log(localStorage.getItem('id'))
    return this.http.get<any>(`${this.URI}/Controller/${id}`);
  }

  getonly() {
    return this.http.get<any>(`${this.URI}/Controller`);
  }

  get() {
    return this.http.get<any>(`${this.URI}/ControllerAll/${localStorage.getItem('id')}`);
  }

  registro(name: string, email: string, password: string, photo: File) {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('image', photo);
    return this.http.post(`${this.URI}/Controller`, fd);// response:true
  }


  sign(email: string, password: string) {
    return this.http.get<any>(`${this.URI}/Controllersign/${email}/${password}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/Controller/${id}`);
  }

  updatePhoto(id: string, title: string, description: string, password: string, rol: string, celular: string, carrera: string, mension:string, ciclo: string, sexo: string, dni: string, filosophy:string, photo: File) {
    const fd = new FormData();
    fd.append('name', title);
    fd.append('email', description);
    fd.append('password', password);
    fd.append('rol', rol);
    fd.append('celular', celular);
    fd.append('carrera', carrera);
    fd.append('mension', mension);
    fd.append('ciclo', ciclo);
    fd.append('sexo', sexo);
    fd.append('dni', dni);
    fd.append('image', photo);
    fd.append('filosophy', filosophy);
//    console.log(fd);

    return this.http.put(`${this.URI}/Controller/${id}`, fd, { reportProgress: true, observe: "events" });
    //    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
  }
//URI_
  getOneUser(id: string) {
    return this.http.get<any>(`${this.URI}/Controller/${id}`);
  }
  createOpinion(user: string, imageid: string, value: string) {
    return this.http.post<any>(this.URI_ + '/opinion', { user, imageid, value });
  }
  deleteOpinion(user: string, imageid: string) {
    return this.http.post<any>(this.URI_ + '/opinion/errase', { user, imageid });
  }

}
