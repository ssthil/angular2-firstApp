import { Component } from "@angular/core";

@Component({
    selector:"family-members",
    template: `
        <div class="panel panel-info" *ngFor="let member of members">
            <div class="panel-heading">
                {{member.title}}
            </div>
            <div class="panel-body">
               <p>{{member.name}}</p>
               <p>Age: {{member.age}}</p>
            </div>
        </div>
    `
})

export class FamilyMembersComponent { 
    public title: string = "Father";
    public name: string = "Sivaramakrishan";

    members = [
        {title: "Father", name: "Sivaramakrishan", age:63},
        {title: "Mother", name: "Jayarani", age: 58},
        {title: "Son 1", name: "Rajakumar", age: 37},
        {title: "Son 2", name: "Senthil", age: 34},
        {title: "Daughter", name: "Maithili", age: 32}
    ]
}