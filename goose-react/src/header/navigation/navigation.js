import Menu from './menu/menu'
import './navigation.css'

export default function Navigation() {
    return (
        <section className ='navigation'>
            <div className='logo'>
                <p>ГУ<br />СЬ</p>
            </div>
            <Menu />
        </section>
    )
}