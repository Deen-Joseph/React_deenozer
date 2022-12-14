
const Carousel =()=>{

    return(
    <div className="row-carousel">
        <div>
            <div
            onClick={prevImage}>
                 ❰
            </div>
            <div
            onClick={nxtImage}>
                  ❱
            </div>
        </div>
<div className="bg-carousel"></div>
<div className="dot-carousel"></div>
    </div>
    )
}