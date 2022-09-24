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
exports.Spaces = exports.SpaceStatus = exports.SpaceType = void 0;
const typeorm_1 = require("typeorm");
const Reviews_1 = require("./Reviews");
const Users_1 = require("./Users");
const Zones_1 = require("./Zones");
var SpaceType;
(function (SpaceType) {
    SpaceType[SpaceType["MANUALLY"] = 0] = "MANUALLY";
    SpaceType[SpaceType["AUTOMATICALLY"] = 1] = "AUTOMATICALLY";
})(SpaceType = exports.SpaceType || (exports.SpaceType = {}));
var SpaceStatus;
(function (SpaceStatus) {
    SpaceStatus[SpaceStatus["PENDING_APPROVE"] = 0] = "PENDING_APPROVE";
    SpaceStatus[SpaceStatus["ENABLED"] = 1] = "ENABLED";
    SpaceStatus[SpaceStatus["DENIED"] = 2] = "DENIED";
    SpaceStatus[SpaceStatus["DELETED"] = 3] = "DELETED";
})(SpaceStatus = exports.SpaceStatus || (exports.SpaceStatus = {}));
let Spaces = class Spaces {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'spaces_id' }),
    __metadata("design:type", Number)
], Spaces.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Spaces.prototype, "managerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Spaces.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_name' }),
    __metadata("design:type", String)
], Spaces.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_description' }),
    __metadata("design:type", String)
], Spaces.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_lat' }),
    __metadata("design:type", Number)
], Spaces.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_lng' }),
    __metadata("design:type", Number)
], Spaces.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_default_cost' }),
    __metadata("design:type", Number)
], Spaces.prototype, "defaultCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_type' }),
    __metadata("design:type", Number)
], Spaces.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_createdat', type: 'timestamp' }),
    __metadata("design:type", Date)
], Spaces.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_status' }),
    __metadata("design:type", Number)
], Spaces.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_unit' }),
    __metadata("design:type", Number)
], Spaces.prototype, "timeUnit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Zones_1.Zones, (zone) => zone.parentSpace),
    (0, typeorm_1.JoinColumn)({ name: 'spaces_id' }),
    __metadata("design:type", Array)
], Spaces.prototype, "childrenZones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Reviews_1.Reviews, (review) => review.space),
    __metadata("design:type", Array)
], Spaces.prototype, "reviews", void 0);
Spaces = __decorate([
    (0, typeorm_1.Entity)()
], Spaces);
exports.Spaces = Spaces;
//# sourceMappingURL=Spaces.js.map