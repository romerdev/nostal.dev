import PageHero from "../../components/PageHero"

export default function Contact() {
  return (
    <main>
      <style global="true">{`
        :root {
          --primary: rgb(95, 175, 104);
        }
      `}</style>
      <PageHero title="Contact">
          <p className="text-4xl md:text-6xl tracking-tighter font-medium md:max-w-2xl md:mr-8">Let's get in touch and figure something out.</p>
      </PageHero>
      <section name="main"></section>
    </main>
  )
}