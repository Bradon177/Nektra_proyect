export async function POST() {
	const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
	
	const cookie = `token=; Path=/; HttpOnly; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict${secureFlag}`;

	return new Response(JSON.stringify({ message: "Logout exitoso" }), {
		status: 200,
		headers: {
			"Set-Cookie": cookie,
			"Content-Type": "application/json"
		}
	});
}
