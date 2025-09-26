
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		var uri = request.url.replace(/^https:\/\/.*?\//gi, "/");
		console.log(uri);

		if (request.method === "GET") {
			if (uri === "/users") {
				// handle the request and write the logic here
			}
			return Response.json({
				msg : "You sent a GET Request"
			})
		}else{
			return Response.json({
				msg: "No GET request sent"
			})
		}
	},
} 
