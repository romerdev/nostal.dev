import PageHero from "../components/PageHero"

export default function Home() {
  return (
    <main>
      <PageHero title="Welcome">
        <p className="text-4xl md:text-6xl tracking-tighter font-medium md:max-w-2xl md:mr-8">I'm glad you're here!</p>
      </PageHero>
    </main>
  )
}
