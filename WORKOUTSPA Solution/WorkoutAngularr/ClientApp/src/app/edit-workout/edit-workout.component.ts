import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Workout } from '../Workout';
import { ActivatedRoute } from '@angular/router';
import { WorkkService } from '../workk.service';

@Component({
    selector: 'app-edit-workout',
    templateUrl: './edit-workout.component.html',
    styleUrls: ['./edit-workout.component.css']
})

export class EditWorkoutComponent implements OnInit {
  public click: boolean = false;
  frmWrk: FormGroup;
  @Output() WorkoutEdit = new EventEmitter<Workout>();
  @Output() WorkoutDelete = new EventEmitter<Workout>();
  @Input() WorkAdd: Workout;
  constructor(private currentRoute: ActivatedRoute, private service: WorkkService, private fb: FormBuilder) {}
  get f() {
    return this.frmWrk.controls;
  }


  ngOnInit() {
    this.frmWrk = this.fb.group({

      title: new FormControl(this.WorkAdd.workout_title, [Validators.required])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');
  }
  saveForm(frm: NgForm) {

    let wrk: Workout = new Workout(frm.value.title, frm.value.note, frm.value.Calory, frm.value.category);
      this.service.update(wrk).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }

  }
}
