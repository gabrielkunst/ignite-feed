import { PencilSimpleLine } from "@phosphor-icons/react";

export function Button() {
	return (
		<button className="flex items-center justify-center px-6 pt-4 pb-3.5 gap-2 rounded-lg border border-clr-green-100 text-clr-green-200 font-bold text-base bg-transparent hover:bg-clr-green-200 hover:text-clr-white transition-colors duration-100">
			<PencilSimpleLine size={20} />
			Editar seu perfil
		</button>
	);
}
