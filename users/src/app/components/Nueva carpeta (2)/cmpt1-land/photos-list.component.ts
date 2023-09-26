import {
    Component, OnInit, ViewChild, AfterViewInit,
    ElementRef
} from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Title} from '@angular/platform-browser'
import { CurseService } from '../../services/curse.service'
import { UsersService } from '../../services/users.service'
import { TaskService } from '../../services/task.service'
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxHeadroomOption } from 'ngx-headroom';
import SwiperCore, { EffectCoverflow, EffectFade, EffectFlip, Virtual, SwiperOptions , Swiper, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, EffectFade, EffectFlip, Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]);




@Component({
    selector: 'app-photos-list',
    templateUrl: './photos-list.component.html',
    styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, AfterViewInit {
  user = localStorage.getItem('id')
    rol = localStorage.getItem('rol')

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


public text: string = "";
public year: number = 0;
public texto: string = "";
public textoimg: string = "";
public idcurso: string = "";
public iduserteach: string = "";
public ussser: any = [];
public photoSelected!: string | ArrayBuffer | null;
public loading!: string;
public nota: string = "";

public califications: any = [];
public archivos: any = [];
public order: any = [];
public _value: number = 0;

get value(): number {
  return this._value;
}
set value(value: number) {
  if (!isNaN(value) && value <= 100) {
    this._value = value;
  }
}

idnew!:string;
markdown!: string;
type!: string;
titlewww!: string;
imgwww!: string;
showww!: string;
name: string = ""

    apiURL = environment.apiURL;

    photointeger: any = [];
    newws: any = [];
    CurseTeacher: any = [];
    integeruser: any = [];


    photouser: any = [];
    ww = [];

    onImgError(event: any) {
        event.target.src = './assets/img7.jpg'
    }

    public isCollapsed = false;
    isReadMore = true

    showText() {
        this.isReadMore = !this.isReadMore
    }

    constructor(
        private CurseService: CurseService,
        private UserService: UsersService,
        private router: Router,
        private taskService: TaskService,
        private Tw: Title,
        private modal: NgbModal,
        iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,

    ) {
iconRegistry.addSvgIconLiteral('messenger', sanitizer.bypassSecurityTrustHtml(`
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
`));
iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(`
<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
`));

iconRegistry.addSvgIconLiteral('watsapp', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="30.667px" height="30.667px" viewBox="0 0 30.667 30.667" style="enable-background:new 0 0 30.667 30.667;"
xml:space="preserve">
<g>
<path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
C23.307,19.268,23.307,18.533,23.214,18.38z"/>
</g>

</svg>

`));
iconRegistry.addSvgIconLiteral('facebook', sanitizer.bypassSecurityTrustHtml(`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
`));
iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(`
<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
</svg>
`));

iconRegistry.addSvgIconLiteral('integrate', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 91.86" style="enable-background:new 0 0 122.88 91.86" xml:space="preserve"><style type="text/css"><![CDATA[
.st0{fill-rule:evenodd;clip-rule:evenodd;}
]]></style><g><path class="st0" d="M111.89,75.94l-6.59,6.59c-1.73,1.73-4.58,1.73-6.31,0l-5.31-5.31c-2.74,1.46-5.68,2.58-8.78,3.3v6.88 c0,2.45-2.01,4.46-4.46,4.46h-9.32c-2.45,0-4.46-2.01-4.46-4.46v-7.51c-3.04-0.92-5.91-2.23-8.54-3.89l-4.87,4.87 c-1.73,1.73-4.58,1.73-6.31,0l-2.98-2.97l0.08-0.09l13.07-14.96c4.78,5.6,11.9,9.16,19.84,9.16c14.4,0,26.08-11.68,26.08-26.07l0,0 l0,0c0-14.4-11.68-26.08-26.08-26.08c-7.21,0-13.74,2.93-18.46,7.66l-4.81-0.18L41.51,16.5c0.15-0.21,0.31-0.4,0.49-0.59l6.59-6.59 c1.73-1.73,4.58-1.73,6.31,0l5.31,5.31c2.74-1.47,5.68-2.59,8.78-3.3V4.45C69.01,2.01,71.02,0,73.47,0h9.31 c2.45,0,4.46,2.01,4.46,4.46l0,7.51c3.04,0.92,5.91,2.24,8.54,3.89l4.87-4.87c1.73-1.73,4.58-1.73,6.31,0l6.59,6.59 c1.73,1.73,1.73,4.58,0,6.31l-5.31,5.31c1.47,2.74,2.59,5.68,3.3,8.78h6.88c2.44,0,4.46,2.01,4.46,4.46v9.32 c0,2.45-2.01,4.46-4.46,4.46h-7.5c-0.92,3.04-2.23,5.91-3.89,8.54l4.87,4.87C113.63,71.36,113.63,74.2,111.89,75.94L111.89,75.94 L111.89,75.94L111.89,75.94L111.89,75.94z M77.03,37.46c4.68,0,8.47,3.79,8.47,8.47c0,4.68-3.79,8.47-8.47,8.47 c-4.68,0-8.47-3.79-8.47-8.47C68.56,41.25,72.36,37.46,77.03,37.46L77.03,37.46z M60.14,45.41L37.13,71.76L36.36,59.4 C20.63,57.15,8.58,61.47,0,73.87c0.1-24.4,15.96-37.16,34.82-39.12l-0.79-12.61L60.14,45.41L60.14,45.41L60.14,45.41L60.14,45.41 L60.14,45.41L60.14,45.41z"/></g></svg>
`));

iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

`));

        iconRegistry.addSvgIconLiteral('youtube', sanitizer.bypassSecurityTrustHtml(`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"/></svg>
`));

iconRegistry.addSvgIconLiteral('getout', sanitizer.bypassSecurityTrustHtml(`
<svg
version="1.1"
id="Layer_1"
x="0px"
y="0px"
viewBox="0 0 122.88 91.86"
style="enable-background:new 0 0 122.88 91.86"
xml:space="preserve"
sodipodi:docname="integration.svg"
inkscape:version="1.1 (c68e22c387, 2021-05-23)"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg"><defs
id="defs11" /><sodipodi:namedview
id="namedview9"
pagecolor="#ffffff"
bordercolor="#666666"
borderopacity="1.0"
inkscape:pageshadow="2"
inkscape:pageopacity="0.0"
inkscape:pagecheckerboard="0"
showgrid="false"
showguides="true"
inkscape:snap-global="false"
inkscape:zoom="2.0129373"
inkscape:cx="28.813615"
inkscape:cy="12.171268"
inkscape:window-width="1366"
inkscape:window-height="705"
inkscape:window-x="-8"
inkscape:window-y="-8"
inkscape:window-maximized="1"
inkscape:current-layer="Layer_1" /><style
type="text/css"
id="style2"><![CDATA[
.st0{fill-rule:evenodd;clip-rule:evenodd;}
]]></style><path
class="st0"
d="m 111.89,75.94 -6.59,6.59 c -1.73,1.73 -4.58,1.73 -6.31,0 L 93.68,77.22 C 90.94,78.68 88,79.8 84.9,80.52 v 6.88 c 0,2.45 -2.01,4.46 -4.46,4.46 h -9.32 c -2.45,0 -4.46,-2.01 -4.46,-4.46 V 79.89 C 63.62,78.97 60.75,77.66 58.12,76 l -4.87,4.87 c -1.73,1.73 -4.58,1.73 -6.31,0 L 43.96,77.9 40.710934,74.62166 40.729728,62.519196 57.11,62.85 c 4.78,5.6 11.9,9.16 19.84,9.16 14.4,0 26.08,-11.68 26.08,-26.07 v 0 0 c 0,-14.4 -11.68,-26.08 -26.08,-26.08 -7.21,0 -13.74,2.93 -18.46,7.66 l -17.869498,-0.336159 0.0073,-9.840644 C 40.777763,17.133197 41.82,16.1 42,15.91 l 6.59,-6.59 c 1.73,-1.73 4.58,-1.73 6.31,0 l 5.31,5.31 c 2.74,-1.47 5.68,-2.59 8.78,-3.3 V 4.45 C 69.01,2.01 71.02,0 73.47,0 h 9.31 c 2.45,0 4.46,2.01 4.46,4.46 v 7.51 c 3.04,0.92 5.91,2.24 8.54,3.89 l 4.87,-4.87 c 1.73,-1.73 4.58,-1.73 6.31,0 l 6.59,6.59 c 1.73,1.73 1.73,4.58 0,6.31 l -5.31,5.31 c 1.47,2.74 2.59,5.68 3.3,8.78 h 6.88 c 2.44,0 4.46,2.01 4.46,4.46 v 9.32 c 0,2.45 -2.01,4.46 -4.46,4.46 h -7.5 c -0.92,3.04 -2.23,5.91 -3.89,8.54 l 4.87,4.87 c 1.73,1.73 1.73,4.57 -0.01,6.31 z M 77.03,37.46 c 4.68,0 8.47,3.79 8.47,8.47 0,4.68 -3.79,8.47 -8.47,8.47 -4.68,0 -8.47,-3.79 -8.47,-8.47 0,-4.68 3.8,-8.47 8.47,-8.47 z"
id="path4"
sodipodi:nodetypes="sssccssssccscccccsscssccccsscccsssccssssccssssccsssssss" /><path
class="st0"
d="m 12.18387,45.037867 24.590594,24.881427 0.0066,-12.38396 21.993998,0.447951 0.131757,-24.960961 -22.108243,-0.185036 0.01115,-12.634717 z"
id="path4-2"
sodipodi:nodetypes="cccccccc"
style="clip-rule:evenodd;fill-rule:evenodd" /></svg>
`));
iconRegistry.addSvgIconLiteral('go', sanitizer.bypassSecurityTrustHtml(`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 80.98" style="enable-background:new 0 0 122.88 80.98" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M100.66,40.49L60.58,80.98V60.81C35.23,55.56,15.21,61.35,0,80.63c2.64-39.65,29.73-58.78,60.58-60.05V0 L100.66,40.49L100.66,40.49z M122.88,40.49L82.79,80.98V68.04l27.28-27.55L82.79,12.94V0L122.88,40.49L122.88,40.49z"/></g></svg>
`));

iconRegistry.addSvgIconLiteral('blogspot', sanitizer.bypassSecurityTrustHtml(`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z"/></svg>
`));

}



  onContentChanged =  (event: any) =>{
     this.froala=event.html;
    console.log("w_1", this.froala);

   }
 onSelectionChanged = (event:any, user_id:string, name:string, correo:string, password:string, rol:string, celular:string, carrera:string, mension:string, ciclo:string, sexo:string, dni:string) => {
console.log("w_w_w");

  if(event.oldRange == null){
    //this.onFocus();
  }
  if(event.range == null){
   //this.onBlur();
   //console.log( event.target.innerHTML);
   this.UserService.updatePhoto(user_id, name, correo, password, rol, celular, carrera, mension, ciclo, sexo, dni, this.froala,  this.archivos[0])
       .subscribe((res: any) => {
       });
  }
}

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }

config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop:true,
    //effect:'flip',
    //effect:'fade',
    //effect:'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      centeredSlides:true,
    //  navigation:true,
    autoplay:{delay: 2000,
      disableOnInteraction: true},
    //pagination: { clickable: true, type: 'progressbar'},
    scrollbar: { draggable: true },
};

capturandoFile(event: any) {
  const ww = event.target.files[0];
  this.archivos = [];//resetea la matriz a rango 1
  this.archivos.push(ww);
  //console.log(event.target.files);
  if (event.target.files[0]) {
    this.type = event.target.files[0].type;
    this.name = event.target.files[0].name;
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }
}


typefile: string=""

FileCurse:  any = [];


FileCursseUpdate(event: any) {
  const ww = event.target.files[0];
  this.FileCurse = [];//resetea la matriz a rango 1
  this.FileCurse.push(ww);
  console.log(this.ussser_id);
  if (event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(event.target.files[0]);
    this.CurseService.filecurseupdatefile(this.ussser_id, this.FileCurse[0])
    .subscribe((res: any) => {
      this.loading = "false";
      this.value = Math.round((100 / res.total) * res.loaded);
      console.log(res.total);
      console.log(res.loaded);
      if (res.total == res.loaded && res.type > 0) {
          this.usser();
          this.value=0;
      }

    })

  }
}



FileCursse(event: any) {
  const ww = event.target.files[0];
  this.FileCurse = [];//resetea la matriz a rango 1
  this.FileCurse.push(ww);
  if (event.target.files[0]) {
    console.log(event.target.files[0]);
    this.type = event.target.files[0].type
    this.name = event.target.files[0].name
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.ussser_id, this.name, this.typefile, this.FileCurse[0]);
    this.CurseService.filecurse("633edab42f2df19c78c3e8f5", this.name, this.typefile, "codigo", this.FileCurse[0])
    .subscribe((res: any) => {
      this.loading = "false";
      this.value = Math.round((100 / res.total) * res.loaded);
      console.log(res.total);
      console.log(res.loaded);
      if (res.total == res.loaded && res.type > 0) {
          this.usser();
          this.value=0;
      }

    })

  }
}

FileCurssse(type:string) {
  console.log(type);

    this.CurseService.filecurse("633edab42f2df19c78c3e8f5", 'Nombre', type, "codigo", this.FileCurse[0])
    .subscribe((res: any) => {
      this.usser();

    })

  }


FileCursedelete(id: string) {
  if (window.confirm('Desea eliminar archivo?')) {
  this.CurseService.filecursedelete(id)
  .subscribe((res: any) => {
    this.usser();
  })
}
}

ussser_id:string="";

Type(www:string, wwwww:string){
this.typefile=www;
this.ussser_id=wwwww;
}

openfile(file: any, textw: string) {
    this.modal.open(file, { size: 'xl', scrollable: false })
    this.text = textw;

}

@ViewChild('new') w: ElementRef | undefined;
//closeResult = '';

    ngAfterViewInit(): void {
      //  this.open(this.w, "wwwwwwwww ww");
    }

    open(content: any) {
      this.modal.open(content, { size: 'xl', scrollable: true })
      }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

getintegersuser()
{
     this.CurseService.getcurseuseronly(localStorage.getItem('id') || "").subscribe(
            (res: any) => {
                this.photointeger = res;
                console.log(res, "getcurseuseronly");
            },
            err => console.log(err)
        )
}

getsCurseTeacher()
{
     this.CurseService.getsCurseTeacher(localStorage.getItem('id') || "").subscribe(
            (res: any) => {
                this.CurseTeacher = res[0].curses;
                console.log(res, "getsCurseTeacher");
            },
            err => console.log(err)
        )
}

gets_news(){
  this.CurseService.Getnews(localStorage.getItem('id') || "")
  .subscribe((res:any) => {
    console.log(res, "ww_w");
    this.newws = res;
    function www(taskss: any){
      for (const file of res) {
          if(file.show=='true'){
         var texto=file.user;
         return {w1:file.title,w2:file.description, w3:file.img};
         return texto;
    }
    };
    }
    if(www(res)){
    //www(res);
    this.text=www(res).w1;
    this.texto=www(res).w2;
    this.textoimg=www(res).w3;
    this.open(this.w);
    }
  },
err => console.log(err)
);
}


getnews(){
  this.CurseService.Getnews(localStorage.getItem('id') || "")
  .subscribe((res:any) => {
    console.log(res, "news");
    this.newws = res;
  }
);
}


getcalificationsuser(){
  this.CurseService.GetCalificationsuser(localStorage.getItem('id') || "")
  .subscribe((res:any) => {
    console.log(res, "GetCalificationsuser");
    this.califications = res;
  }
);
}
getcursesteacher(){
this.loading = "false";
this.CurseService.getPhotosUser(localStorage.getItem('id') || "").subscribe(
    (res: any) => {
        this.integeruser = res;
        console.log(res, "getcursesteacher")
        this.loading = "";
    },
    err => console.log(err)
)
}

froala:string="www"

usser(){
this.CurseService.getfiles()
  .subscribe(
    (res: any) => {
      console.log(res,"w_W")
      this.ussser = res;
      //this.froala = res[0].filosophy;

     },
    err => console.log(err)
  );
}

getFirstAverages(ciclo:HTMLInputElement, mension:HTMLInputElement, year:HTMLInputElement){
  this.loading="false";
  this.CurseService.getFirstAverages(ciclo.value, mension.value, year.value)
    .subscribe(
      (res: any) => {
        this.order = res
        this.loading=""
      console.log(res)
              //localStorage.setItem('imguser', res.foto);
      },
      err => console.log(err)
    );
}

    ngOnInit() {

      this.year = new Date().getFullYear();
      this.Tw.setTitle('Inicio Marcelino Efrain Taipe Carbajal');

      this.usser();
      this.gets_news();
      //this.getintegersuser();
      if(localStorage.getItem('rol')=="1" || localStorage.getItem('rol')=="2"){
      this.getsCurseTeacher()
      }
      if(localStorage.getItem('rol')=="3"){
      this.getcalificationsuser()
      this.getintegersuser()
    }

    }

    goCurse(id: string) {
        this.router.navigate(['/curso', id]);
    };

    selectedCard(id: string) {
        this.router.navigate(['/photos', id]);
        console.log(id);
    };

    openwww(w: any, title: string, description: string, img: string) {
    //console.log(this.idnew,this.title,this.markdown,this.show,this.img);

        this.modal.open(w, { size: 'xl', scrollable: true })
        this.text=title;
        this.texto=description;
        this.textoimg=img;
    }

    open1(ww: any, idcurso: string, iduser: string) {
        this.modal.open(ww, { size: 'lg', scrollable: true })
        this.idcurso = idcurso;
        this.iduserteach = iduser;
    }

    open2(www: any, idnew: string, title: string, description: string, img: string, show: string) {
//console.log(this.idnew,this.title,this.markdown,this.show,this.img);

        this.modal.open(www, { size: 'xl', scrollable: false })
        this.idnew = idnew;
        this.titlewww = title;
        this.markdown = description;
        this.imgwww = img;
        this.showww = show;
    }


    integer(codeww: HTMLInputElement) {
        //console.log(codeww.value.length>=24)
        if (codeww.value.length==24 ) {
            this.CurseService.saveinteger(localStorage.getItem('id') || "", codeww.value, this.iduserteach)
                .subscribe(
                    (res:any) => {
                            this.loading = "false";
                        if(res.msgok){
                            console.log(res);
                            this.CurseService.getPhotosUser(localStorage.getItem('id') || "").subscribe(
                            (res: any) => {
                                this.integeruser = res;
                                console.log(res)
                                this.loading = "";

                                this.modal.dismissAll();
                            },
                            err => console.log(err)
                        )
                    }else{
                        alert(res.msg)
                        this.loading = "";

                    }


        this.getintegersuser();

                    },
                    err => console.log(err)
                );

            return false;
        } else {
            alert("Código incorrecto")
            return true;
        }
    };

    deleteinteger(id: string) {
        if (window.confirm('Desea salir del curso?')) {
            this.CurseService.deleteinteger(id)
                .subscribe(res => {
                    console.log(res);
                    alert("Ok eliminado del curso, elimine otro. Si desea visualizar resultados actualice la página")
                });
        }
    };

    createnews() {
            this.CurseService.newscreate(localStorage.getItem('id') || "")
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });

    };

    updatenews(title: HTMLInputElement, description: HTMLTextAreaElement, show: HTMLInputElement ) {
            this.CurseService.newsupdate(this.idnew, title.value, description.value, show.value, this.archivos[0])
                .subscribe((res: any)  => {
                  this.loading = "false";
                  this.value = Math.round((100 / res.total) * res.loaded);
                  console.log(res.total);
                  console.log(res.loaded);
                  if (res.total == res.loaded && res.type > 0) {
//                         this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    this.modal.dismissAll();
                    //console.log(res);
                    //this.routerr.navigate([`/curso/${localStorage.getItem('idcurso') || ""}`]);
                    this.getnews();
                    this.loading = "";
                    this._value=0;
                    this.name="";
                    this.archivos = [];//resetea la matriz a rango 1
                    //this.photoSelected= [];
                  }
                });
                return false;
    };

    deletenews(idnew:string) {
      if (window.confirm('Desea borrar esta información?')) {
            this.CurseService.newsdelete(idnew)
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });
}

    };

    newsemergent(idnew:string, show:string) {
            this.CurseService.showhidenews(idnew, show)
                .subscribe(res => {
                    console.log(res);
                    this.getnews();
                });

    };



    delete_average(id: string) {
        if (window.confirm('Desea borrar registro de nota?')) {
      this.taskService.delete_average( id )
          .subscribe(
              (res:any) => {
alert("Ok note deleted")
                //this.getIntegeraverage()
              },
              err => console.log(err)
          );
        }
      return false;
}
onBlurMean(event:any, user: string, title: string, ciclo: string, credito: string, especialidad: string) {
        this.loading = "false";
      if(event.target.value<=20 && event.target.value>0 || event.target.value=="R"  || event.target.value=="L"){
console.log(event.target.value=='L');

        if(event.target.value=='L'){
        this.nota="-0";
        }
        if(event.target.value=='R' || event.target.value=='0'){
          this.nota="0";
        }
        if(event.target.value>0){
            this.nota=event.target.value;
        }
        //console.log(this.nota, user, user, user, title, ciclo, credito, especialidad)//curse ciclo carrera year user nombre

        this.taskService.create_average(this.nota, user, user, user, title, ciclo, credito, especialidad, this.year)//curse ciclo carrera year user nombre
            .subscribe((res: any) => {
              this.loading = "";
              //this.getIntegeraverage();
            });
            return false;
      }else{
        this.loading = "";
          //this.getIntegeraverage();
        alert("La calificación es vigesimal, L : Licencia o R : Retirado")
        return false;
      }

      }

      onBlurMeanUpdate(event:any, id: string) {
        if(event.target.value<=20&&event.target.value>0 || event.target.value=="R"  || event.target.value=="L" || event.target.value=="-0"){
          if(event.target.value=='L' || event.target.value=="-0"){
          this.nota="-0";
          }
          if(event.target.value=='R' || event.target.value=='0'){
            this.nota="0";
          }
          if(event.target.value>0){
              this.nota=event.target.value;
          }
          this.taskService.update_average(id, this.nota)
                .subscribe((res: any) => {
                //  this.getIntegeraverage()
                });
          return false;
        }else{
          alert("La calificación es vigesimal mayor a 0, L : Licencia o R : Retirado")
           this.name = ' ';
            // this.getIntegeraverage();
          return false;
        }

      }

      onBlurFilosophyUpdate(event:any, id: string, description:string ) {
      console.log(event.target.value);
console.log(id);
/*
this.CurseService.filecurseupdate(id, event.target.value, description)
.subscribe((res: any) => {
  this.usser();
})
*/
}

FriendUpdate1(event:any, id: string, description:string, blogspot: string, youtube: string, instagram: string, whatsapp: string, facebook: string ) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, event.target.value, description, blogspot, youtube, instagram, whatsapp, facebook)
.subscribe((res: any) => {
this.usser();
})
}

FriendUpdate2(title:string, id: string, event:any , blogspot: string, youtube: string, instagram: string, whatsapp: string, facebook: string) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, event.target.value, blogspot, youtube, instagram, whatsapp, facebook)
.subscribe((res: any) => {
this.usser();
})
}

FriendUpdate3(title:string, id: string,  description: string, event:any, youtube: string, instagram: string, whatsapp: string, facebook: string) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, description, event.target.value, youtube, instagram, whatsapp, facebook)
.subscribe((res: any) => {
this.usser();
})
}

FriendUpdate4(title:string, id: string,  description: string, blogspot : string, event:any, instagram: string, whatsapp: string, facebook: string) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, description, blogspot, event.target.value, instagram, whatsapp, facebook)
.subscribe((res: any) => {
this.usser();
})
}

FriendUpdate5(title:string, id: string,  description: string, blogspot: string, youtube: string, event:any, whatsapp: string, facebook: string) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, description, blogspot, youtube, event.target.value, whatsapp, facebook)
.subscribe((res: any) => {
this.usser();
})
}

FriendUpdate6(title:string, id: string,  description: string, blogspot: string, youtube: string, instagram:string, event:any, facebook: string) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, description, blogspot, youtube, instagram, event.target.value, facebook)
.subscribe((res: any) => {
this.usser();
})
}
FriendUpdate7(title:string, id: string,  description: string, blogspot: string, youtube: string, instagram:string, whatsapp: string, event:any) {
console.log(event.target.value);
console.log(id);
this.CurseService.filecurseupdate(id, title, description, blogspot, youtube, instagram, whatsapp, event.target.value)
.subscribe((res: any) => {
this.usser();
})
}


onBlurFilosophy(event:any, user_id:string, name:string, correo:string, password:string, rol:string, celular:string, carrera:string, ciclo:string, sexo:string, dni:string) {
//console.log(this.froala);
console.log(user_id, name, correo, password, rol, celular, carrera, ciclo, sexo, dni, this.froala,  this.archivos[0]);
this.UserService.updatePhoto(user_id, name, correo, password, rol, celular, carrera, '', ciclo, sexo, dni, event.target.value,  this.archivos[0])
    .subscribe((res: any) => {
    });
return false;
}


onblur(event:any){
  console.log(event.target.innerHTML);

}

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.photointeger, event.previousIndex, event.currentIndex);
    }
}
