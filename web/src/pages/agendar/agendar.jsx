import {Header } from "../../components/header/header";
import {Footer} from "../../components/footer/footer";

export function AgendeOnline (){
    return (
        <>
            <Header />

            <h1>About Page</h1>
            <div>

      <button onClick={() => window.location.href = '/'}>Go to Home</button>

         </div>           
          
         <Footer/>

        </>
    )   
}