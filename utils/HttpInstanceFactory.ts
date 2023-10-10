import axios, {AxiosInstance} from "axios";

const backend_url = "95.163.235.228:5000";

export class HttpInstanceFactory {
    private static baseInstance: AxiosInstance | null = null;
    public static getBaseInstance(): AxiosInstance {
        if (this.baseInstance) return this.baseInstance;
        this.baseInstance = axios.create({
            baseURL: backend_url,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return this.baseInstance;
    }
}
