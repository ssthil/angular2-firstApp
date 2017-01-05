import { Component } from "@angular/core";

// Child component
import { FamilyMembersComponent } from "app/familymembers/members.component";
import { SenthilFamilyMembersComponent } from "app/senthilfamily/senthilfamily.component";

@Component ({
    selector:'main-app',
    templateUrl: 'app/app.component.html',
    directives:[FamilyMembersComponent, SenthilFamilyMembersComponent]
})

export class AppComponent {
    public name: string = "My First Angular 2";
}