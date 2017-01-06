import { Injectable } from "@angular/core";

@Injectable();

export class MythiliFamilyMembersService {
    members: Array<any>;

    constructor () {
        this.members = [
            {title: "Father", name: "Marthandan", age:30},
            {title: "Mother", name: "Mythili", age:32},
            {title: "Son", name: "Mathees", age:2}
        ]
    }

    getMembers() {
        return this.members;
    }
}