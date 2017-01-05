System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FamilyMembersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FamilyMembersComponent = (function () {
                function FamilyMembersComponent() {
                    this.title = "Father";
                    this.name = "Sivaramakrishan";
                    this.members = [
                        { title: "Father", name: "Sivaramakrishan", age: 63 },
                        { title: "Mother", name: "Jayarani", age: 58 },
                        { title: "Son 1", name: "Rajakumar", age: 37 },
                        { title: "Son 2", name: "Senthil", age: 34 },
                        { title: "Daughter", name: "Maithili", age: 32 }
                    ];
                }
                FamilyMembersComponent = __decorate([
                    core_1.Component({
                        selector: "family-members",
                        template: "\n        <div class=\"panel panel-info\" *ngFor=\"let member of members\">\n            <div class=\"panel-heading\">\n                {{member.title}}\n            </div>\n            <div class=\"panel-body\">\n               <p>{{member.name}}</p>\n               <p>Age: {{member.age}}</p>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FamilyMembersComponent);
                return FamilyMembersComponent;
            }());
            exports_1("FamilyMembersComponent", FamilyMembersComponent);
        }
    }
});
//# sourceMappingURL=members.component.js.map