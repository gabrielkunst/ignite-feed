import { IPost } from "@/@types/Post";
import { Post } from "./Post";
import { usePosts } from "@/hooks/usePosts";

export function Timeline() {
	const postList = usePosts();

	return (
		<div className="flex flex-col gap-6">
			{postList.map((post: IPost) => (
				<Post
					comments={post.comments}
					key={post.id}
					author={post.author}
					content={post.content}
					publishedAt={post.publishedAt}
					id={post.id}
				/>
			))}
		</div>
	);
}
