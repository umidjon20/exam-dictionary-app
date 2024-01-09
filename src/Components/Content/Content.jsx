import { Component } from "react";
import Pronounce from "../Pronounce/Pronounce";
import ListItems from "../ListItems/ListItems";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Loading from "../Loading/Loading";

import './Content.scss'

class Content extends Component{

 getContent = (data) =>{
  return {  
    audioUrl:data?.phonetics,
    word:data?.word,
    phonetic:data?.phonetic
}

 }   
    render(){
        const { data, notFound, empty, search} = this.props
      const mainWord = this.getContent(data)
        if(empty){
            return <div className="content"></div>
        }
        if(notFound){
            return <div className="content">
                <NotFoundPage />
            </div>
            
        }
        if(search){
            return <div className="content">
                <Loading />
            </div>
        }else if(!search && data){
            return(
            
                <div className="content">
                   <Pronounce 
                   {...mainWord} />
    
                    <div className="word-def">

                        {data?.meanings?.length > 0 && data.meanings.map((val,ind) =>{
                            return <ListItems {...val} key={ind}/>
                        })}
                      
                    </div>
                    <Footer sourceUrl = {data.sourceUrls} />
                </div>
            )
        }else{
            return <div className="content"></div>
        }
      
    }
}
export default Content