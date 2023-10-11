import axios, {AxiosInstance} from "axios";
import {HttpInstanceFactory} from "@/utils/HttpInstanceFactory";

export class FileApi {
    private static instance: FileApi | null = null;
    private httpInstance: AxiosInstance;

    private constructor() {
        this.httpInstance = HttpInstanceFactory.getBaseInstance();
    }

    public static getInstance(): FileApi {
        if (this.instance) return this.instance;
        this.instance = new FileApi();
        return this.instance;
    }

    async uploadFile(file: any, typeImg: string) {
        const formData = new FormData();
        formData.append('file', file)
        return (await axios.post(`http://svetlanamuchnova.art:5000/files/upload/${typeImg}`, formData)).data;
    }
}
