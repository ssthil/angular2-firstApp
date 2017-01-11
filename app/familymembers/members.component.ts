import { Component } from "@angular/core";
import { Http } from "@angular/http";
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
    .table{
        margin-bottom:0
    }
    `]
})

export class FamilyMembersComponent { 
    public family: string = "'s family members details";
    public name: string = "Sivaramakrishan";

    members: Array<any>;

    constructor (private _familyMembersService: FamilyMembersService) {
        this._familyMembersService.getMembers().subscribe(res=> this.members = res.sivaramakrishnansfamily); 
     }

    /*displayData (): void { 
        this._familyMembersService.getMembers()
        .subscribe(
            data => { this.members = data; },
            error => console.log(error)
        )
    } */   


    // members = [
    //     {title: "Father", name: "Sivaramakrishan", age:63},
    //     {title: "Mother", name: "Jayarani", age: 58},
    //     {title: "Son 1", name: "Rajakumar", age: 37},
    //     {title: "Son 2", name: "Senthil", age: 34},
    //     {title: "Daughter", name: "Maithili", age: 32}
    // ]

}