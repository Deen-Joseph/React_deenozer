import "./Carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carouselz = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      
        <div className="full-carousel">
          <img alt="" src="https://cdn.mos.cms.futurecdn.net/KeFYh6bJPo2AwHNWrBkeLa-970-80.jpg.webp" />
          <p className="legend">Legend 1</p>
        </div>
        {/* <div className="full-carousel">
          <img alt="" src="https://cdn.vox-cdn.com/thumbor/aaCKTboOq5SsrpPM-j2AKoqrwDY=/0x0:1200x825/2000x1333/filters:focal(596x244:597x245)/cdn.vox-cdn.com/uploads/chorus_asset/file/6832709/justiceleague.0.jpg" />
          <p className="legend">Legend 2</p>
        </div> */}
        <div className="full-carousel">
          <img alt="" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/death-of-justice-league-header.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
          <p className="legend">Legend 3</p>
        </div>
      
    </Carousel>
  );
};

export default Carouselz;
