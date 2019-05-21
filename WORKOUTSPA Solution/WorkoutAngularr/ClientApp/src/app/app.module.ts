import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';


import { ViewAllCategoryComponent } from './view-all-category/view-all-category.component';
import { WorkoutService } from './workout.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { WorkoutVaComponent } from './workout-va/workout-va.component';
import { TrackComponent } from './track/track.component';
import { CreateComponent } from './create/create.component';
import { FilterPipe } from './SearchBox';



@NgModule({
  declarations: [
    AppComponent,
    ViewAllCategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    WorkoutVaComponent,
    TrackComponent,
    CreateComponent,
    FilterPipe
    


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     
      { path: 'view-all-category', component: ViewAllCategoryComponent },
     
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'delete-category/:id', component: DeleteCategoryComponent },
      { path: '', redirectTo: 'view-all-category', pathMatch: 'full' },
      { path: 'workout-va', component: WorkoutVaComponent },
      { path: 'track', component: TrackComponent },
      { path: 'create', component: CreateComponent }


      
     


      
      

      
      
    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
