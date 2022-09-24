"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zones = exports.ZoneStatus = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./Orders");
const Reserves_1 = require("./Reserves");
const Spaces_1 = require("./Spaces");
const Users_1 = require("./Users");
var ZoneStatus;
(function (ZoneStatus) {
    ZoneStatus[ZoneStatus["DISABLED"] = 0] = "DISABLED";
    ZoneStatus[ZoneStatus["ENABLED"] = 1] = "ENABLED";
    ZoneStatus[ZoneStatus["DELETED"] = 2] = "DELETED";
})(ZoneStatus = exports.ZoneStatus || (exports.ZoneStatus = {}));
let Zones = class Zones {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'zones_id' }),
    __metadata("design:type", Number)
], Zones.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_id' }),
    __metadata("design:type", Number)
], Zones.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Spaces_1.Spaces, (space) => space.id),
    (0, typeorm_1.JoinColumn)({ name: 'spaces_id' }),
    __metadata("design:type", Spaces_1.Spaces)
], Zones.prototype, "parentSpace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Zones.prototype, "managerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Zones.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zones_cost' }),
    __metadata("design:type", Number)
], Zones.prototype, "costDiffrence", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zones_status' }),
    __metadata("design:type", Number)
], Zones.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Reserves_1.Reserves, (reserve) => reserve.zone),
    __metadata("design:type", Array)
], Zones.prototype, "reserves", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Orders_1.Orders, (order) => order.zone),
    __metadata("design:type", Array)
], Zones.prototype, "orders", void 0);
Zones = __decorate([
    (0, typeorm_1.Entity)()
], Zones);
exports.Zones = Zones;
//# sourceMappingURL=Zones.js.map