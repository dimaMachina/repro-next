# Dynamic `resourceQuery` isn't passed in Webpack loader with Turbopack enabled

1. Run `pnpm dev --turbo`
2. See in console

```text
[test-loader.js] this.resourceQuery [ '?static=567&dynamic=' ]
```

Expected to see:

```text
[test-loader.js] this.resourceQuery [ '?static=567&dynamic=123' ]
```
