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
} from "./IndUslugaElements";

import { Button } from "../../components/ButtonElement";

const IndividualniUslaga = (props) => {
  return (
    <IndividualniKursContainer>
      <TitileMain>{props.title}</TitileMain>
      <FormLeftContainer>
        <LeftContainer>
          <DurationTitle>OPIS</DurationTitle>
          <Description>{props.description}</Description>
          <DurationTitle>{props.durationTitle}</DurationTitle>

          <DurationLong>{props.durationLong}</DurationLong>
          <hr id="borderline"></hr>
          <Price>CENA</Price>
          <Price>{props.cenaKursa}</Price>
          <Description>
            * Minimum prijavljenih polaznika je neophodan za održavanje kursa u
            planiranim terminima.
          </Description>
          <Description>* Cena uključuje PDV.</Description>
        </LeftContainer>
        <FormContainer>
          <TitleForm>Prijavite se za naredni kurs</TitleForm>
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

export default IndividualniUslaga;
