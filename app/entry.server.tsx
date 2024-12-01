import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";

const ABORT_DELAY = 5000;

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	reactRouterContext: EntryContext,
	_loadContext: AppLoadContext,
) {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), ABORT_DELAY);

	const body = await renderToReadableStream(
		<ServerRouter
			context={reactRouterContext}
			url={request.url}
			abortDelay={ABORT_DELAY}
		/>,
		{
			signal: controller.signal,
			onError(error: unknown) {
				if (!controller.signal.aborted) {
					console.error(error);
				}
				// biome-ignore lint:
				responseStatusCode = 500;
			},
		},
	);

	body.allReady.then(() => clearTimeout(timeoutId));

	if (isbot(request.headers.get("user-agent") || "")) {
		await body.allReady;
	}

	responseHeaders.set("Content-Type", "text/html");
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
