import { IPost } from "@/@types/Post";
import { useEffect, useState } from "react";

const POSTS: IPost[] = [
	{
		id: Math.floor(Math.random() * 9999),
		author: {
			avatarUrl: "https://github.com/gabrielkunst.png",
			name: "Gabriel",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala pessoal 👋" },
			{
				type: "paragraph",
				content:
					"Este é um post de exemplo para demonstrar a funcionalidade de posts",
			},
		],
		publishedAt: new Date("2023-09-26 08:13:30"),
		comments: [],
	},
	{
		id: Math.floor(Math.random() * 9999),
		author: {
			avatarUrl: "https://github.com/gabrielkunst.png",
			name: "Gabriel",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala pessoal 👋" },
			{
				type: "paragraph",
				content:
					"Este é um post de exemplo para demonstrar a funcionalidade de posts",
			},
		],
		publishedAt: new Date("2023-09-26 08:13:30"),
		comments: [],
	},
];

export function usePosts() {
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		const localStoragePosts = localStorage.getItem("IgniteFeedPosts");

		if (localStoragePosts) {
			const parsedPosts: IPost[] = JSON.parse(localStoragePosts);
			const parsedPostsWithDate = parsedPosts.map((post: IPost) => ({
				...post,
				publishedAt: new Date(post.publishedAt),
				comments: post.comments.map((comment) => ({
					...comment,
					publishedAt: new Date(comment.publishedAt),
				})),
			}));

			setPosts(parsedPostsWithDate);
			return;
		}

		localStorage.setItem("IgniteFeedPosts", JSON.stringify(POSTS));
		setPosts(POSTS);
	}, []);

	return posts;
}
