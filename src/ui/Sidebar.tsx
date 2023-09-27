import { PencilSimpleLine } from "@phosphor-icons/react";
import { Button } from "./Button";
import { UserAvatar } from "./UserAvatar";

export function Sidebar() {
	return (
		<aside className="rounded-lg overflow-hidden bg-clr-gray-600">
			<img
				src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
				className="max-h-[4.5rem] w-full object-cover"
			/>
			<div className="flex flex-col items-center pb-6">
				<UserAvatar
					src="https://github.com/gabrielkunst.png"
					className="-m-7 mb-4"
					variation="outlined"
				/>
				<strong className="text-clr-gray-100">Gabriel Kunst</strong>
				<span className="text-sm text-clr-gray-300">Web Developer</span>
			</div>

			<footer className="px-8 pb-8 pt-6 border-t border-clr-gray-500">
				<Button
					variation="outlined"
					text="Editar seu perfil"
					icon={<PencilSimpleLine size={20} />}
				/>
			</footer>
		</aside>
	);
}
