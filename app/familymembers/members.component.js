System.register(["@angular/core", "app/familymembers/members.service"], function(exports_1, context_1) {
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
    var core_1, members_service_1;
    var FamilyMembersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (members_service_1_1) {
                members_service_1 = members_service_1_1;
            }],
        execute: function() {
            FamilyMembersComponent = (function () {
                function FamilyMembersComponent(_familyMembersService) {
                    var _this = this;
                    this._familyMembersService = _familyMembersService;
                    this.family = "'s family members details";
                    this.name = "Sivaramakrishan";
                    this._familyMembersService.getMembers().subscribe(function (res) { return _this.members = res.sivaramakrishnansfamily; });
                }
                FamilyMembersComponent = __decorate([
                    core_1.Component({
                        selector: "family-members",
                        templateUrl: "app/familymembers/members.component.html",
                        providers: [members_service_1.FamilyMembersService],
                        styles: ["\n    .panel-body > .panel{\n      width: 32%; \n      float: left;\n      margin: 5px;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof members_service_1.FamilyMembersService !== 'undefined' && members_service_1.FamilyMembersService) === 'function' && _a) || Object])
                ], FamilyMembersComponent);
                return FamilyMembersComponent;
                var _a;
            }());
            exports_1("FamilyMembersComponent", FamilyMembersComponent);
        }
    }
});
//# sourceMappingURL=members.component.js.map