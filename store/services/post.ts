import {AxiosInstance} from "axios";
import {HttpInstanceFactory} from "@/utils/HttpInstanceFactory";

export type IPostResponse = IPost[];

export type IPostForm = Omit<IPost, "id">;

export interface IPost {
    id: number;
    titleRu: string;
    titleEng: string;
    imageTitle: string;
    textRu: string;
    textEng: string;
    category: string;
    images: string[];
}

export class PostApi {
    private static instance: PostApi | null = null;
    private httpInstance: AxiosInstance;

    private constructor() {
        this.httpInstance = HttpInstanceFactory.getBaseInstance();
    }

    public static getInstance(): PostApi {
        if (this.instance) return this.instance;
        this.instance = new PostApi();
        return this.instance;
    }

    async getPosts(category: string): Promise<IPostResponse> {
        return (await this.httpInstance.get<IPostResponse>(`/posts/${category}`)).data;
    }

    async createPost(data: IPostForm): Promise<IPost> {
        return (await this.httpInstance.post<IPost>('/posts/new', data)).data
    }

    async updatePost(data: IPost): Promise<IPost> {
        return (await this.httpInstance.patch<IPost>('/posts/info')).data;
    }

    async deletePost(id: number) {
        return (await this.httpInstance.delete(`/posts/${id}`)).data;
    }
};
