import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkkService } from '../workk.service';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';
import { Category } from '../Category';

@Component({
    selector: 'app-for-edit-workout',
    templateUrl: './for-edit-workout.component.html',
    styleUrls: ['./for-edit-workout.component.css']
})

export class ForEditWorkoutComponent implements OnInit{
  frmWrk: FormGroup;
  category: Category[];
  workout: Workout;
  public click: boolean = false;
  constructor(private currentRoute: ActivatedRoute, private service: WorkkService, private service1: WorkoutService, private fb: FormBuilder) { }

  get f() {
    return this.frmWrk.controls;
  }

  ngOnInit() {
    this.frmWrk = this.fb.group({
     
      title: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
      Calory: new FormControl(this.caloriescount, [Validators.required]),
      category: new FormControl()


    });
    
    let wid = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(wid).subscribe(
      (data) => {
        console.log(data);
        this.f.title.setValue(data.workout_title);
        this.f.note.setValue(data.workout_note);
        this.f.Calory.setValue(data.calories_burn_per_min);
        this.f.category.setValue(data.category_id);
        this.caloriescount = data.calories_burn_per_min;
        this.workout = data;
        console.log(this.workout);
      },
      (error) => alert('Not Found')
    );

    this.service1.getAll().subscribe(data => this.category = data, err => alert('Error fetching categories'));

  }

  public caloriescount: number = 0;
  add() {
    this.caloriescount += 0.1;
    this.f.Calory.setValue(this.caloriescount);
  }
  minus() {
    if (this.caloriescount > 0) {
      this.caloriescount -= 0.1;
      this.f.Calory.setValue(this.caloriescount);

    }
    else this.caloriescount = 0;
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let wrk: Workout = new Workout(frm.value.title, frm.value.note, frm.value.Calory, frm.value.category, this.workout.workout_id);
      this.service.update(wrk).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }
  }

}
