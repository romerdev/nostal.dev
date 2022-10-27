import PageTitle from "../../components/PageTitle"
import Wrapper from "../../components/Wrapper"

export default function Writings() {
  return (
    <main>
      <style global jsx>{`
        :root {
          --primary: rgb(230, 220, 201);
        }
      `}</style>
      <Wrapper>
        <PageTitle title="Writings" />
        <p className="mt-9">I have not yet written any articles. Be sure to check back soon!</p>
      </Wrapper>
    </main>
  )
}