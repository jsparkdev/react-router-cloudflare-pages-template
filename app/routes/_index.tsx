import { Github } from "lucide-react";
import { Button } from "~/components/ui/button";
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
		<main className="flex flex-col justify-center h-screen gap-4">
			<h1 className="font-bold text-4xl text-center text-balance">{title}</h1>
			<p className="text-center text-balance">{description}</p>
			<div className="flex justify-center gap-4 flex-wrap">
				<Button asChild className="w-[200px]">
					<a
						href="https://github.com/new?template_name=react-router-cloudflare-pages-template&template_owner=jsparkdev"
						target="_blank"
						rel="noreferrer"
						title="Use this template"
					>
						<Github />
						Use this template
					</a>
				</Button>
				<Button asChild className="w-[200px]">
					<a
						href="https://github.com/jsparkdev/react-router-cloudflare-pages-template"
						target="_blank"
						rel="noreferrer"
						title="Github Repository"
					>
						<Github />
						Github Repository
					</a>
				</Button>
			</div>
		</main>
	);
}
