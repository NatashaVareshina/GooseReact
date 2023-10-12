import './marquee.css'

export default function Marquee({className}) {
    return (
        <section className='marquee__container'>
            <p className={className}>А – ГА – ГА – ГА – Г</p>
        </section>
    )
}