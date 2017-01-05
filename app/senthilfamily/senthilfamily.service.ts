import { Injectable } from "@angular/core";

@Injectable()

export class SenthilFamilyMemberService {
    members: Array<any>;

    constructor () {
        this.members = [
            { title: "Father", name: "Senthil", age: 34 },
            { title: "Mother", name: "Surya", age: 28 },
            { title: "Daughter", name: "Swasthika", age: 5 }
        ]
    }

    getMembers () {
        return this.members;
    }
}