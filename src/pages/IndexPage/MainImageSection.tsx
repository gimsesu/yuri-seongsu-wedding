import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import wedding from "public/wedding_main.jpg";

const MainImageSection = () => {
  return (
    <Container>
      <StyledImage
        src={wedding}
        alt="웨딩"
        draggable={false}
        quality={100}
        priority={true}
        style={{
          objectFit: "cover",
          overflow: "hidden",
        }}
        fill={true}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

const StyledImage = styled(Image)`
  position: relative !important;
  height: unset !important;
`;

export default MainImageSection;
