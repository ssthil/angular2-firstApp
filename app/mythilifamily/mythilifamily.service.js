System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MythiliFamilyMembersService;
    return {
        setters:[],
        execute: function() {
            ;
            MythiliFamilyMembersService = (function () {
                function MythiliFamilyMembersService() {
                    this.members = [
                        { title: "Father", name: "Marthandan", age: 30 },
                        { title: "Mother", name: "Mythili", age: 32 },
                        { title: "Son", name: "Mathees", age: 2 }
                    ];
                }
                MythiliFamilyMembersService.prototype.getMembers = function () {
                    return this.members;
                };
                return MythiliFamilyMembersService;
            }());
            exports_1("MythiliFamilyMembersService", MythiliFamilyMembersService);
        }
    }
});
//# sourceMappingURL=mythilifamily.service.js.map