
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
                    {Array(5).fill(0).map(_ => <Card />)}
                </Carousel>
            </Section>
            <Section headerText="Best Offer" HeaderAction={"View All"}>
                {Array(18).fill(0).map(_ => <Card2 />)}
            </Section>
            {/* <Section headerText="Explore France">
                <Card />
            </Section> */}
        </>
    )
}

export default Dashboard