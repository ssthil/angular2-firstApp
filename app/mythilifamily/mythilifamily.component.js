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
    var MythiliFamilyMembersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MythiliFamilyMembersComponent = (function () {
                function MythiliFamilyMembersComponent() {
                    this.family = "";
                    this.name = "Mythili";
                    //constructor () {
                    this.members = [
                        { title: "Father", name: "Marthandan", age: 30 },
                        { title: "Mother", name: "Mythili", age: 32 },
                        { title: "Son", name: "Mathees", age: 2 }
                    ];
                }
                MythiliFamilyMembersComponent = __decorate([
                    core_1.Component({
                        selector: "mythili-members",
                        templateUrl: "app/mythilifamily/mythilifamily.component.html",
                        styles: ["\n    .panel-body > .panel{\n      width: 32%;\n      float: left;\n      margin: 5px;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MythiliFamilyMembersComponent);
                return MythiliFamilyMembersComponent;
            }());
            exports_1("MythiliFamilyMembersComponent", MythiliFamilyMembersComponent);
        }
    }
});
//# sourceMappingURL=mythilifamily.component.js.map