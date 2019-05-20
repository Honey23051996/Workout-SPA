import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Category } from '../Category';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit{
  frmCate: FormGroup;

  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }
  get f() {
    return this.frmCate.controls;
  }

  ngOnInit() {
    this.frmCate = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => {
        this.f.id.setValue(data.category_id);
        this.f.name.setValue(data.category_name);
      },
      (error) => alert('Not Found')
    );



  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cate: Category = new Category(frm.value.id, frm.value.name);
      this.service.update(cate).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }
  }
}
