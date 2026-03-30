
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const root4 = ReactDOM.createRoot(document.getElementById("root4"));

const element = React.createElement("h2", null, "Hello from React CDN Root");
const element2 = React.createElement("h3", null, "Hello from React CDN Root2");
const element3 = React.createElement("ul",null,[React.createElement("li",null,"item1"),React.createElement("li",null,"item2")]);
const nav = React.createElement("nav", 
    { style: { display: "flex", 
        gap: "10px",
        justifyContent:"space-between",
        backgroundColor:"Black",
        alignItems: "center",
     padding: "10px",
      color: "white"} 
},
React.createElement("h3",null,"LOGO"),
React.createElement("div",
    {style: { 
        display: "flex", 
        gap: "20px",
        } },[React.createElement("a",null,"A"),
    React.createElement("a",null,"B"),
    React.createElement("a",null,"C")])
    );


root.render([element,element2]);
root2.render(element3);
root2.render(nav);


