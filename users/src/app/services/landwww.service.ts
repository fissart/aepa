import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LandwwwService {
  URIw = environment.apiURL + '/api/curses/Controller';
  URIFile = environment.apiURL + '/api/curses/Controller';
  URI2 = environment.apiURL + '/api/users/Controller';
  URI3 = environment.apiURL + '/api/curses/ControllerAll';

  constructor(private http: HttpClient) { }

  //URI = environment.apiURL + '/api/photos'
  createCurse(user: string ) {
    const fd = new FormData();
    fd.append('title', "Título del curso");
    fd.append('description', "Descripción del curso");
    fd.append('image', "photo  del curso");
    fd.append('user', user);
    return this.http.post(this.URIw, fd, {reportProgress:true, observe:"events"});
  }

  filecurse(id: string, title: string, type: string, codigo:string, photo:File) {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('type', type);
      fd.append('codigo', codigo);
      fd.append('curse', id);
      fd.append('description', "Describa el archivo");
      fd.append('image', photo);
      return this.http.post(`${environment.apiURL}/api/land/`, fd, {reportProgress:true, observe:"events"});
    }

    getfiles() {
            return this.http.get(`${environment.apiURL}/api/land`);
    }


    filecursedelete(id: string) {
        return this.http.delete(`${environment.apiURL}/api/land/${id}`);
      }

      filecurseupdate(id: string, title: string, description: string, blogspot: string, youtube: string, instagram: string, whatsapp: string, facebook: string) {
          return this.http.put(`${environment.apiURL}/api/land/${id}`, {'title':title, 'description': description, blogspot, youtube, instagram, whatsapp, facebook });
    }

    filecurseupdatefile(id: string, photo:File) {
          const fd = new FormData();
          fd.append('image', photo);
          return this.http.put(`${environment.apiURL}/api/land/update/${id}`, fd, {reportProgress:true, observe:"events"});
  }
 
  createCurseNew(iduser: string, year: number, title: string, especialidad: string, mension: string, credito: string, ciclo: string, codigo: string, requisito: string ) {
    const fd = new FormData();
    fd.append('description', `<h5>Descripción del Curso</h5>
<p>En este sitio podrás encontrar información relacionada con los diversos Modelos de Orientación Psicopedagógica existentes y todo lo relacionado con los mismos. El objetivo es proveer información útil que pueda ser aplicada en el ámbito de orientación y que permita desarrollar programas y otro tipo de estrategias que resulten de beneficio para los diversos actores en el ámbito educativo: maestros, alumnos, padres de familia, directivos, entre otros.</p>

<h5>Objetivos</h5>
<p>Los objetivos planeados para el curso son los siguientes:</p>
<ol>
<li>Identificar, relacionar e integrar los modelos de orientación psicopedagógica y sus elementos, en la implementación de procesos de intervención en instituciones educativas.</li>
<li>Argumentar, elaborar y aplicar desde distintas perspectivas, los modelos de intervención en contextos educativos.</li>
<li>Esforzarse por obtener la mayor calidad en todo lo que emprende, intentando alcanzar resultados positivos.</li>
</ol>`);
    fd.append('image', "photo  del curso");
    fd.append('title', title);
    fd.append('user', iduser);
    fd.append('especialidad', especialidad);
    fd.append('mension', mension);
    fd.append('credito', credito);
    fd.append('ciclo', ciclo);
    fd.append('codigo', codigo);
    fd.append('requisito', requisito);
    fd.set('year', JSON.stringify(year));
    return this.http.post(this.URIw, fd);
  }

  

  getcurseuseronly(id:string) {
          return this.http.get(`${environment.apiURL}/api/integer/Controllerintegeruser/${id}`);
//console.log(id)
  }

getsCurseTeacher(id:string) {
        return this.http.get(`${environment.apiURL}/api/curses/ControllerCurseTeacher/${id}`);

}

  getPhoto(id: string) {
    return this.http.get<any>(`${this.URIw}/${id}`);
    console.log(`${this.URIw}/${id}`);
  }

    getPhotosUser(id: string) {
    return this.http.get<any>(`${environment.apiURL}/api/curses/getsControllerUser/${id}`);
  }

  getCurse(id: string) {
    return this.http.get<any>(`${this.URI3}/${id}/${localStorage.getItem('id') || ""}`);
  }


 deletePhoto(id: string) {
    return this.http.delete(`${this.URIw}/${id}`);
  }
/*
Curse
*/
updatePhoto(id: string, title: string, description: string, meet :string, photo:File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('meet', meet);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.put(`${this.URIw}/${id}`, fd, {reportProgress:true, observe:"events"});
//    return this.http.put(`${this.URI}/${id}`, { 'name': title, 'email': description, 'password':password });
  }


saveinteger(iduser:string,idcurso:string,iduserteach:string){
        console.log(iduser, idcurso, iduserteach )
        return this.http.post<any>(`${environment.apiURL}/api/integer/Controller`, {'curse':idcurso, 'user':iduser, 'userteach':iduserteach});
    }



  deleteinteger(idinteger: string) {
    return this.http.delete(`${environment.apiURL}/api/integer/Controller/${idinteger}`);
  }


  getintegers(id: string){
      return this.http.get(`${environment.apiURL}/api/integer/Controllerintegerscurse/${id}`);
  }
  getintegersaverage(id: string){
      return this.http.get(`${environment.apiURL}/api/integer/Controllerintegersaverage/${id}`);
  }

//URI2 = environment.apiURL + '/api/wwu'
  getPhotouser(iduser: string) {
    return this.http.get<any>(`${this.URI2}/www/${iduser}`);
  }

  newscreate(iduser: string){
          return this.http.post(`${environment.apiURL}/api/news/Controller`, {'user':iduser, "title":"Title new", "description": `Este es un modelo de como puede escribir (formato html y css) en esta área borre todo y escriba<h1 class='bg-info text-success border p-1 rounded'>Titulo</h1>
          <h2 class='bg-info text-light border rounded text-success p-1'>Titulo</h2>
          <h3 class='bg-light border rounded text-success p-1'>Titulo</h3>
        <img class='bg-light p-1 m-auto'
                src="https://thumbs.dreamstime.com/b/elegant-blue-background-swirls-space-your-text-elegant-blue-background-swirls-space-your-text-159291073.jpg"
                width="75%"
              />
        <ul>
        <li><a href="https://drive.google.com/file/u/0/d/0B1Ga40SmVyy-TTRWcXNkRGYxY00/view?resourcekey=0-tXQ867e7G7OY2bMQzshTKQ" target="_blanck">Libro</a></li>
        <li><a href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones en la naturaleza</a></li>
        </ul>

        <hr>

        $$\\begin{Bmatrix} a & b \\\\   c & d\\end{Bmatrix}$$

        $$\\int_1^3=\\lim_{n\\to\\infty}\\sum_{n\\to\\infty}^n x_i$$ donde $x\\in\\mathbb{R}$`, "show":false});
      }

        Getnews(iduser: string){
                return this.http.get<any>(`${environment.apiURL}/api/news/ControllerAll`);
            }

            newsupdate(newid: string, title: string, description: string,  show: string, filew:File) {

              const fd = new FormData();
              fd.append('title', title);
              fd.append('description', description);
              fd.append('show', show);
              fd.append('image', filew);
              return this.http.put(`${environment.apiURL}/api/news/Controller/${newid}`, fd, {reportProgress:true, observe:"events"});
            }

            newsdelete(newid: string) {
              return this.http.delete(`${environment.apiURL}/api/news/Controller/${newid}`);
            }

            GetCalificationsuser(iduser: string){
                    return this.http.get<any>(`${environment.apiURL}/api/AVERAGE/getAveragesUser/${iduser}`);
                }

      Getcursesources(){
              return this.http.get<any>(`${environment.apiURL}/api/curses/getcursesources`);
          }

showhidenews(newid: string, show: string) {
  console.log(show);
  return this.http.put(`${environment.apiURL}/api/news/Controller_show/${newid}`, { 'show': show});
}


getFirstAverages(ciclo: string, mension: string, year: string) {
  return this.http.get(`${environment.apiURL}/api/AVERAGE/First/${ciclo}/${mension}/${year}`);
}

}
