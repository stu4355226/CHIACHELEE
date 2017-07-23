import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
//routing
import { AppRoutingModule } from './app-routing/app-routing.module';
//packages
import { MnFullpageModule } from 'ngx-fullpage';

import { AgmCoreModule } from '@agm/core';
import { ResumeComponent } from './resume/resume.component';
import { ScrollPointDirective } from './scroll-point.directive';

  //Google API key 
  // apiKey: 'AIzaSyCYdJ0VUe4esIb9X-lVb3qaeN5373Ru_W8'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    ResumeComponent,
    ScrollPointDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MnFullpageModule.forRoot(), // FullPage
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYdJ0VUe4esIb9X-lVb3qaeN5373Ru_W8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
