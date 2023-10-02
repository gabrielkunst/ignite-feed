import { IComment } from "@/@types/Comment";
import { IPost } from "@/@types/Post";

function CreateComment(postId: number, comment: IComment) {
	if (!postId || !comment) throw new Error("PostId and comment are required");

	const localStoragePosts = localStorage.getItem("IgniteFeedPosts");

	if (!localStoragePosts) throw new Error("No posts found");

	const parsedPosts: IPost[] = JSON.parse(localStoragePosts);
	const post = parsedPosts.find((post) => post.id === postId);

	post?.comments.push(comment);
	localStorage.setItem("IgniteFeedPosts", JSON.stringify(parsedPosts));
}

function DeleteComment(postId: number, commentId: number) {
	if (!postId || !commentId)
		throw new Error("PostId and commentId are required");

	const localStoragePosts = localStorage.getItem("IgniteFeedPosts");

	if (!localStoragePosts) throw new Error("No posts found");

	const parsedPosts: IPost[] = JSON.parse(localStoragePosts);
	const post = parsedPosts.find((post) => post.id === postId);

	if (!post) throw new Error("Post not found");
	const newComments = post.comments.filter(
		(comment) => comment.id !== commentId
	);
	post.comments = newComments;
	localStorage.setItem("IgniteFeedPosts", JSON.stringify(parsedPosts));
}

function UpdateCommentLikeCount(
	postId: number,
	commentId: number,
	numberOfLikes: number
) {
	if (!postId || !commentId || !numberOfLikes)
		throw new Error("PostId, commentId and numberOfLikes are required");

	const localStoragePosts = localStorage.getItem("IgniteFeedPosts");

	if (!localStoragePosts) throw new Error("No posts found");

	const parsedPosts: IPost[] = JSON.parse(localStoragePosts);
	const post = parsedPosts.find((post) => post.id === postId);
	const comment = post?.comments.find((comment) => comment.id === commentId);

	if (!comment) throw new Error("Comment not found");

	comment.numberOfLikes = numberOfLikes;
	localStorage.setItem("IgniteFeedPosts", JSON.stringify(parsedPosts));
}

export const LocalStorageController = {
	CreateComment,
	DeleteComment,
	UpdateCommentLikeCount,
};
