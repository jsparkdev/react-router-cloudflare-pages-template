import type { Route } from "./+types/_index";

export async function loader({ context }: Route.LoaderArgs) {
	const { title, description } = context.cloudflare.env;
	return { title, description };
}

export function meta({ data }: Route.MetaArgs) {
	const { title, description } = data;
	return [{ title }, { name: "description", content: description }];
}

export default function Index({ loaderData }: Route.ComponentProps) {
	const { title, description } = loaderData;
	return (
		<main className="w-[600px] mx-auto flex flex-col justify-center h-screen">
			<h1 className="font-bold text-4xl text-center">{title}</h1>
			<p className="text-center">{description}</p>
		</main>
	);
}
