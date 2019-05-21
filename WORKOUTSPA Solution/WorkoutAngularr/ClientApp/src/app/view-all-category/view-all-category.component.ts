import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Category } from '../Category';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-all-category',
  templateUrl: './view-all-category.component.html',
  styleUrls: ['./view-all-category.component.css']
})
export class ViewAllCategoryComponent implements OnInit {
  cate: string = '';
   
  Categories: Category[]
  constructor(private service: WorkoutService) { }
  

  ngOnInit() {
    this.service.getAll().subscribe(
      (data)=>this.Categories=data,
      (error) => console.log(error)
);
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new Category(0, $event)).subscribe(
      (data) => alert('Added'),
      (error) => alert("Failed to add")
    );
  }
  Edit($event) {
    this.service.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert("Failed to update")
    );
  }
  Delete($event) {
    this.service.delete($event.category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));
   
  }

 

}
