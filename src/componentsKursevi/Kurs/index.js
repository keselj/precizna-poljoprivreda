import React from "react";
import { Link } from "react-router-dom";
import {
  KursCard,
  KursWrapper,
  KursH2,
  KursIcon,
  KursP,
  KursContainer,
  KursIconWrapper,
  KursH2PWrapper,
} from "./KursElements";
import KursData from "./KursData";

const Kurs = () => {
  const displayItemsInSetsOfThree = [];
  for (let i = 0; i < KursData.length; i += 3) {
    const chunk = KursData.slice(i, i + 3);
    displayItemsInSetsOfThree.push(chunk);
  }

  return (
    <>
      <KursContainer>
        {displayItemsInSetsOfThree.map((chunk, index) => (
          <KursWrapper key={index}>
            {chunk.map((item) => (
              <KursCard id="kurs-card">
                <KursIconWrapper>
                  <KursIcon src={item.src} alt={item.alt} />
                </KursIconWrapper>
                <KursH2PWrapper>
                  <KursH2>{item.title}</KursH2>
                  <KursP>{item.description}</KursP>
                </KursH2PWrapper>
              </KursCard>
            ))}
          </KursWrapper>
        ))}
      </KursContainer>
    </>
  );
};

export default Kurs;
