import type { APIRoute } from 'astro';

// Tell Astro not to prerender this route
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    // Read the body as JSON instead of FormData
    let data;
    try {
        data = await request.json();
    } catch (e) {
        return new Response(JSON.stringify({ message: 'Invalid JSON body' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const email = data?.email; // Access email from the parsed JSON

    // Basic validation
    if (!email || typeof email !== 'string') {
        return new Response(JSON.stringify({ message: 'Email is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const apiKey = import.meta.env.CONVERTKIT_API_KEY;
    const formId = import.meta.env.CONVERTKIT_FORM_ID;
    const convertKitApiUrl = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

    if (!apiKey || !formId) {
        console.error("ConvertKit API Key or Form ID is missing in environment variables.");
        return new Response(JSON.stringify({ message: 'Server configuration error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const response = await fetch(convertKitApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                email: email,
                // You can add tags here if needed, e.g.:
                // tags: [12345, 67890]
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // ConvertKit API might return errors in `error` or `message` fields
            const errorMessage = data.error?.message || data.message || 'Failed to subscribe';
            console.error("ConvertKit API Error:", data);
            return new Response(JSON.stringify({ message: `Subscription failed: ${errorMessage}` }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Successfully subscribed (or user might already be subscribed, CK handles this)
        return new Response(JSON.stringify({ message: "Subscription successful! You're on the list." }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error subscribing to ConvertKit:', error);
        return new Response(JSON.stringify({ message: 'An unexpected error occurred' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}; 