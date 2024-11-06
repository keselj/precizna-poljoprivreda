import React from "react";
import {
  KursCard,
  KursWrapper,
  KursH2,
  KursIcon,
  KursP,
  KursContainer,
  KursIconWrapper,
  KursH2PWrapper,
  KursPprice,
} from "./ProdajaPageElements";
import KursData from "./ProdajaData";

const Prodaja = () => {
  const displayItemsInSetsOfThree = [];
  for (let i = 0; i < KursData.length; i += 3) {
    const chunk = KursData.slice(i, i + 3);
    displayItemsInSetsOfThree.push(chunk);
  }
  const x = 2;
  return (
    <>
      <KursContainer>
        {displayItemsInSetsOfThree.map((chunk, index) => (
          <KursWrapper key={index} title={x}>
            {chunk.map((item) => (
              <KursCard
                id="prodaja-card"
                to={`/prodaja/${item.id}`}
                key={item.id}
                state={item}
              >
                <KursIconWrapper>
                  <KursIcon src={item.src} alt={item.alt} />
                </KursIconWrapper>
                <KursH2PWrapper>
                  <KursH2>{item.title}</KursH2>
                  <KursP>{item.description}</KursP>
                  <KursPprice>
                    <div className="burger-icon">
                      <div className="burger-line"></div>
                      <div className="burger-line"></div>
                      <div className="burger-line"></div>
                    </div>
                    {item.price}
                  </KursPprice>
                </KursH2PWrapper>
              </KursCard>
            ))}
          </KursWrapper>
        ))}
      </KursContainer>
    </>
  );
};

export default Prodaja;
