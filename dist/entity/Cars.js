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
exports.Cars = exports.CarStatus = exports.CarType = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
var CarType;
(function (CarType) {
    CarType[CarType["LIGHTCAR"] = 0] = "LIGHTCAR";
    CarType[CarType["COMPACTCAR"] = 1] = "COMPACTCAR";
    CarType[CarType["SUBCOMPACTCAR"] = 2] = "SUBCOMPACTCAR";
    CarType[CarType["MIDSIZECAR"] = 3] = "MIDSIZECAR";
    CarType[CarType["SEMILARGECAR"] = 4] = "SEMILARGECAR";
    CarType[CarType["LARGECAR"] = 5] = "LARGECAR";
})(CarType = exports.CarType || (exports.CarType = {}));
var CarStatus;
(function (CarStatus) {
    CarStatus[CarStatus["AVALIABLE"] = 0] = "AVALIABLE";
    CarStatus[CarStatus["DELETED"] = 1] = "DELETED";
})(CarStatus = exports.CarStatus || (exports.CarStatus = {}));
let Cars = class Cars {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'cars_id' }),
    __metadata("design:type", Number)
], Cars.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Cars.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Cars.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cars_num' }),
    __metadata("design:type", String)
], Cars.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cars_type' }),
    __metadata("design:type", Number)
], Cars.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cars_alias' }),
    __metadata("design:type", String)
], Cars.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cars_status' }),
    __metadata("design:type", Number)
], Cars.prototype, "status", void 0);
Cars = __decorate([
    (0, typeorm_1.Entity)('cars')
], Cars);
exports.Cars = Cars;
//# sourceMappingURL=Cars.js.map