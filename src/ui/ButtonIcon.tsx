import { twMerge } from "tailwind-merge";

interface ButtonIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactElement;
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
	return (
		<button
			{...props}
			className={twMerge("transition-all duration-100", className)}
		>
			{icon}
		</button>
	);
}
