
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';


const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
    }
];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
