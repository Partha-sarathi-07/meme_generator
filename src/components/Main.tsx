import React from "react"
import '../styles/main.css'
import frame from '../assets/frame.png';
import type { Meme, MemeApiResponse } from "../interfaces/meme.interface";

export default function Main() {

    const [memeArray, setMemeArray] = React.useState<MemeApiResponse[]>()
    const [meme, setMeme] = React.useState<Meme>({
        topText : "One does not simply",
        bottomText: "Walk into mordor",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                setMemeArray(res.data.memes);
            })
    }, [])


    function generateMeme(formData: FormData) {
        const newImageUrl = memeArray![Math.floor(Math.random() * memeArray?.length!)].url;
        setMeme((): Meme => ({
            topText : formData.get("topText")?.toString()!,
            bottomText : formData.get("bottomText")?.toString()!,
            imageUrl: newImageUrl
        }))
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    console.log("rendered");
    return (
        <main>
            <form action={generateMeme}>
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