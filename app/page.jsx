const foo = String(1)

export default async function Home() {
  const { default: Component } = await import((`./test.mdx?test=hi&dynamic=${foo}`))
  return (
    <Component />
  )
}
