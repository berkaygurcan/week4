import Header from "./HeaderComponent";
import MainComponent from "./MainComponent"
import {useState} from "react";
export default function App() {
 
  const [token, setToken] = useState();

  if(!token) { //eğer token yoksa giriş yapma sayfası render edilir
    return <Header setToken= {setToken}/>
  }
  return (
    <div>
        <MainComponent />
        
    </div>
  )
}
