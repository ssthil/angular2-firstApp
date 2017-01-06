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
    var FamilyMembersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FamilyMembersService = (function () {
                function FamilyMembersService() {
                    this.members = [
                        { title: "Father", name: "Sivaramakrishan", age: 63 },
                        { title: "Mother", name: "Jayarani", age: 58 },
                        { title: "1st Son", name: "Rajkumar", age: 37 },
                        { title: "2nd Son", name: "Senthil", age: 34 },
                        { title: "Daughter", name: "Maithili", age: 32 }
                    ];
                }
                FamilyMembersService.prototype.getMembers = function () {
                    return this.members;
                };
                FamilyMembersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FamilyMembersService);
                return FamilyMembersService;
            }());
            exports_1("FamilyMembersService", FamilyMembersService);
        }
    }
});
//# sourceMappingURL=members.service.js.map