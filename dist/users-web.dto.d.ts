export declare class WebRegistrationParamDto {
    login: string;
    email: string;
    password: string;
    passwordRepeat: string;
}
export declare class WebLoginParamDto {
    login: string;
    password: string;
}
export declare class WebUserDto {
    id: string;
    login: string;
    email: string;
    active: boolean;
    created_at: Date;
}
export declare class WebUsersAllDto {
    users: WebUserDto[];
    count: number;
}
export declare class FindByIdDto {
    id: string;
}
export declare class FindByIdsDto {
    ids: string[];
}
export declare class FindAllDto {
    excludeIds?: string[];
    login?: string;
    skip?: number;
    limit?: number;
    sortField?: string;
    sortAsc?: string;
}
