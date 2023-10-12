import './thirdSection.css'

export default function ThirdSection() {
    return (
        <section id='thirdSection'>
            <div className='box'>
                <div className="firstItem">
                    <img src="https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTAwNXwwfDF8c2VhcmNofDN8fGdvb3NlfGVufDB8fHx8MTY3ODEyMjE5OA&ixlib=rb-4.0.3&q=80&w=1080" alt="Гусиная стая" />
                </div>
                <div className="border">
                    <p>При дальних перелётах гусиная стая может подниматься на 
                       высоту до восьми километров. Официальный рекорд - чуть 
                       больше 10 километров. На такой высоте человек без 
                       кислородной маски уже не может дышать, а из-за низкого 
                       давления теряет сознание.</p>
                    <p>Дикие гуси всегда образуют клин при полёте. Такая орма 
                       стаи способствует разрежению воздуха за первыми птицами, 
                       и облегчает полёт всем остальным.</p>
                    <p>Домашние гуси давно утратили способность к полётамб 
                       отчасти из-за более частых линек и избыточного веса.</p>
                </div>
            </div>
            <div className='box'>
                <div className="water">
                    <p>Гусиные перья покрыты жиром, а потому 
                        <br />вода с них попросту скатывается. 
                        <br />Отсюда и пошло выражение 
                        <q>как с
                            <span>г</span>
                            <span>у</span>
                            <span>с</span>
                            <span>я </span>
                            <span>вода</span>
                        </q>
                    .</p>
                </div>
                <div className="goose__white">
                    <img src="https://images.unsplash.com/photo-1603040704099-e3c6c3348f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTAwNXwwfDF8c2VhcmNofDg4fHxnb29zZXxlbnwwfHx8fDE2NzY3MzA2NjE&ixlib=rb-4.0.3&q=80&w=1080" />
                </div>
                <div className="goose__grey">
                    <img src="https://api2.loon.site/images?url=https://images.pexels.com/photos/34801/goose-bird-feather-water-bird.jpg?auto=compress&cs=tinysrgb&h=650&w=940" />
                </div>
            </div>
        </section>
    )
}