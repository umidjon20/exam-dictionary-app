import { Component } from "react";
import smilic from '../../assets/smilic.png'
import './NotFoundPage.scss'

class NotFoundPage extends Component{
    render(){
        return(
            <div className="not-found">
                <span>
                    <img src={smilic} alt="" />
                </span>
                <h6>No Definitions Found</h6>
                <p>
                Sorry pal, we couldn't find definitions for 
                the word you were looking for. You can try 
                the search again
                 at later time or head to the web instead.
                </p>
            </div>
        )
    }
}
export default NotFoundPage