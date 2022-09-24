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
exports.Reserves = exports.ReserveStatus = void 0;
const typeorm_1 = require("typeorm");
const Zones_1 = require("./Zones");
const Users_1 = require("./Users");
const Orders_1 = require("./Orders");
var ReserveStatus;
(function (ReserveStatus) {
    ReserveStatus[ReserveStatus["RESERVED"] = 0] = "RESERVED";
    ReserveStatus[ReserveStatus["WAITING"] = 1] = "WAITING";
    ReserveStatus[ReserveStatus["CANCELED"] = 2] = "CANCELED";
})(ReserveStatus = exports.ReserveStatus || (exports.ReserveStatus = {}));
let Reserves = class Reserves {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'reserves_id' }),
    __metadata("design:type", Number)
], Reserves.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zones_id' }),
    __metadata("design:type", Number)
], Reserves.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Zones_1.Zones, (zone) => zone.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'zones_id' }),
    __metadata("design:type", Zones_1.Zones)
], Reserves.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Reserves.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Reserves.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reserves_startat', type: 'timestamp' }),
    __metadata("design:type", Date)
], Reserves.prototype, "startAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reserves_endat', type: 'timestamp' }),
    __metadata("design:type", Date)
], Reserves.prototype, "endAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reserves_status' }),
    __metadata("design:type", Number)
], Reserves.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Orders_1.Orders, (order) => order.reserve),
    __metadata("design:type", Array)
], Reserves.prototype, "orders", void 0);
Reserves = __decorate([
    (0, typeorm_1.Entity)('reserves')
], Reserves);
exports.Reserves = Reserves;
//# sourceMappingURL=Reserves.js.map