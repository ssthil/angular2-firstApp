import { Injectable } from "@angular/core";

@Injectable()

export class FamilyMembersService {
    members: Array<any>;

    constructor() {
        this.members = [
            { title: "Father", name: "Sivaramakrishan", age: 63 },
            { title: "Mother", name: "Jayarani", age: 58 },
            { title: "1st Son", name: "Rajkumar", age: 37 },
            { title: "2nd Son", name: "Senthil", age: 34 },
            { title: "Daughter", name: "Maithili", age: 32 }
        ]
    }

    getMembers () {
        return this.members;
    }
}