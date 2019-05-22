import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Category } from '../Category';
import { Workout } from '../Workout';
import { WorkkService } from '../workk.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent {
  frmCate: FormGroup;
  category: Category[];
  public click: boolean = false;
  constructor(private fb: FormBuilder, private service: WorkoutService, private service1: WorkkService) { }
 ngOnInit() {
    this.frmCate = this.fb.group({

      title: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
      Calory: new FormControl(this.caloriescount, [Validators.required]),
      category: new FormControl()
   });
   this.service.getAll().subscribe(
     (data) => this.category = data,
   (error) => console.log(error)
   );
  }
  get f() {
    return this.frmCate.controls;
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
      let wrk: Workout = new Workout(frm.value.title, frm.value.note, frm.value.Calory, frm.value.category);
      console.log(wrk);
      this.service1.save(wrk).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }
  } 
  }
 
  

