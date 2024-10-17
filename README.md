# Getting `Error: Cannot find module './test.mdx?static=567&dynamic=123'` for dynamic import with interpolated `resourceQuery`

1. Run `pnpm dev`
2. See in console

```text
 ⨯ Error: Cannot find module './test.mdx?static=567&dynamic=123'
    at /Users/dmytro/Desktop/repros/repro-next/.next/server/app/page.js:25:11
    at async Home (./app/page.jsx:11:36)
```

Expected to see no errors
