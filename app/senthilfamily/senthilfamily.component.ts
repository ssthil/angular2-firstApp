import { Component } from "@angular/core";

import { SenthilFamilyMemberService } from "app/senthilfamily/senthilfamily.service";

@Component({
    selector: "senthil-members",
    templateUrl: "app/senthilfamily/senthilfamily.component.html",
    providers: [SenthilFamilyMemberService],
    styleUrls:['app/senthilfamily/senthilfamily.component.css']
})

export class SenthilFamilyMembersComponent {
    public family: string = "'s family members details";
    public name: string = "Senthil";
    members: Array<any>;

    constructor (private _senthilFamilyMemberService : SenthilFamilyMemberService) {
        this._senthilFamilyMemberService.getMembers().subscribe(data=>this.members = data.senthilsfamily);
    }
    
}