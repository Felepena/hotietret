import {Image} from "./Image.jsx";
import {Card} from "./Cards.jsx";

export function Filminfo() {
    return (
        <div className={"pozadikarticek"}>
            <Image imgpath={"img.png"}/>
            <Card Moviename={"pán prstenu"}autor={"peter jackson"}procenta={"100%"}/>
        </div>
    );
}
