import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { KatexModule } from 'ng-katex';
import { NavigationComponent } from './components/cmpt2-navigation/navigation.component';
import { PhotosListComponent } from './components/cmpt1-land/photos-list.component';
//import { PhotoPreviewComponent } from './components/cmpt7-curse-preview/curse-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LoginComponent } from './components/cmpt5-login/login.component';
import { LandComponent } from "./components/cmpt2-users/land.component";
import { QuillModule } from 'ngx-quill'

               
                                                                                                                
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SwiperModule } from 'swiper/angular';
import { NgxHeadroomModule } from 'ngx-headroom';
import { MatIconModule } from '@angular/material/icon';
                            
import { NgxDocViewerModule } from "ngx-doc-viewer";
//import { FileComponent } from './components/cmpt13-file/file.component';
import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
import { Cmpt21APGComponent } from './components/cmpt21-ap-g/cmpt21-ap-g.component';
import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
 
import { Cmpt25ADMISIONComponent } from './components/cmpt25-admision/cmpt25-admision.component';
 
  

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        PhotosListComponent,
        LandComponent,
        LoginComponent,
        UserComponent,
  
        UserPreviewComponent,
 
        //FileComponent,
        Cmpt14MVComponent,
           Cmpt19EDUCACIONComponent,
        Cmpt21APGComponent,
        Cmpt20APPComponent,
        Cmpt22APEComponent,
        Cmpt23TESISComponent,
        Cmpt25ADMISIONComponent,

    ],
    imports: [
        BrowserModule,
        NgxDocViewerModule,
        FormsModule,
        AppRoutingModule,
        CommonModule,
        DragDropModule,
        NgbModule,
        KatexModule,
        SwiperModule,
        //NgxHideOnScrollModule,
        HttpClientModule,
        MatIconModule,
        //YouTubePlayerModule,
        NgxHeadroomModule,
        //MarkdownModule.forRoot(),
        QuillModule.forRoot(),
         
        NgxYoutubePlayerModule.forRoot(),
        MatProgressBarModule,
        BrowserAnimationsModule,
        NgxExtendedPdfViewerModule
    ],
    providers: [NgxYoutubePlayerModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
