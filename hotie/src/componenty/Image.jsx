export function Image({ imgpath, alt }) {
    return (
        <>
            <img className={"img"} src={imgpath} alt={alt}/>
        </>
    );
}
