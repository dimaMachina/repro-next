export default async function Home() {
  const { default: Component } = await import((`./test.mdx?test=hi&dynamic=${Math.random()}`))
  return (
    <Component />
  )
}
