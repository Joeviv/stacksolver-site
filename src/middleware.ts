
import { defineMiddleware } from "astro:middleware";
import TurndownService from "turndown";

const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
});

// Configure turndown to ignore scripts, styles, and other non-content elements
turndownService.remove(["script", "style", "iframe", "svg", "button", "nav", "footer", "header"]);

export const onRequest = defineMiddleware(async (context, next) => {
    const acceptHeader = context.request.headers.get("accept");
    console.log("Middleware: Accept header:", acceptHeader);
    const isMarkdownRequested = acceptHeader?.includes("text/markdown");
    console.log("Middleware: Is Markdown requested?", isMarkdownRequested);

    // If Markdown is not requested, just return the normal response
    if (!isMarkdownRequested) {
        return next();
    }

    // If Markdown IS requested, we get the response from the next handler
    const response = await next();

    // We can only transform textual responses (HTML)
    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("text/html")) {
        return response;
    }

    // Clone the response to read its body
    const html = await response.text();

    // Convert HTML to Markdown
    // We might want to target a specific container (e.g., <main>) to avoid converting the whole page shell
    // But for now, let's try to convert the whole body and see how Turndown handles it with the remove filter
    let markdown = turndownService.turndown(html);

    // Add a header to indicate this is agent-optimized content
    markdown = `---
title: Agent Optimized Content
source: ${context.url.href}
generated_at: ${new Date().toISOString()}
---

${markdown}`;

    return new Response(markdown, {
        status: 200,
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "X-Agent-Optimized": "true",
            "Vary": "Accept", // Important for caching!
        },
    });
});
