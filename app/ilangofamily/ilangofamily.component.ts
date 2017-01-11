import { Component } from "@angular/core";
import { IlangoFamilyMemberService } from "app/ilangofamily/ilangofamily.service"

@Component({
    selector:'ilango-members',
    templateUrl: 'app/ilangofamily/ilangofamily.component.html',
    styleUrls: ['app/ilangofamily/ilangofamily.component.css'],
    providers:[IlangoFamilyMemberService]
})

export class IlangoFamilyMembersComponent {
    public name: string = "Ilango";
    public family: string = "'s family members details";

    members:Array<any>;

    constructor (private _ilangoFamilyMembersService: IlangoFamilyMemberService) {
        this._ilangoFamilyMembersService.getMembers().subscribe(data => this.members = data.ilangofamily);
    }

}