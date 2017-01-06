import { Component } from "@angular/core";

@Component ({
    selector:'main-app',
    templateUrl: 'app/app.component.html' 
})

export class AppComponent {
    public name: string = `my first Angular 2 web application`;
}