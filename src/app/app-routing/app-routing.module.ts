import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './../nav/nav.component';
import { HomeComponent } from './../home/home.component';
import { NotfoundComponent } from './../notfound/notfound.component';
import { AboutComponent } from './../about/about.component';
import { ArticleComponent } from './../article/article.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path:'About',
        component: AboutComponent
    },
    {
        path: 'Article',
        component: ArticleComponent
    },
    {
        path: 'Notfound',
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }