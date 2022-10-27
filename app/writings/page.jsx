import PageHero from "../../components/PageHero"

export default function Writings() {
  return (
    <main>
      <style global="true">{`
        :root {
          --primary: rgb(230, 220, 201);
        }
      `}</style>
      <PageHero title="Writings">
          <p className="text-4xl md:text-6xl tracking-tighter font-medium md:max-w-2xl md:mr-8">There are no articles yet. Check back soon!</p>
      </PageHero>
    </main>
  )
}