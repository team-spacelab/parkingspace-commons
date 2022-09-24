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
exports.Orders = exports.OrderStatus = exports.MethodType = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
const Cars_1 = require("./Cars");
const Zones_1 = require("./Zones");
const Reserves_1 = require("./Reserves");
var MethodType;
(function (MethodType) {
    MethodType[MethodType["\uCE74\uB4DC"] = 0] = "\uCE74\uB4DC";
    MethodType[MethodType["\uACC4\uC88C\uC774\uCCB4"] = 1] = "\uACC4\uC88C\uC774\uCCB4";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["READY"] = 0] = "READY";
    OrderStatus[OrderStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    OrderStatus[OrderStatus["WAITING_FOR_DEPOSIT"] = 2] = "WAITING_FOR_DEPOSIT";
    OrderStatus[OrderStatus["DONE"] = 3] = "DONE";
    OrderStatus[OrderStatus["CANCELED"] = 4] = "CANCELED";
    OrderStatus[OrderStatus["PARTIAL_CANCELED"] = 5] = "PARTIAL_CANCELED";
    OrderStatus[OrderStatus["ABORTED"] = 6] = "ABORTED";
    OrderStatus[OrderStatus["EXPIRED"] = 7] = "EXPIRED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
let Orders = class Orders {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'orders_id', length: 36, type: 'varchar' }),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Orders.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Orders.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cars_id' }),
    __metadata("design:type", Number)
], Orders.prototype, "carId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cars_1.Cars, (car) => car.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'cars_id' }),
    __metadata("design:type", Cars_1.Cars)
], Orders.prototype, "car", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zones_id' }),
    __metadata("design:type", Number)
], Orders.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Zones_1.Zones, (zone) => zone.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'zones_id' }),
    __metadata("design:type", Zones_1.Zones)
], Orders.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reserves_id' }),
    __metadata("design:type", Number)
], Orders.prototype, "reserveId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Reserves_1.Reserves, (reserve) => reserve.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'reserves_id' }),
    __metadata("design:type", Reserves_1.Reserves)
], Orders.prototype, "reserve", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_method' }),
    __metadata("design:type", Number)
], Orders.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_amout' }),
    __metadata("design:type", Number)
], Orders.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_status' }),
    __metadata("design:type", Number)
], Orders.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_createdat', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Orders.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_point' }),
    __metadata("design:type", Number)
], Orders.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orders_receipt', length: 256, nullable: true }),
    __metadata("design:type", String)
], Orders.prototype, "receipt", void 0);
Orders = __decorate([
    (0, typeorm_1.Entity)('orders')
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map