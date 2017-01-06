import { Component } from "@angular/core";

import { SenthilFamilyMemberService } from "app/senthilfamily/senthilfamily.service";

@Component({
    selector: "senthil-members",
    templateUrl: "app/senthilfamily/senthilfamily.component.html",
    providers: [SenthilFamilyMemberService],
    styles:[`
    .panel-body > .panel{
      width: 32%;
      float: left;
      margin: 5px;
    }
    `]
})

export class SenthilFamilyMembersComponent {
    public family: string = "'s family members details";
    public name: string = "Senthil";
    members: Array<any>;

    constructor (_senthilFamilyMemberService : SenthilFamilyMemberService) {
        this.members = _senthilFamilyMemberService.getMembers();
    }
}