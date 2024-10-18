# Missing `src.blurDataURL` for default metadata images while importing `apple-icon.png`/`icon.png`/`opengraph-image.png`/`twitter-image.png` with Turbopack enabled

1. Run `pnpm dev`
2. See errors:

```text
Error: Image with src "/_next/static/media/opengraph-image.41136f47.png" has "placeholder='blur'" property but is missing the "blurDataURL" property.
Error: Image with src "/_next/static/media/icon.92de3cc2.png" has "placeholder='blur'" property but is missing the "blurDataURL" property.
Error: Image with src "/_next/static/media/opengraph-image.41136f47.png" has "placeholder='blur'" property but is missing the "blurDataURL" property.
Error: Image with src "/_next/static/media/twitter-image.92de3cc2.png" has "placeholder='blur'" property but is missing the "blurDataURL" property.
```

Without `--turbo` I don't have any error.
