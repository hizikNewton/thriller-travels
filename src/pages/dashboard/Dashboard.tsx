
import Carousel from "@components/carousels"
import card from "./components/Card"
import Hero from "./components/Hero"
import Section from "./components/Section"



const { Card, Card2 } = card
const Dashboard = () => {

    return (
        <>
            <Hero />
            <Section headerText="Trending Destination" carousel>
                <Carousel>
                    {Array(5).fill(0).map((_, idx) => <Card key={idx} />)}
                </Carousel>
            </Section>
            <Section headerText="Best Offer" HeaderAction={"View All"}>
                {Array(18).fill(0).map((_, idx) => <Card2 key={idx} />)}
            </Section>
            <Section headerText="Explore France">
                <Card />
            </Section>
        </>
    )
}

export default Dashboard