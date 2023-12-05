import {Image} from "./Image.jsx";
import {Card} from "./Cards.jsx";

export function Filminfo2() {
    return (
        <div className={"pozadikarticek"}>
            <Image imgpath={"img_1.png"}/>
            <Card Moviename={"matrix"}autor={"peter jackson"}procenta={"100%"}/>
        </div>
    );
}
