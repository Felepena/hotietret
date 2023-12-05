import { useState } from 'react'
import './index.css'
import {Card} from "./componenty/Cards.jsx";
import {Image} from "./componenty/Image.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className={"container"}>
            <div className={"celakarta"}>
                <div className={"pozadikarticek"}>
                    <Image imgpath={"img.png"}/>
                    <Card Moviename={"pán prstenu"}autor={"peter jackson"}procenta={"100%"}/>
                </div>
                <div className={"pozadikarticek"}>
                    <Image imgpath={"img_1.png"}/>
                    <Card Moviename={"matrix"}autor={"peter jackson"}procenta={"100%"}/>
                </div>
                <div className={"pozadikarticek"}>
                    <Image imgpath={"img_2.png"}/>
                    <Card Moviename={"Já,legenda"}autor={"peter jackson"}procenta={"100%"}/>
                </div>
            </div>
        </div>





    </>
  )
}

export default App
