import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactElement;
	text: string;
	variation: "outlined" | "filled";
}

const Variations = {
	outlined:
		"border border-clr-green-100 text-clr-green-200 bg-transparent hover:bg-clr-green-200 hover:text-clr-white ",
	filled: "bg-clr-green-200 text-clr-white hover:bg-clr-green-100 disabled:bg-clr-green-200 disabled:cursor-not-allowed disabled:opacity-70",
};

export function Button({
	text,
	icon,
	variation,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={twMerge(
				"flex items-center justify-center px-6 pt-4 pb-3.5 gap-2 rounded-lg text-base transition-colors duration-100 font-bold",
				className,
				Variations[variation]
			)}
		>
			{icon}
			{text}
		</button>
	);
}
