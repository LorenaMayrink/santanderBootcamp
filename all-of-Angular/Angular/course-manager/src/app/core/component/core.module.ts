import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild ([
      {
        path: '**', component: Error404Component
      }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { 

}