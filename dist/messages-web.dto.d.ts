export declare class RoomWebDto {
    id?: string;
    type: string;
    user_ids: string[];
    created_at?: Date;
}
export declare class MessageWebDto {
    id?: string;
    uuid: string;
    message: string;
    room_id: string;
    user_id: string;
    created_at?: Date;
}
export declare class PrivateRoomQueryDto {
    userIds: string[];
}
export declare class UserRoomQueryDto {
    id: string;
    user_id: string;
}
export declare class RoomDataDto {
    room: RoomWebDto;
    messages: MessageWebDto[];
}
