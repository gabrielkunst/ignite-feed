import { Button } from "./Button";
import { Comment } from "./Comment";
import { UserAvatar } from "./UserAvatar";

export function Post() {
	return (
		<article className="p-10 bg-clr-gray-600 rounded-lg  ">
			<div className="flex items-center justify-between gap-4">
				<UserAvatar
					src="https://github.com/gabrielkunst.png"
					variation="outlined"
				/>
				<div className="flex-1 flex flex-col leading-default">
					<strong className="text-clr-gray-100">Gabriel Kunst</strong>
					<span className="text-clr-gray-300">Web Developer</span>
				</div>
				<time
					className="text-sm text-clr-gray-300"
					title="11 de Maio às 08:13h"
					dateTime="2022-05-11 08:13:30"
				>
					Públicado há 2h
				</time>
			</div>
			<div className="leading-default py-6 flex flex-col gap-2">
				<p>Fala pessoal 👋</p>
				<p>
					Finalmente finalizei meu novo site/portfólio. Foi um baita
					desafio criar todo o design e codar na unha, mas consegui 💪🏻
				</p>
				<p>
					Acesse e deixe seu feedback -{" "}
					<a
						href=""
						className="text-clr-green-200 hover:text-clr-green-100 transition-colors duration-100"
					>
						devonlane.design
					</a>
				</p>
				<p>
					<a
						href=""
						className="text-clr-green-200 hover:text-clr-green-100 transition-colors duration-100"
					>
						#uiux
					</a>{" "}
					<a
						href=""
						className="text-clr-green-200 hover:text-clr-green-100 transition-colors duration-100"
					>
						#userexperience
					</a>
				</p>
			</div>
			<div className="border-t pt-6 border-clr-gray-500 leading-default group">
				<strong className="block text-clr-gray-100">
					Deixe seu feedback
				</strong>
				<textarea
					className="my-4 w-full rounded-lg border-none p-4 bg-clr-gray-700 resize-none placeholder:text-clr-gray-400 text-clr-gray-200"
					placeholder="Escreva um comentário..."
				/>
				<footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
					<Button text="Publicar" variation="filled" />
				</footer>
			</div>
			<div className="flex flex-col gap-6">
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
