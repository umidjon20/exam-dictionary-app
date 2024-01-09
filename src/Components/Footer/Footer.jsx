import { Component } from "react";

import './Footer.scss'

class Footer extends Component{
    render(){
        const { sourceUrl } = this.props
        return(
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-source">
                        <label>
                        <span className='source'>Source</span>
                        <span><a href={sourceUrl}> {sourceUrl}</a></span>
                        </label>
                    </div>
                </div>

            </footer>
        )
    }
} 
export default Footer