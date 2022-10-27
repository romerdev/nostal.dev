import PageTitle from "../../components/PageTitle"
import Wrapper from "../../components/Wrapper"

export default function Contact() {
  return (
    <main>
      <style global="true">{`
        :root {
          --primary: rgb(95, 175, 104);
        }
      `}</style>
      <Wrapper>
        <PageTitle title="Contact" />
      </Wrapper>
    </main>
  )
}