import styled from "@emotion/styled";
import React from "react";
import { GREYS } from "src/assets/theme";

const TimelineSection = () => {
  return (
    <Footer>
      <h3>CREDITS</h3>
      <table>
        <tbody>
          <tr>
            <td>글</td>
            <td>이유리</td>
          </tr>
          <tr>
            <td>만듦</td>
            <td>김성수</td>
          </tr>
        </tbody>
      </table>
    </Footer>
  );
};

const Footer = styled.footer`
  background: ${GREYS.grey1};
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default TimelineSection;
