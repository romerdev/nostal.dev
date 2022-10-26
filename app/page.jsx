import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper"

export default function Home() {
  return (
    <main>
      <Wrapper>
        <PageTitle title="Home" />
        <p className="mt-9">This website is currently under development. Be sure to check back soon!</p>
        <p>- Romer</p>
      </Wrapper>
    </main>
  )
}
