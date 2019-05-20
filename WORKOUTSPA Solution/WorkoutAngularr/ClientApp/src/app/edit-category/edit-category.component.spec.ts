/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditCategoryComponent } from './edit-category.component';

let component: EditCategoryComponent;
let fixture: ComponentFixture<EditCategoryComponent>;

describe('edit-category component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});