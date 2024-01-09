import { Component } from "react";
import Items from "../SynonymItems";
import './PartofSpeech.scss'
class PartofSpeech extends Component{
    render(){
        const {definitions,partOfSpeech,synonyms,antonyms} = this.props
        return(
            <div className="mean-word">
             <h3>{ partOfSpeech} <span></span></h3>
            <div className="meanings">
            <h4>Meaning</h4>
            <ul>

                { definitions.map((def,ind)=>{
                    return (
                        <li key={ind}>
                            {def.definition}
                        </li>
                    )
                })}

            </ul>
            {synonyms.length > 0 && (
                <h5>Synonyms        
                    <Items words = {synonyms} />
                </h5>
            )}
            {
                antonyms.length > 0 && (
                    <h5>Antonmys 
                        <Items words ={antonyms} />
                    </h5>
                )
            }
            </div>
            
            
            
        </div>
        )
    }
}
export default PartofSpeech