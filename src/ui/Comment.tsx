import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { UserAvatar } from "./UserAvatar";
import { ButtonIcon } from "./ButtonIcon";
import { IComment } from "@/@types/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { LocalStorageController } from "@/utils/LocalStorageController";

interface CommentProps {
	postId: number;
	comment: IComment;
	onDeleteComment: (commentId: number) => void;
}

export function Comment({
	postId,
	comment: { author, content, id: commentId, publishedAt, numberOfLikes },
	onDeleteComment,
}: CommentProps) {
	const [likeCount, setLikeCount] = useState<number>(numberOfLikes);

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

	function handleLikeComment() {
		setLikeCount((prevLikeCount) => {
			LocalStorageController.UpdateCommentLikeCount(
				postId,
				commentId,
				prevLikeCount + 1
			);
			return prevLikeCount + 1;
		});
	}

	function handleDeleteComment() {
		onDeleteComment(commentId);
	}

	return (
		<article className="flex gap-4">
			<UserAvatar src="https://github.com/gabrielkunst.png" />
			<div className="flex-1">
				<div className="bg-clr-gray-550 p-4 rounded-lg mb-4">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong>{author.name}</strong>
							<time
								className="text-sm text-clr-gray-300"
								title={publishedDateFormatted}
								dateTime={publishedAt.toISOString()}
							>
								{publishedDateRelativeToNow}
							</time>
						</div>
						<ButtonIcon
							onClick={handleDeleteComment}
							icon={<Trash size={24} />}
							title="Deletar comentário"
							className="hover:text-clr-red-200"
						/>
					</header>
					<main className="pt-4 pb-2">
						<p>{content}</p>
					</main>
				</div>
				<footer>
					<button
						className="flex items-center hover:text-clr-green-100 transition-colors duration-100 focus:shadow-none"
						onClick={handleLikeComment}
					>
						<ThumbsUp size={20} className="mr-2" />
						Aplaudir
						<span className="before:content-['\2022'] before:px-1">
							{likeCount}
						</span>
					</button>
				</footer>
			</div>
		</article>
	);
}
