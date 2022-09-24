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
exports.SpaceFiles = exports.SpaceFileType = void 0;
const typeorm_1 = require("typeorm");
const Spaces_1 = require("./Spaces");
const Users_1 = require("./Users");
var SpaceFileType;
(function (SpaceFileType) {
    SpaceFileType[SpaceFileType["SPACE_PICTURE"] = 0] = "SPACE_PICTURE";
    SpaceFileType[SpaceFileType["SPACE_OWNERSHIP_DOCS"] = 1] = "SPACE_OWNERSHIP_DOCS";
})(SpaceFileType = exports.SpaceFileType || (exports.SpaceFileType = {}));
let SpaceFiles = class SpaceFiles {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'spacefiles_id' }),
    __metadata("design:type", Number)
], SpaceFiles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spaces_id' }),
    __metadata("design:type", Number)
], SpaceFiles.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Spaces_1.Spaces, (space) => space.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'spaces_id' }),
    __metadata("design:type", Spaces_1.Spaces)
], SpaceFiles.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'users_id' }),
    __metadata("design:type", Number)
], SpaceFiles.prototype, "uploaderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", Users_1.Users)
], SpaceFiles.prototype, "uploader", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spacefiles_url' }),
    __metadata("design:type", String)
], SpaceFiles.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spacefiles_type' }),
    __metadata("design:type", Number)
], SpaceFiles.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spacefiles_createdat', type: 'timestamp' }),
    __metadata("design:type", Date)
], SpaceFiles.prototype, "createdAt", void 0);
SpaceFiles = __decorate([
    (0, typeorm_1.Entity)('spacefiles')
], SpaceFiles);
exports.SpaceFiles = SpaceFiles;
//# sourceMappingURL=SpaceFiles.js.map