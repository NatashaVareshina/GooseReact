import './secondSection.css'

export default function SecondSection() {
    return (
        <section className="box" id="secondSection">
            <div className="firstItem love">
                <h2>ГУСИНАЯ <br />ЛЮБОВЬ</h2>
                    <div>
                        <p>Как и лебеди, гуси моногамны - пару себе они выбирают 
                           на всю жизнь, примерно в возрасте 3-х лет.</p>
                        <p>В случае гибели одного из партнёров другой может 
                           навсегда остатся в одиночестве, а может и найти новую 
                           пару спустя много лет.</p>
                    </div>
            </div>
            <div className="secondItem love">
                <img src="https://i.pinimg.com/736x/4b/a0/58/4ba05841c9434eb77326216f365a1c14.jpg"
                     alt="Гусиная любовь" />
            </div>
        </section>
    )
}