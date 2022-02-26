import Header from "./HeaderComponent";
import MainComponent from "./MainComponent"
import {useState} from "react";
export default function App() {
  const  [loginBool, setLoginBool] = useState(false);
  return (
    <div>
        <Header />
        {/* // !login &&  */}
        {
            loginBool && <MainComponent />
        }
    </div>
  )
}
