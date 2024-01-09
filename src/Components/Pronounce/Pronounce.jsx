import { Component } from "react";

import './Pronounce.scss'

let audio = null
class Pronounce extends Component {
    playAudio = (url) =>{
        let foundAudio = null
        foundAudio = url.find((val) =>{
            return val.audio && val.text ? val : null
        })
        if(audio !== null){
            audio.pause()
            audio.currentTime = 0
        }
        audio = new Audio(foundAudio.audio)
        audio.play()
    }
    render(){
        const { audioUrl,word,phonetic} = this.props
       
       
        console.log(audioUrl)
        return(
            <div className="main-word">
            <div className="word">
                <h2>{word}</h2>
                <div className="play-music"
                onClick={()=>this.playAudio(audioUrl)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="white"/>
                </svg>
                </div>
            </div>
            <div className="pronounciation">
           {phonetic}
            </div>
        </div>
        )
    }
}
export default Pronounce