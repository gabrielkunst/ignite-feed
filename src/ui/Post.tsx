import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { IPost } from "@/@types/Post";
import { Button } from "./Button";
import { Comment } from "./Comment";
import { UserAvatar } from "./UserAvatar";
import { FormEvent, useState } from "react";
import { IComment } from "@/@types/Comment";

export function Post({ author, content, publishedAt }: IPost) {
	const [comments, setComments] = useState<IComment[]>([]);
	const [newCommentText, setNewCommentText] = useState<string>("");

	const publishedDateFormatted = format(
		publishedAt,
		"dd 'de' MMMM 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleNewCommentChange(
		event: React.ChangeEvent<HTMLTextAreaElement>
	) {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	function handleCreateComment(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setComments((prevComments) => [
			...prevComments,
			{
				id: Math.floor(Math.random() * 999),
				content: newCommentText,
				publishedAt: new Date(),
				author: {
					avatarUrl: "https://github.com/gabrielkunst.png",
					name: "Gabriel Kunst",
					role: "Web Developer",
				},
			},
		]);
		setNewCommentText("");
	}

	function handleDeleteComment(commentId: number) {
		const commentWithoutDeletedOne = comments.filter(
			(comment) => comment.id !== commentId
		);
		setComments(commentWithoutDeletedOne);
	}

	function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
		(event.target as HTMLTextAreaElement).setCustomValidity(
			"Esse campo é obrigatório."
		);
	}

	const isNewCommentEmpty = newCommentText.trim().length === 0;

	return (
		<article className="p-10 bg-clr-gray-600 rounded-lg  ">
			<div className="flex items-center justify-between gap-4">
				<UserAvatar src={author.avatarUrl} variation="outlined" />
				<div className="flex-1 flex flex-col leading-default">
					<strong className="text-clr-gray-100">{author.name}</strong>
					<span className="text-clr-gray-300">{author.role}</span>
				</div>
				<time
					className="text-sm text-clr-gray-300"
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</div>
			<div className="leading-default py-6 flex flex-col gap-2">
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={line.content}>
								<a
									href="#"
									className="text-clr-green-200 hover:text-clr-green-100 transition-colors duration-100"
								>
									{line.content}
								</a>
							</p>
						);
					}
				})}
			</div>
			<form
				onSubmit={handleCreateComment}
				className="border-t pt-6 border-clr-gray-500 leading-default group"
			>
				<strong className="block text-clr-gray-100">
					Deixe seu feedback
				</strong>
				<textarea
					value={newCommentText}
					onChange={handleNewCommentChange}
					name="comment"
					className="my-4 w-full rounded-lg border-none p-4 bg-clr-gray-700 resize-none placeholder:text-clr-gray-400 text-clr-gray-200"
					placeholder="Escreva um comentário..."
					required
					onInvalid={handleNewCommentInvalid}
				/>
				<footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
					<Button
						disabled={isNewCommentEmpty}
						text="Publicar"
						variation="filled"
					/>
				</footer>
			</form>
			{comments.length > 0 && (
				<div className="flex flex-col gap-6 mt-6">
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							comment={comment}
							onDeleteComment={handleDeleteComment}
						/>
					))}
				</div>
			)}
		</article>
	);
}
