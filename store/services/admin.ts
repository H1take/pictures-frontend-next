import {AxiosInstance} from "axios";
import {HttpInstanceFactory} from "@/utils/HttpInstanceFactory";

export interface IAdmin {
    login: string;
    name: string;
    password: string;
    about: string;
    photo: string;
}

export interface IAdminLogin {
    login: string;
    password: string;
}

// export interface IAdminUpdate {
//     login: string;
//     about: string;
//     photo: string;
// }

export class AdminApi {
    private static instance: AdminApi | null = null;
    private httpInstance: AxiosInstance;

    private constructor() {
        this.httpInstance = HttpInstanceFactory.getBaseInstance();
    }

    public static getInstance(): AdminApi {
        if (this.instance) return this.instance;
        this.instance = new AdminApi();
        return this.instance;
    }

    public async login(data: IAdminLogin): Promise<IAdmin> {
        return (await this.httpInstance.post<IAdmin>('/admin/login', data)).data;
    }

    public async updateAdmin(dataAdmin: any): Promise<IAdmin> {
        return (await this.httpInstance.patch<IAdmin>('/admin/info', dataAdmin)).data;
    }

    public async getAdminInfo(): Promise<IAdmin> {
        return (await this.httpInstance.get('/admin/info')).data;
    }
};