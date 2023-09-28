import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { UserAvatar } from "./UserAvatar";
import { ButtonIcon } from "./ButtonIcon";

export function Comment() {
	return (
		<article className="flex gap-4">
			<UserAvatar src="https://github.com/gabrielkunst.png" />
			<div className="flex-1">
				<div className="bg-clr-gray-550 p-4 rounded-lg mb-4">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<span>
								<strong>Gabriel Kunst </strong> (você)
							</span>
							<time
								className="text-sm text-clr-gray-300"
								title="11 de Maio às 08:13h"
								dateTime="2022-05-11 08:13:30"
							>
								Públicado há 2h
							</time>
						</div>
						<ButtonIcon
							icon={<Trash size={24} />}
							title="Deletar comentário"
							className="hover:text-clr-red-200"
						/>
					</header>
					<main className="pt-4 pb-2">
						<p>Muito bom Devon, parabéns!! 👏👏</p>
					</main>
				</div>
				<footer>
					<button className="flex items-center hover:text-clr-green-100 transition-colors duration-100">
						<ThumbsUp size={20} className="mr-2" />
						Aplaudir
						<span className="before:content-['\2022'] before:px-1">
							33
						</span>
					</button>
				</footer>
			</div>
		</article>
	);
}
