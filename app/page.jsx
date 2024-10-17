const STATIC = 567
const DYNAMIC = String(123)

export default async function Home() {
  const { default: Component } = await import((`./test.mdx?static=${STATIC}&dynamic=${DYNAMIC}`))
  return (
    <Component />
  )
}
