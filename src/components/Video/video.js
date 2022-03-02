export default function Video({video, style}) {
    return (
        <>
            <video loop autoPlay muted className="video" >
                <source src={video} type="video/mp4" />
            </video>
        </>
    )
}