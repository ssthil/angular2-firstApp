import { Component } from "@angular/core";
// members service
import { FamilyMembersService } from "app/familymembers/members.service";

@Component({
    selector:"family-members",
    templateUrl:"app/familymembers/members.component.html",
    providers: [FamilyMembersService],
    styles:[`
    .panel-body > .panel{
      width: 32%;
      float: left;
      margin: 5px;
    }
    `]
})

export class FamilyMembersComponent { 
    public family: string = "'s family members details";
    public name: string = "Sivaramakrishan";
    
    constructor (_familyMembersService: FamilyMembersService) {
        this.members = _familyMembersService.getMembers();
    }

    // members = [
    //     {title: "Father", name: "Sivaramakrishan", age:63},
    //     {title: "Mother", name: "Jayarani", age: 58},
    //     {title: "Son 1", name: "Rajakumar", age: 37},
    //     {title: "Son 2", name: "Senthil", age: 34},
    //     {title: "Daughter", name: "Maithili", age: 32}
    // ]

}