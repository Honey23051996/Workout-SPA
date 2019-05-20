/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FindCategoryComponent } from './find-category.component';

let component: FindCategoryComponent;
let fixture: ComponentFixture<FindCategoryComponent>;

describe('FindCategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FindCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FindCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});