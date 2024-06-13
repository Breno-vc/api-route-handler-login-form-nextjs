export async function GET() {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${baseUrl}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "dog",
			password: "dog",
		}),
	});
	if (!response.ok) {
		return Response.json({ error: "Dados incorretos" }, { status: 401 });
	}
	return Response.json({ status: "ok" });
}
