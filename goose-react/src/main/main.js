import FirstSection from './firstSection/firstSection'
import SecondSection from './secondSection/secondSection'
import ThirdSection from './thirdSection/thirdSection'
import FourthSection from './fourthSection/fourthSection'
import FifthSection from './fifthSection/fifthSection'
import './main.css'

export default function Main() {
    return (
        <main>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </main>
    )
}