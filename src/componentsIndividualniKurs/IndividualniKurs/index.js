import React from "react";
import TestDropDown from "../TestDropDown";
import {
  IndividualniKursContainer,
  FormLeftContainer,
  LeftContainer,
  TitileMain,
  Description,
  DurationLong,
  Price,
  FormContainer,
  TitleForm,
  DuratioFormDate,
  PForm,
  Input,
  DurationTitle,
  InputNapomena,
  DropDownContainer,
} from "./IndKursElements";

import { Button } from "../../components/ButtonElement";

const IndividualniKurs = ({ courseId }) => {
  return (
    <IndividualniKursContainer>
      <TitileMain>OSNOVE PRECIZNE POLJOPRIVREDE</TitileMain>
      <FormLeftContainer>
        <LeftContainer>
          <DurationTitle>OPIS</DurationTitle>
          <Description>
            Precizna poljoprivreda kao tehnološki koncept značajno odstupa od
            tradicionalne poljoprivrede jer se procedure prilagođavaju
            vremenskom i prostornom domenu, a odluke donose na osnovu pouzdanih
            prostornih informacija, znanja iz više naučnih disciplina i
            najsavremenije opreme. Poljoprivredni proizvođači kao budući
            korisnici savremene opreme (za đubrenje i detekciju različitih
            parametara na njivi) koja se koristi u preciznoj poljoprivredi, u
            velikoj meri nisu dovoljno inforisani o samom konceptu i
            raspoloživim alatima, te postoji realna potreba za njihovom
            permanentnom edukacijom. Učesnici kursa bi dobili osnovne
            informacije na temu savremenih alata u poljoprivredi koji bi im
            mogli koristiti u svakodnevnom radu. Na osnovu bogatog iskustva,
            predavača sa Poljoprivrednog fakulteta Univerziteta u Novom Sadu u
            korišćenju dronskih sistema (dornova za prskanje i daljinsku
            detekciju), različitih senzorskih sistema za detekciju parametara
            zemljišta i biljaka, korišćenja GPS i GIS platformi, razvoju
            algoritama za predikciju prinosa i đubrenja azotom na osnovi NDVI i
            multispektralnih snimaka, oformili smo specijalizovan kurs "Osnove
            precizna poljoprivrede".
          </Description>
          <DurationTitle>TRAJANJE KURSA</DurationTitle>

          <DurationLong>
            Sveobuhvatni 10-dnevni kurs "Osnove precizna poljoprivrede", koji
            traje dve uzastopne nedelje sa po 4 školska časa dnevno (ukupno 40
            časova). Nastava se održava u večernjim satima, čime se omogućava
            polaznicima da pohađaju bez ometanja njihovih dnevnih obaveza.
          </DurationLong>
          <hr id="borderline"></hr>
          <Price>CENA KURSA</Price>
          <Price>55.000 rsd</Price>
          <Description>
            * Minimum prijavljenih polaznika je neophodan za održavanje kursa u
            planiranim terminima.
          </Description>
          <Description>* Cena uključuje PDV.</Description>
        </LeftContainer>
        <FormContainer>
          <TitleForm>Prijavite se za naredni kurs</TitleForm>
          <TitleForm>Video Game Development 1</TitleForm>
          <DuratioFormDate>09.01.2024 - 09.04.2024</DuratioFormDate>
          <DuratioFormDate>18:00 - 21:00</DuratioFormDate>
          <PForm>Ostavite Vaše podatke, a mi ćemo Vas kontaktirati.</PForm>
          <label htmlFor="name" />
          <Input
            type="text"
            name="name"
            maxlength="50"
            placeholder="Ime i Prezime"
            required
          />
          <label htmlFor="email" />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            maxlength="50"
            required
          />
          <label htmlFor="phone" />
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefon"
            required
            maxlength="50"
          />
          <label htmlFor="address" />
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="Adresa"
            maxlength="50"
          />
          <label htmlFor="napomena" />
          <InputNapomena
            type="text"
            id="napomena"
            name="napomena"
            maxlength="450"
            placeholder="Napomena"
            rows="7"
          />
          <Button>Prijavi me</Button>
        </FormContainer>
      </FormLeftContainer>
      <DropDownContainer>
        <TestDropDown></TestDropDown>
      </DropDownContainer>{" "}
    </IndividualniKursContainer>
  );
};

export default IndividualniKurs;
