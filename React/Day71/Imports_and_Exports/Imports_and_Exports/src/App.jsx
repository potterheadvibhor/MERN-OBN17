import DefaultExports from "./Components/DefaultExports"
import NamedExports3,{NamedExports as NamedExports1,NamedExports2} from "./Components/NamedExports"
import { PropsChildren } from "./Components/PropsChildren"
function App()
{
   return(
    <>
    <h1>Imports and Exports</h1>
   {/* <DefaultExports />
   <NamedExports1 />
   <NamedExports2 />
   <NamedExports3 /> */}
    <PropsChildren>
      <h1>Hey there i am a children</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam deserunt explicabo vel rerum! Ipsum aspernatur praesentium quam dolore neque? Nobis dignissimos laboriosam optio quam sapiente dolore eveniet provident delectus.*1</p>
       </PropsChildren>
    </>

   )
}

export default App