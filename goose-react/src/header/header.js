import Navigation from './navigation/navigation'
import './header.css'

export default function Header() {
    return (
        <header>
            <div>
                <img src="https://euro-pulse.ru/wp-content/uploads/2019/07/ibrahim-munir-UgkyFRjCibk-unsplash.jpg" alt="Гуси" />
            </div>
            <Navigation />
        </header>
    )
}