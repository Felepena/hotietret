import {Image} from "./Image.jsx";

export function Card({ Moviename, autor, procenta }) {
    return (
        <div className={"pozadikarticek"}>
            <div className={"notflex"}>
                <h1 className={"jmenoknihy"}>{Moviename}</h1>
                <p className={"text"}>{autor}</p>
            </div>

            <p className={"procenta"}>{procenta}</p>

        </div>
    );
}
