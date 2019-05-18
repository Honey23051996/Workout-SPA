import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ViewAllCategoryComponent } from './view-all-category/view-all-category.component';
import { WorkoutService } from './workout.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  
    ViewAllCategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     
      { path: 'view-all-category', component: ViewAllCategoryComponent }
    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
