import { Component } from "react";

class Items extends Component {
    render(){
        const {words} = this.props
        return(
            <>
            {words.map(val=>{
                return <span>
                    {val}
                </span>
            })
            }
            </>
        )
    }
}
export default Items