import PageHero from "../../components/PageHero"

export default function Work() {
  return (
    <main>
      <style global="true">{`
        :root {
          --primary: rgb(199, 187, 202);
        }
      `}</style>
      <PageHero title="Work">
          <p className="text-4xl md:text-6xl tracking-tighter font-medium md:max-w-2xl md:mr-8">I haven't added my projects yet. Check back soon!</p>
      </PageHero>
    </main>
  )
}