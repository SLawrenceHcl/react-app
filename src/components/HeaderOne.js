import React from "react"
import hclLogo from "../images/image-hcl.png"

export default function HeaderOne(){
    return (
        <header>
        <nav className="nav-container">
            <img 
                className="hcl-logo" 
                src={hclLogo} 
                width="100px" 
                alt="HCL"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}