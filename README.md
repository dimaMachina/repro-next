# Dynamic `resourceQuery` isn't passed in Webpack loader with Turbopack enabled

1. pnpm dev --turbo
2. see in console

```
[test-loader.js] this.resourceQuery [ '?static=567&dynamic=' ]
```

instead of

```
[test-loader.js] this.resourceQuery [ '?static=567&dynamic=123' ]
```
