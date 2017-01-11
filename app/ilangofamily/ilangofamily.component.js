System.register(["@angular/core", "app/ilangofamily/ilangofamily.service"], function(exports_1, context_1) {
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
    var core_1, ilangofamily_service_1;
    var IlangoFamilyMembersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ilangofamily_service_1_1) {
                ilangofamily_service_1 = ilangofamily_service_1_1;
            }],
        execute: function() {
            IlangoFamilyMembersComponent = (function () {
                function IlangoFamilyMembersComponent(_ilangoFamilyMembersService) {
                    var _this = this;
                    this._ilangoFamilyMembersService = _ilangoFamilyMembersService;
                    this.name = "Ilango";
                    this.family = "'s family members details";
                    this._ilangoFamilyMembersService.getMembers().subscribe(function (data) { return _this.members = data.ilangofamily; });
                }
                IlangoFamilyMembersComponent = __decorate([
                    core_1.Component({
                        selector: 'ilango-members',
                        templateUrl: 'app/ilangofamily/ilangofamily.component.html',
                        styleUrls: ['app/ilangofamily/ilangofamily.component.css'],
                        providers: [ilangofamily_service_1.IlangoFamilyMemberService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof ilangofamily_service_1.IlangoFamilyMemberService !== 'undefined' && ilangofamily_service_1.IlangoFamilyMemberService) === 'function' && _a) || Object])
                ], IlangoFamilyMembersComponent);
                return IlangoFamilyMembersComponent;
                var _a;
            }());
            exports_1("IlangoFamilyMembersComponent", IlangoFamilyMembersComponent);
        }
    }
});
//# sourceMappingURL=ilangofamily.component.js.map