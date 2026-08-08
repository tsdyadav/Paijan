# Content and image management

The website is data-driven. Content editors should change JSON in `src/data`; React components should not need edits for normal content updates.

## Update an image

1. Upload the image to the appropriate folder under `public/images/`.
2. Update the matching JSON entry with its root-relative path, such as `/images/machines/new-machine.webp`.
3. Include clear `alt` text when using an object image entry.

```json
{
  "src": "/images/machines/new-machine.webp",
  "alt": "Automatic cutting machine at Paijan India",
  "width": 1200,
  "height": 900
}
```

Image fields may also remain strings for backwards compatibility. Every image rendered through `ResponsiveImage` falls back to `/images/placeholders/industrial-placeholder.svg` if it is missing or unavailable.

## Data ownership

| Content | JSON file |
| --- | --- |
| Company identity, contacts, logo and company images | `company.json` |
| Hero copy, images and buttons | `hero.json` |
| Categories | `categories.json` |
| Machines and machine galleries | `machines.json` |
| Gallery | `gallery.json` |
| Statistics and testimonials | `stats.json`, `testimonials.json` |
| Footer links and newsletter copy | `footer.json` |

Keep image paths root-relative (`/images/...`), use `.webp` where possible, and preserve stable `id` values. Run `npm.cmd run build` before publishing content changes.
