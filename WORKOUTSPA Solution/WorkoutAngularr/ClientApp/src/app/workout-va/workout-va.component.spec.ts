/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { WorkoutVaComponent } from './workout-va.component';

let component: WorkoutVaComponent;
let fixture: ComponentFixture<WorkoutVaComponent>;

describe('Workout-va component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WorkoutVaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(WorkoutVaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});