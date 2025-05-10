import '../styles/header.css'
import logo from '../assets/troll-face.png';
export default function Header() {
    return (
        <header>
            <img src={logo} alt="troll face image" />
            <span>Meme Generator</span>
        </header>
    )
}