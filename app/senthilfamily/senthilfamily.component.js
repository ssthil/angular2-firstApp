System.register(["@angular/core", "app/senthilfamily/senthilfamily.service"], function(exports_1, context_1) {
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
    var core_1, senthilfamily_service_1;
    var SenthilFamilyMembersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (senthilfamily_service_1_1) {
                senthilfamily_service_1 = senthilfamily_service_1_1;
            }],
        execute: function() {
            SenthilFamilyMembersComponent = (function () {
                function SenthilFamilyMembersComponent(_senthilFamilyMemberService) {
                    var _this = this;
                    this._senthilFamilyMemberService = _senthilFamilyMemberService;
                    this.family = "'s family members details";
                    this.name = "Senthil";
                    this._senthilFamilyMemberService.getMembers().subscribe(function (data) { return _this.members = data.senthilsfamily; });
                }
                SenthilFamilyMembersComponent = __decorate([
                    core_1.Component({
                        selector: "senthil-members",
                        templateUrl: "app/senthilfamily/senthilfamily.component.html",
                        providers: [senthilfamily_service_1.SenthilFamilyMemberService],
                        styles: ["\n    .panel-body > .panel{\n      width: 32%;\n      float: left;\n      margin: 5px;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof senthilfamily_service_1.SenthilFamilyMemberService !== 'undefined' && senthilfamily_service_1.SenthilFamilyMemberService) === 'function' && _a) || Object])
                ], SenthilFamilyMembersComponent);
                return SenthilFamilyMembersComponent;
                var _a;
            }());
            exports_1("SenthilFamilyMembersComponent", SenthilFamilyMembersComponent);
        }
    }
});
//# sourceMappingURL=senthilfamily.component.js.map