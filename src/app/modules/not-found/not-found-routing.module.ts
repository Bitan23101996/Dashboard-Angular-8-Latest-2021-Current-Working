
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule { }
