import { twMerge } from "tailwind-merge";

interface ButtonIconProps {
	icon: React.ReactElement;
	className?: string;
	title: string;
}

export function ButtonIcon({ icon, className, title }: ButtonIconProps) {
	return (
		<button
			className={twMerge("transition-all duration-100", className)}
			title={title}
		>
			{icon}
		</button>
	);
}
