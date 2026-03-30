// const Introduction=(obj)=>{
//     return (
// <h1>Welcome,{obj.name}</h1>
//     )

//using destructuring
// const {name,age}=obj
//     return (
// <h1>Welcome,{name}</h1>
//     )


//Destruturing on The Go
const Introduction=({name,age})=>{

        return (
<h1>Welcome,{name}</h1>
    )
}

export default Introduction