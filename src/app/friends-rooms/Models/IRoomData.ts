import { IRoomUser } from "./IRoomUser";

export interface IRoomData{
    roomId: string
    name: string,
    description: string,
    users: IRoomUser[]
}