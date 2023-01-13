import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
}) 
export class CoursesComponent {

    name: string = "Git Course";
    duration: number = 4.87;
    currency: number = 100;
    email: string= "me@example.com";

    onKeyUp() {
        console.log('Name : ' + this.name | UpperCasePipe);
        console.log(this.email);
        console.log(this.email);
    }
}