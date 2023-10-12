import './fourthSection.css'

export default function FourthSection() {
    return (
        <section className="box" id='fourthSection'>
            <div className="parents">
                <h2>ГУСИ-РОДИТЕЛИ</h2>
                <div className="nest">
                    <p>Гуси, как правило, откладывают небольшое количество яиц. 
                       Оба родителя защищают гнездо и молодняк,что способствует 
                       более высокой выживаемости гусят.</p>
                    <p>Когда гусыня по необходимости оставляет гнездо с яйцами 
                       или птенцами, она маскирует его травой и веточками, а 
                       саме всегда остаётся его сторожить.</p>
                    <p>Защищающий гнездо гусь, даже домашний, никогда не 
                       отступает и отчаянно сражается до последнего, нападая 
                       даже на заведомо более сльного противника.</p>
                    <p>Для утепления гнезда гусыня выщипывает собственные перья 
                        и пух, несмотря на болезненность таких действий.</p>
                </div>
            </div>
            <div className="children">
                <p>Маленькие гусята могут плавать уже на второй день после того, 
                   как вылупятся из яйца.</p>
                <img src="https://images.unsplash.com/photo-1651749562879-50160b418515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTAwNXwwfDF8c2VhcmNofDEwfHxnb3NsaW5nc3xlbnwwfHx8fDE2NzY3NTExMjM&ixlib=rb-4.0.3&q=80&w=1080" alt="Гусята" />
            </div>
        </section>
    )
}