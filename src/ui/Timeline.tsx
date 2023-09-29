import { IPost } from "@/@types/Post";
import { Post } from "./Post";

const POSTS: IPost[] = [
	{
		id: Math.floor(Math.random() * 9999),
		author: {
			avatarUrl: "https://github.com/gabrielkunst.png",
			name: "Gabriel Kunst",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala pessoal 👋" },
			{
				type: "paragraph",
				content:
					"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
			},
		],
		publishedAt: new Date("2023-09-26 08:13:30"),
	},
	{
		id: Math.floor(Math.random() * 9999),
		author: {
			avatarUrl: "https://github.com/gabrielkunst.png",
			name: "Gabriel Kunst",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala pessoal 👋" },
			{
				type: "paragraph",
				content:
					"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
			},
		],
		publishedAt: new Date("2023-09-26 08:13:30"),
	},
	{
		id: Math.floor(Math.random() * 9999),
		author: {
			avatarUrl: "https://github.com/gabrielkunst.png",
			name: "Gabriel Kunst",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala pessoal 👋" },
			{
				type: "paragraph",
				content:
					"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
			},
		],
		publishedAt: new Date("2023-09-26 08:13:30"),
	},
];

export function Timeline() {
	return (
		<div className="flex flex-col gap-6">
			{POSTS.map((post) => (
				<Post
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
