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
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialMedia,
  SocoalIconLink,
  SocialIcons,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
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
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
