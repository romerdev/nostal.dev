import PageTitle from "../../components/PageTitle"
import Wrapper from "../../components/Wrapper"

export default function Work() {
  return (
    <main>
      <style global="true">{`
        :root {
          --primary: rgb(199, 187, 202);
        }
      `}</style>
      <Wrapper></Wrapper>
      <Wrapper>
        <PageTitle title="Work" />
      </Wrapper>
    </main>
  )
}