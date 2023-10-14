
import card from "./components/Card"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Section from "./components/Section"


type Props = {}

const { Card, Card2 } = card
const Dashboard = (props: Props) => {

    return (
        <>
            <Header />
            <Hero />
            <Section headerText="Trending Destination">
                {/*  <button onClick={handleClick}>next</button>
                <button>prev</button>
                <Carousel data={slides} /> */}
                <Card />
            </Section>
            <Section headerText="Best Offer" HeaderAction={"View All"}>
                {Array(18).fill(0).map(i => <Card2 />)}
            </Section>
            {/* <Section headerText="Explore France">
                <Card />
            </Section> */}
        </>
    )
}

export default Dashboard