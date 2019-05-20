import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Category } from '../Category';
import { WorkoutService } from '../workout.service';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

  frmCate: FormGroup;
  ngOnInit() {
    this.frmCate = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get f() {
    return this.frmCate.controls;
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cate: Category = new Category(frm.value.id, frm.value.name);
      this.service.save(cate).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }
  } constructor(private fb: FormBuilder, private service: WorkoutService) { }


}
