import { Post } from "./Post";

export function Timeline() {
	return (
		<div className="flex flex-col gap-6">
			<Post />
			<Post />
			<Post />
		</div>
	);
}
