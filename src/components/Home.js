import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less then a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Coustom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
 height= 100vh;
`;
