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
exports.RoomDataDto = exports.UserRoomQueryDto = exports.PrivateRoomQueryDto = exports.MessageWebDto = exports.RoomWebDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RoomWebDto {
}
exports.RoomWebDto = RoomWebDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of room', required: true }),
    __metadata("design:type", String)
], RoomWebDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of room', required: true }),
    __metadata("design:type", String)
], RoomWebDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of user ids', required: true }),
    __metadata("design:type", Array)
], RoomWebDto.prototype, "user_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of creation', required: false }),
    __metadata("design:type", Date)
], RoomWebDto.prototype, "created_at", void 0);
class MessageWebDto {
}
exports.MessageWebDto = MessageWebDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of message', required: false }),
    __metadata("design:type", String)
], MessageWebDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'uuid of message', required: true }),
    __metadata("design:type", String)
], MessageWebDto.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Text of message', required: true }),
    __metadata("design:type", String)
], MessageWebDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of room', required: true }),
    __metadata("design:type", String)
], MessageWebDto.prototype, "room_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of user', required: true }),
    __metadata("design:type", String)
], MessageWebDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of creation', required: false }),
    __metadata("design:type", Date)
], MessageWebDto.prototype, "created_at", void 0);
class PrivateRoomQueryDto {
}
exports.PrivateRoomQueryDto = PrivateRoomQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ids of user' }),
    __metadata("design:type", Array)
], PrivateRoomQueryDto.prototype, "userIds", void 0);
class UserRoomQueryDto {
}
exports.UserRoomQueryDto = UserRoomQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of chat room' }),
    __metadata("design:type", String)
], UserRoomQueryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id of user' }),
    __metadata("design:type", String)
], UserRoomQueryDto.prototype, "user_id", void 0);
class RoomDataDto {
}
exports.RoomDataDto = RoomDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message room' }),
    __metadata("design:type", RoomWebDto)
], RoomDataDto.prototype, "room", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Messages' }),
    __metadata("design:type", Array)
], RoomDataDto.prototype, "messages", void 0);
