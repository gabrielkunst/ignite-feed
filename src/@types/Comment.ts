import { IAuthor } from "./Author";

export interface IComment {
	id: number;
	content: string;
	author: IAuthor;
	publishedAt: Date;
	numberOfLikes?: number; // not implemented
}
