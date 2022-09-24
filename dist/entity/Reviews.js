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
exports.Reviews = void 0;
const typeorm_1 = require("typeorm");
const Spaces_1 = require("./Spaces");
const Users_1 = require("./Users");
let Reviews = class Reviews {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'reviews_id' }),
    __metadata("design:type", Number)
], Reviews.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviews_content' }),
    __metadata("design:type", String)
], Reviews.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviews_rating' }),
    __metadata("design:type", Number)
], Reviews.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviews_created_at' }),
    __metadata("design:type", Date)
], Reviews.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviews_deleted_at' }),
    __metadata("design:type", Date)
], Reviews.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], Reviews.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_id' }),
    __metadata("design:type", Number)
], Reviews.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], Reviews.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Spaces_1.Spaces, (space) => space.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'spaces_id' }),
    __metadata("design:type", Spaces_1.Spaces)
], Reviews.prototype, "space", void 0);
Reviews = __decorate([
    (0, typeorm_1.Entity)('reviews')
], Reviews);
exports.Reviews = Reviews;
//# sourceMappingURL=Reviews.js.map