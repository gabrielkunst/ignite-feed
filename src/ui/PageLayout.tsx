interface PageLauoutProps {
	children: React.ReactNode;
}

export function PageLayout({ children }: PageLauoutProps) {
	return (
		<div className="max-w-[70rem] grid grid-cols-timeline gap-8 mx-auto m-8 px-4 items-start">
			{children}
		</div>
	);
}
