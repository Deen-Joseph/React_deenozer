import React from "react";
import './Cards.css'
// import {CCard, CCardText, CCardBody, CCardImage, CCardFooter,CRow, CCol, CCardTitle} from '@coreui/react'

const Cards = ({imageUrl, title, body} ) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={`${(imageUrl)}`}
          alt=''
        
        />    
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
          </div>   
      </div>
    </div>

//     <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
//   <CCol xs>
//     <CCard className="h-100">
//       <CCardImage orientation="top" src="https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg" />
//       <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This content is a little bit longer.
//         </CCardText>
//       </CCardBody>
//       <CCardFooter>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardFooter>
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-100">
//       <CCardImage orientation="top" src="https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg" />
//       <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This card has supporting text below as a natural lead-in to additional content.
//         </CCardText>
//       </CCardBody>
//       <CCardFooter>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardFooter>
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-100">
//       <CCardImage orientation="top" src="https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg" />
//       <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This card has even longer content than the first to show that equal height
//           action.
//         </CCardText>
//       </CCardBody>
//       <CCardFooter>
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardFooter>
//     </CCard>
//   </CCol>
// </CRow>
  );
};

export default Cards;
