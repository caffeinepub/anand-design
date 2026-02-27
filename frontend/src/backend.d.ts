import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Notification {
    id: bigint;
    title: string;
    description: string;
    datePosted: Time;
    category: Category;
}
export enum Category {
    notice = "notice",
    govtJob = "govtJob",
    update = "update"
}
export interface backendInterface {
    addNotification(title: string, description: string, category: Category): Promise<bigint>;
    deleteNotification(id: bigint): Promise<void>;
    getAllNotifications(): Promise<Array<Notification>>;
    getNotification(id: bigint): Promise<Notification | null>;
}
