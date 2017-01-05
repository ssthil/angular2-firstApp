import { Injectable } from "@angular/core";

@Injectable()

export class FamilyMembersService {
    members: Array<any>;

    constructor() {
        this.members = [
            { title: "Father", name: "Sivaramakrishan", age: 63 },
            { title: "Mother", name: "Jayarani", age: 58 },
            { title: "Son 1", name: "Rajakumar", age: 37 },
            { title: "Son 2", name: "Senthil", age: 34 },
            { title: "Daughter", name: "Maithili", age: 32 }
        ]
    }

    getMembers () {
        return this.members;
    }
}