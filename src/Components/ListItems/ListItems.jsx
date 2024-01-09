import { Component } from "react";
import PartofSpeech from "../PartofSpeech/PartofSpeech";
class ListItems extends Component{
    render(){
        const {partOfSpeech,definitions,antonyms,synonyms} =this.props
       
        return(
           <div className="list-items">
   
            <PartofSpeech
            partOfSpeech = {partOfSpeech} 
            definitions = {definitions} 
            antonyms = {antonyms}
            synonyms ={synonyms}
             />
           </div>
        )
    }
}
export default ListItems