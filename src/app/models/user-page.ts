import { User } from "./user";

export interface UserPage {

    loading: boolean;
    users: User[];
    formStatus: string;

}