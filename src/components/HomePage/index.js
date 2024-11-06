import React from "react";
// import { Button } from "../ButtonElement";
import KrleiZokiBook from "./images/ZKKnjiga.jpg";
import MarkoKnjigaImage from "./images/MarkovaKnjiga.png";
import {
  HomePageContainer,
  HomeBackground,
  ImageBackground,
  HomeContent,
  KrleIZokiKnjiga,
  MarkoKnjiga,
  PreNaslovKnjige,
  TitleOfBook,
  PUmderTitle,
  BigYellowButton,
  ImageOfBook,
  ImageOfBook2,
  ImageWrapper,
  SpanBookTitle,
} from "./HomePageElements";

const HomePageSection = () => {
  const handleButtonClick = () => {
    window.open(
      "http://polj.uns.ac.rs/sites/default/files/udzbenici/Precizna%20poljoprivreda%20-%20Kosti%C4%87%20Marko%20kona%C4%8Dno.pdf",
      "_blank"
    );
  };

  return (
    <HomePageContainer id="home">
      <HomeBackground>
        <ImageBackground />
      </HomeBackground>
      <HomeContent>
        {/* <KrleIZokiKnjiga>
          <ImageWrapper>
            <ImageOfBook src={KrleiZokiBook} />
          </ImageWrapper>
          <PreNaslovKnjige>
            <SpanBookTitle>| </SpanBookTitle>U PRIPREMI NOVI TIRAŽ
          </PreNaslovKnjige>
          <TitleOfBook>"ZNANJE ZA BOLJE PRINOSE"</TitleOfBook>
          <PUmderTitle>Reklamirajte se u našoj knjizi</PUmderTitle>{" "}
          <PUmderTitle>i privucite stotine novih </PUmderTitle>{" "}
          <PUmderTitle>klijenata</PUmderTitle>
          <BigYellowButton>VIŠE INFORMACIJA</BigYellowButton>
        </KrleIZokiKnjiga> */}
        <MarkoKnjiga>
          <ImageWrapper>
            <ImageOfBook2 src={MarkoKnjigaImage} />
          </ImageWrapper>
          <PreNaslovKnjige>
            <SpanBookTitle>| </SpanBookTitle>KNJIGA
          </PreNaslovKnjige>
          <TitleOfBook>"PRECIZNA POLJOPRIVREDA"</TitleOfBook>
          <PUmderTitle>Prof. dr Marko Kostić</PUmderTitle>
          <PUmderTitle>Poljoprivredni Fakultet</PUmderTitle>
          <PUmderTitle>Novi Sad</PUmderTitle>
          <BigYellowButton onClick={handleButtonClick}>
            PREUZMITE PDF Besplatno
          </BigYellowButton>
        </MarkoKnjiga>
      </HomeContent>
    </HomePageContainer>
  );
};

export default HomePageSection;

// import React from "react";
// import "./HomePage.css";
// import KrleiZokiBook from "./images/ZKKnjiga.jpg";
// import MarkoKnjigaImage from "./images/MarkovaKnjiga.png";

// const HomePageSection = () => {
//   const handleButtonClick = () => {
//     window.open(
//       "http://polj.uns.ac.rs/sites/default/files/udzbenici/Precizna%20poljoprivreda%20-%20Kosti%C4%87%20Marko%20kona%C4%8Dno.pdf",
//       "_blank"
//     );
//   };

//   return (
//     <div className="home-page-container" id="home">
//       <div className="home-background">
//         <img className="image-background" alt="Background" />
//       </div>
//       <div className="home-content">
//         <div className="marko-knjiga">
//           <div className="image-wrapper">
//             <img className="image-of-book2" src={MarkoKnjigaImage} alt="Marko Knjiga" />
//           </div>
//           <h5 className="pre-naslov-knjige">
//             <span className="span-book-title">| </span>KNJIGA
//           </h5>
//           <h5 className="title-of-book">"PRECIZNA POLJOPRIVREDA"</h5>
//           <p className="pumder-title">Prof. dr Marko Kostić</p>
//           <p className="pumder-title">Poljoprivredni Fakultet</p>
//           <p className="pumder-title">Novi Sad</p>
//           <button className="big-yellow-button" onClick={handleButtonClick}>
//             PREUZMITE PDF Besplatno
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageSection;
