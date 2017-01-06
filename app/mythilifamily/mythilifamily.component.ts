import { Component } from "@angular/core";
//service
import { MythiliFamilyMembersService } from "app/mythilifamily/mythilifamily.service";

@Component({
    selector:"mythili-members",
    templateUrl: "app/mythilifamily/mythilifamily.component.html",
    providers: [MythiliFamilyMembersService],
    styles:[`
    .panel-body > .panel{
      width: 32%;
      float: left;
      margin: 5px;
    }
    `]
})

export class MythiliFamilyMembersComponent {
    public family: string = "'s family members details";
    public name: string = "Mythili";

    members:Array<any>;

    constructor (_mythiliFamilyMembersService: MythiliFamilyMembersService) {

        this.members = _mythiliFamilyMembersService.getMembers();
        /*members = [
            {title: "Father", name: "Marthandan", age:30},
            {title: "Mother", name: "Mythili", age:32},
            {title: "Son", name: "Mathees", age:2}
        ]*/
    }
}