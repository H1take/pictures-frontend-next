import {AxiosInstance} from "axios";
import {HttpInstanceFactory} from "@/utils/HttpInstanceFactory";

export type IReviewList = IReview[];

export interface IReview {
    id: number;
    authorName: string;
    text: string;
    images: string[];
}

export interface IReviewForm {
    authorName: string;
    text: string;
    images: string[];
}

export class ReviewApi {
    private static instance: ReviewApi | null = null;
    private httpInstance: AxiosInstance;

    private constructor() {
        this.httpInstance = HttpInstanceFactory.getBaseInstance();
    }

    public static getInstance(): ReviewApi {
        if (this.instance) return this.instance;
        this.instance = new ReviewApi();
        return this.instance;
    }

    async getReviews(): Promise<IReviewList> {
        return (await this.httpInstance.get<IReviewList>(`/reviews/all`)).data;
    }

    async createReview(data: IReviewForm): Promise<IReview> {
        return (await this.httpInstance.post<IReview>('/reviews/new', data)).data
    }
};