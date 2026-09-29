# Wise Ultima website

Run `npm install`, then `npm run dev`. Production check: `npm run build`.

## Content awaiting Wise Work
- The spec references `/assets`, but no assets directory was supplied. The website uses a geometric logo treatment and interactive sample previews. Replace with approved logo, wordmark, favicon, and five screenshots when provided.
- Set `NEXT_PUBLIC_YOUTUBE_VIDEO_ID` to enable the click-to-load YouTube privacy-enhanced embed. Unset IDs show “Video coming soon”.
- Set `NEXT_PUBLIC_SITE_URL` to the approved production origin for canonical URLs and sitemap entries. No domain is guessed.
- The contact form validates locally and displays a success state. It does not send or store personal information. Connect an approved API/CRM destination before launch.
- Privacy, terms, company/team story, office address, and phone remain pending. Legal and about pages label missing copy explicitly.
- Confirm “Wise Monitory” spelling and marketing approval for product-document percentages, ROI, and the finance “zero downtime” claim.
- Analytics events dispatch `wise:analytics` CustomEvents. No analytics provider is configured.

## Demo
All infrastructure records, predictions, logs, actions, chat responses, and tickets are fictional or illustrative. Current estate totals follow the specification. Filters use the 25-system sample inventory; unfiltered Board counts use the documented estate. Fixes and priority changes remain in memory and reset on page reload. ServiceNow dialogs never send tickets.

## Styling
Tailwind v4 tokens, shadcn/Radix components, GSAP animation, Lenis scrolling, lazy React Three Fiber logo geometry, and Recharts utilization charts. Open Graph rendering uses the inline layout API required by Next ImageResponse; website styling uses Tailwind.
