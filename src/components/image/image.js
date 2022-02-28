export default function Image({image, ownClass, text, style}) {
    return (
        <>
            <img src={image} alt={text} className={ownClass} style={style} />
        </>
    )
}