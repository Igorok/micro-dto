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
exports.FindAllDto = exports.FindByIdsDto = exports.FindByIdDto = exports.WebUsersAllDto = exports.WebUserDto = exports.WebLoginParamDto = exports.WebRegistrationParamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class WebRegistrationParamDto {
}
exports.WebRegistrationParamDto = WebRegistrationParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of user', nullable: false }),
    __metadata("design:type", String)
], WebRegistrationParamDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of user', nullable: false }),
    __metadata("design:type", String)
], WebRegistrationParamDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password of user', nullable: false }),
    __metadata("design:type", String)
], WebRegistrationParamDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Repeat password', nullable: false }),
    __metadata("design:type", String)
], WebRegistrationParamDto.prototype, "passwordRepeat", void 0);
class WebLoginParamDto {
}
exports.WebLoginParamDto = WebLoginParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Login of user', nullable: false }),
    __metadata("design:type", String)
], WebLoginParamDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password of user', nullable: false }),
    __metadata("design:type", String)
], WebLoginParamDto.prototype, "password", void 0);
class WebUserDto {
}
exports.WebUserDto = WebUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of user', nullable: false }),
    __metadata("design:type", String)
], WebUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Login of user', nullable: false }),
    __metadata("design:type", String)
], WebUserDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of user', nullable: false }),
    __metadata("design:type", String)
], WebUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Flag of user active', nullable: false }),
    __metadata("design:type", Boolean)
], WebUserDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of user creation', nullable: false }),
    __metadata("design:type", Date)
], WebUserDto.prototype, "created_at", void 0);
class WebUsersAllDto {
}
exports.WebUsersAllDto = WebUsersAllDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of users' }),
    __metadata("design:type", Array)
], WebUsersAllDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Count of users' }),
    __metadata("design:type", Number)
], WebUsersAllDto.prototype, "count", void 0);
class FindByIdDto {
}
exports.FindByIdDto = FindByIdDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of user' }),
    __metadata("design:type", String)
], FindByIdDto.prototype, "id", void 0);
class FindByIdsDto {
}
exports.FindByIdsDto = FindByIdsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ids of user' }),
    __metadata("design:type", Array)
], FindByIdsDto.prototype, "ids", void 0);
class FindAllDto {
}
exports.FindAllDto = FindAllDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ids for exclude', required: false }),
    __metadata("design:type", Array)
], FindAllDto.prototype, "excludeIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Login for search', required: false }),
    __metadata("design:type", String)
], FindAllDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of pagination', required: false }),
    __metadata("design:type", Number)
], FindAllDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Limit of rows', required: false }),
    __metadata("design:type", Number)
], FindAllDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Field for sorting', required: false }),
    __metadata("design:type", String)
], FindAllDto.prototype, "sortField", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sotring asc/desc', required: false }),
    __metadata("design:type", String)
], FindAllDto.prototype, "sortAsc", void 0);
