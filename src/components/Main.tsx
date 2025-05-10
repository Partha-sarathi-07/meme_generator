import { useState } from "react"
import '../styles/main.css'
import frame from '../assets/frame.png';

export default function Main() {
    const [meme, setMeme] = useState({
        topText : "One does not simply",
        bottomText: "Walk into mordor",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })

    function generatMeme(formData: FormData) {
        setMeme(() => {
            return {
                topText: formData.get("topText")?.toString()!,
                bottomText: formData.get("bottomText")?.toString()!,
                imageUrl: "http://i.imgflip.com/1bij.jpg"
            }
        })
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <form action={generatMeme}>
                <div id="user-text">
                    <label>
                        <span>Top Text</span>
                        <input 
                            type="text" 
                            name="topText" 
                            placeholder="one does not simply" 
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </label>
                    <label>
                        <span>Bottom Text</span>
                        <input 
                            type="text" 
                            name="bottomText" 
                            placeholder="walk into mordor" 
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </label>
                </div>
                <button>Get a new meme image <img src={frame} alt="frame image" /></button>
            </form>
            <div id="meme">
                <img src={meme.imageUrl} alt="meme image" />
                <span id="top-text">{meme.topText}</span>
                <span id="bottom-text">{meme.bottomText}</span>
            </div>
        </main>
    )
}