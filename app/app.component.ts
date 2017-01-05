import { Component } from "@angular/core";

// Child component
import { FamilyMembersComponent } from "app/familymembers/members.component";

@Component ({
    selector:'main-app',
    templateUrl: 'app/app.component.html',
    directives:[FamilyMembersComponent]
})

export class AppComponent {
    public name: string = "My Firts Angular 2";
}