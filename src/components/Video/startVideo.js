export default function StartVideo({video}) {
    return (
        <>
            <video loop autoPlay muted className="video">
                <source src={video} type="video/mp4" />
            </video>
        </>
    )
}