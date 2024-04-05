import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLogoAndAddress,
  FooterLogo,
  FooterText,
  FooterAddress,
  FooterCity,
  FooterPhone,
  FooterEmail,
  FooterOnamaKurseviUslugeProdaja,
  FooterPreciznaPoljoprivreda,
  FooterOnama,
  FooterUsluge,
  FooterKursevi,
  FooterProdaja,
  FooterSolicalMedia,
  FooterSolicalMediatNaslov,
  FooterPitajteNas,
  FooterBox,
  FooterPitajteNasNaslov,
  FooterTuSmoDaVamPomognemo,
  FooterInputEmail,
  FooterInputFirstName,
  FooterInputLastName,
  FooterInputPitanje,
  FooterSubmeitButton,
  FooterFormContainer,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  // SocialMediaWrap,
  // SocialLogo,
  // WebsiteRight,
  // SocialMedia,
  // SocoalIconLink,
  // SocialIcons,
} from "./FooterElements";

const Footer = () => {
  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLogoAndAddress>
          <FooterLogo />
          <FooterText>
            Hvatajući korak sa vremenom u jednoj od najdinamičnijih oblasti
            današnjice, na Agromedia portalu mešaju se stara i nova znanja,
            mudrost tradicije i najnovija tehnološka dostignuća. Uhvatite korak
            sa promenama, pratite najčitaniji poljoprivredni portal u Srbiji!
          </FooterText>
          <FooterAddress>Dr Ivana Ribara 84, VI/26</FooterAddress>
          <FooterCity>11070 Novi Beograd</FooterCity>
          <FooterPhone>Telefon:+381 64 1627 353</FooterPhone>
          <FooterEmail>Email: info@agromedia.rs</FooterEmail>
        </FooterLogoAndAddress>
        <FooterOnamaKurseviUslugeProdaja>
          <FooterPreciznaPoljoprivreda>
            Precizna Poljoprivreda
          </FooterPreciznaPoljoprivreda>
          <FooterOnama>O Nama</FooterOnama>
          <FooterKursevi>Kursevi</FooterKursevi>
          <FooterUsluge>Usluge</FooterUsluge>
          <FooterProdaja>Prodaja</FooterProdaja>
        </FooterOnamaKurseviUslugeProdaja>
        <FooterSolicalMedia>
          <FooterSolicalMediatNaslov>Social Media</FooterSolicalMediatNaslov>
          <FaFacebook style={iconStyle} />
          <FaInstagram style={iconStyle} />
          <FaLinkedin style={iconStyle} />
          <FaYoutube style={iconStyle} />
        </FooterSolicalMedia>
        <FooterPitajteNas>
          <FooterBox>
            <FooterPitajteNasNaslov>Pitajte Nas</FooterPitajteNasNaslov>
            <FooterTuSmoDaVamPomognemo>
              Tu smo da vam pomognemo.
            </FooterTuSmoDaVamPomognemo>
            <FooterFormContainer>
              <FooterInputEmail
                type="email"
                name="email"
                placeholder="Email"
                maxlength="50"
                required
              />
              <FooterInputFirstName
                type="text"
                name="name"
                maxlength="50"
                placeholder="Ime"
                required
              />
              <FooterInputLastName
                type="text"
                name="name"
                maxlength="50"
                placeholder="Prezime"
                required
              />
              <FooterInputPitanje
                type="text"
                id="napomena"
                name="napomena"
                maxlength="450"
                placeholder="Pitanje"
                rows="7"
              />
            </FooterFormContainer>

            <FooterSubmeitButton>Pošalji Pitanje</FooterSubmeitButton>
          </FooterBox>
        </FooterPitajteNas>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

{
  /* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>O Nama</FooterLinkTitle>
              <FooterLink to="/onamapages">How it works</FooterLink>
              <FooterLink to="/onamapages">Testimonials</FooterLink>
              <FooterLink to="/onamapages">Careers</FooterLink>
              <FooterLink to="/onamapages">Investors</FooterLink>
              <FooterLink to="/onamapages">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/onamapages">Contact</FooterLink>
              <FooterLink to="/onamapages">Support</FooterLink>
              <FooterLink to="/onamapages">Destinations</FooterLink>
              <FooterLink to="/onamapages">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/onamapages">Submit Video</FooterLink>
              <FooterLink to="/onamapages">Ambassadors</FooterLink>
              <FooterLink to="/onamapages">Agency</FooterLink>
              <FooterLink to="/onamapages">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/onamapages">Instagram</FooterLink>
              <FooterLink to="/onamapages">Facebook</FooterLink>
              <FooterLink to="https://www.youtube.com/@droneagras9795">
                YouTube
              </FooterLink>
              <FooterLink to="/onamapages">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="">Precizna Poljoprivreda</SocialLogo>
            <WebsiteRight>
              Precizna Poljoprivreda © {new Date().getFullYear()} All rights
              reserved
            </WebsiteRight>
            <SocialIcons>
              <SocoalIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocoalIconLink>
              <SocoalIconLink href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocoalIconLink>
              <SocoalIconLink
                href="https://www.youtube.com/@droneagras9795"
                target="_blank"
                arial-label="YouTube"
              >
                <FaYoutube />
              </SocoalIconLink>

              <SocoalIconLink href="/" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocoalIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia> */
}
