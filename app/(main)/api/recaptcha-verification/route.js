export async function POST(req) {
    try {
        const { token } = await req.json();

        const secretKey = process.env.SECRET_KEY;

        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
            { method: "POST" }
        );

        const data = await response.json();

        if (data.success) {
            return Response.json({ success: true });
        } else {
            return Response.json({ success: false, errors: data["error-codes"] || [] });
        }
    } catch (err) {
        console.error("Captcha verification failed:", err);
        return Response.json({ success: false, error: "Server error" }, { status: 500 });
    }
}
