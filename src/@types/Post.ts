import { IAuthor } from "./Author";
import { IComment } from "./Comment";

interface IPostContent {
	type: string;
	content: string;
}

export interface IPost {
	id: number;
	author: IAuthor;
	content: IPostContent[];
	publishedAt: Date;
	comments: IComment[];
}
