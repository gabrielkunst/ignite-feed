import { IAuthor } from "./Author";

interface IPostContent {
	type: string;
	content: string;
}

export interface IPost {
	id: number;
	author: IAuthor;
	content: IPostContent[];
	publishedAt: Date;
}
