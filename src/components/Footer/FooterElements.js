import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBeliZeleni from "../../images/Logo/logoBeliZeleni.jpg";

export const FooterContainer = styled.footer`
  background-color: rgb(26, 47, 41);
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 50px;
  color: white;
`;

export const FooterLogoAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  max-width: 300px;
  align-items: start;
`;

// NOVI FOOTER

export const FooterLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  background: ${({ scrollNavLogo }) =>
    scrollNavLogo
      ? `url(${logoBeliZeleni}) no-repeat center center / contain`
      : `url(${logoBeliZeleni}) no-repeat center center / contain`};
  background-color: rgb(26, 47, 41); /* The improved transparency spell */
  background-size: cover;

  width: 40px;
  height: 30px;
  min-width: 145px;
  min-height: 45px;
`;

export const FooterText = styled.p`
  font-weight: 500;
`;

export const FooterAddress = styled.p`
  font-weight: 500;
`;
export const FooterCity = styled.p`
  font-weight: 500;
`;
export const FooterPhone = styled.p`
  font-weight: 500;
`;
export const FooterEmail = styled.p`
  font-weight: 500;
`;

export const FooterOnamaKurseviUslugeProdaja = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const FooterPreciznaPoljoprivreda = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const FooterOnama = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterUsluge = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterKursevi = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
export const FooterProdaja = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const FooterSolicalMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const FooterSolicalMediatNaslov = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const FooterPitajteNas = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 100%;
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: #d0cfca;
  color: black;
  padding: 30px;
  border-radius: 10px;
  border: none;
`;
export const FooterPitajteNasNaslov = styled.h4`
  font-size: 24px;
  display: flex;
  font-weight: 500;
  justify-content: center;
`;
export const FooterTuSmoDaVamPomognemo = styled.p`
  font-weight: 500;
  display: flex;
  justify-content: center;
`;
export const FooterFormContainer = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
export const FooterInputEmail = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputFirstName = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputLastName = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`;
export const FooterInputPitanje = styled.textarea`
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  height: 120px;
  box-sizing: border-box;
`;
export const FooterSubmeitButton = styled.button`
  background-color: rgb(26, 47, 41);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  border-radius: 10px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

// STARI FOOTER

// export const FooterLinksContainer = styled.div`
//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 820px) {
//     padding-top: 32px;
//   }
// `;

// export const FooterLinksWrapper = styled.div`
//   display: flex;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// export const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 16px;
//   text-align: left;
//   width: 160px;
//   box-sizing: border-box;
//   color: #fff;

//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// export const FooterLinkTitle = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
// `;

// export const FooterLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 8px;
//   font-size: 14px;

//   &:hover {
//     color: #01bf71;
//     transition: 0.3s ease-out;
//   }
// `;

// export const SocialMedia = styled.section`
//   max-width: 1000px;
//   width: 100%;
// `;

// export const SocialMediaWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   aling-items: center;
//   max-width: 1100px;
//   margin: 40px auto 0 auto;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// export const SocialLogo = styled(Link)`
//   color: #fff;
//   justify-self: start;
//   cursor: pointer:
//   text-decoration: none;
//   font-size: 24px;
//   display: flex;
//   aling-items: center;
//   margin-bottom: 16px;
//   font-weight: bold;
// `;

// export const WebsiteRight = styled.small`
//   color: #fff;
//   margin-bottom: 16px;
// `;

// export const SocialIcons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 240px;
// `;

// export const SocoalIconLink = styled.a`
//   color: #fff;
//   font-size: 24px;
// `;
