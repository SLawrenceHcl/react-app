import React from "react"
import ReactDOM from "react-dom/client"


import "./index.css"
import App from "./App"


const temp = ReactDOM.createRoot(document.getElementById("root"))
temp.render(<App/>);

// Below is all from previous practice

// const h3 = document.getElementById("root");
// h3.textContent = "not using react";
// h3.className = "not-react";
// document.getElementById("root").append(h3);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Title</h1>);

// ReactDOM.createRoot(document.getElementById("root")).render(<h1>Title</h1>);

// ReactDOM.createRoot(document.querySelector("#root")).render(<h2>Subtitle</h2>);


// ReactDOM.createRoot(document.getElementById("root"))
// .render(<ul>
//     <li>1</li>
//     <li>2</li>
// </ul>);

// function NavBar(){
//     return (
//         <div>
//             <h1>React</h1>
//         </div>
//     )
// }

// let navBarContents = (
//     <div>
//         div
//         <h2>h2</h2>
//     </div>
    
// )

// function NavBar(){
//     return <div>
//         <h1>
//             NavBar
//         </h1>
        
//     </div>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//     // navBarContents   //can be contained by variable here in place of a div block
//     <div>

//     <NavBar />
//     <h1>Bar2</h1>
// </div>
// // NavBar()
//     // <NavBar />
// );



// const navCon = (
//     <nav>
//         <h1>brandName</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )


// ReactDOM.createRoot(document.getElementById("root")).render(
//     navCon
// );

// const navBar = ReactDOM.createRoot(document.getElementById("root"));
// navBar.render(navCon);


// document.getElementById("root").append(JSON.stringify(navCon));


// function BodyOne(){
//     return (
//         <div className="body-one">
//             <h1>What's green and makes the world go round?</h1>
//             <ol>
//                 <li>Money</li>
//             </ol>
//         </div>
//     )
// }










































