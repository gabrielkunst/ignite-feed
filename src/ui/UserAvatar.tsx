import { twMerge } from "tailwind-merge";

interface UserAvatarProps {
	src: string;
	className?: string;
	variation?: "outlined";
}

const Variations = {
	outlined:
		"border-4 border-clr-gray-600 outline outline-2 outline-clr-green-100",
};

export function UserAvatar({ src, className, variation }: UserAvatarProps) {
	return (
		<img
			src={src}
			className={twMerge(
				"w-16 h-16 object-cover rounded-md",
				className,
				`${variation && Variations[variation]}`
			)}
		/>
	);
}
