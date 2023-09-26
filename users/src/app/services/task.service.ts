import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient, private router: Router) { }

  savetask(note: string, task: string, theme: string, unidad: string, curse: string, user: string, asistence: string, filew: File) {
    //console.log(asistence)
    const fd = new FormData();
    fd.append('task', task);
    fd.append('note', note);
    fd.append('theme', theme);
    fd.append('unidad', unidad);
    fd.append('curse', curse);
    fd.append('user', user);
    fd.append('asistence', asistence);
    fd.append('image', filew);
    return this.http.post(`${environment.apiURL}/api/task/Controller`, fd, { reportProgress: true, observe: "events" });
  }

  savetaskready(note: string, task: string, theme: string, unidad: string, curse: string, user: string, asistence: string, filew: File) {
    //console.log(filew, "archivo")
    const fd = new FormData();
    fd.append('task', task);
    fd.append('note', note);
    fd.append('theme', theme);
    fd.append('unidad', unidad);
    fd.append('curse', curse);
    fd.append('user', user);
    fd.append('image', filew);
    fd.append('asistence', asistence);
    return this.http.post(`${environment.apiURL}/api/task/Controller`, fd);
  }


  getTask(user: any) {
    //console.log(user)
    return this.http.get<any>(`${environment.apiURL}/api/task/Controller/${user}`);
  }

  updatetask(task: string, note: string, id: string, asistence: string, archivo: File) {
    //alert(asistence)
    const fd = new FormData();
    fd.append('task', task);
    fd.append('note', note);
    fd.append('asistence', asistence);
    fd.append('image', archivo);
    return this.http.put(`${environment.apiURL}/api/task/Controller/${id}`, fd, { reportProgress: true, observe: "events" });
  }

  updatetaskready(task: string, note: string, id: string, asistence: string, archivo: File) {
    const fd = new FormData();
    fd.append('task', task);
    fd.append('note', note);
    fd.append('asistence', asistence);
    fd.append('image', archivo);
    return this.http.put(`${environment.apiURL}/api/task/Controller/${id}`, fd);
  }
 
  getfiles(user: string, curse: string) {
    return this.http.get<any>(`${environment.apiURL}/api/task/ControllerAll/${user}/${curse}`);
  }
 
  updatefiles(user: string, curse: string) {
    return this.http.put<any>(`${environment.apiURL}/api/task/Controller/${user}/${curse}`, { user });
  }
   
  create_average(nota: string, codigo: string, teacher: string, user: string, curse: string, title: string, ciclo: string, credito: string, mencion: string, year: number) {
    return this.http.post<any>(`${environment.apiURL}/api/AVERAGE`, { nota, codigo, teacher, user, curse, title, ciclo, credito, mencion, year });
  } 
  update_average(id: string, nota: string) {
    return this.http.put<any>(`${environment.apiURL}/api/AVERAGE/${id}`, { nota });
  }

  delete_average(id: string) {
    return this.http.delete<any>(`${environment.apiURL}/api/AVERAGE/${id}`);
  }


}
