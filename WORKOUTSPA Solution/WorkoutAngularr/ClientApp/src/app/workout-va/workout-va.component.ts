import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { WorkkService } from '../workk.service';

@Component({
    selector: 'app-workout-va',
    templateUrl: './workout-va.component.html',
    styleUrls: ['./workout-va.component.css']
})
export class WorkoutVaComponent implements OnInit {

  wrk: string = '';
  Workouts: Workout[]
  constructor(private service1: WorkkService) { }
  ngOnInit() {
    this.service1.getAll().subscribe(
      (data) => this.Workouts = data,
      (error) => console.log(error)
    );
  }
  }
  EditWorkout($event) {
    this.service1.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert("Failed to update")
    );
  }
  DeleteWorkout($event) {
    this.service1.delete($event.category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));

  }
}
