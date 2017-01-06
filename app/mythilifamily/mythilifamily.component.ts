import { Component } from "@angular/core";

@Component({
    selector:"mythili-members",
    templateUrl: "app/mythilifamily/mythilifamily.component.html",
    styles:[`
    .panel-body > .panel{
      width: 32%;
      float: left;
      margin: 5px;
    }
    `]
})

export class MythiliFamilyMembersComponent {
    public family: string = "";
    public name: string = "Mythili";

    memmbers:Array<any>;

    //constructor () {
        members = [
            {title: "Father", name: "Marthandan", age:30},
            {title: "Mother", name: "Mythili", age:32},
            {title: "Son", name: "Mathees", age:2}
        ]
   // }
}