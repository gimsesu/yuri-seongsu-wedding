import React, { useEffect, useRef } from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";
import { BorderedTable } from "src/components/Table";

const SeoulEventSection = () => {
  return (
    <Section
      backgroundPrimaryColor={COLORS.bg3Primary}
      backgroundSecondaryColor={COLORS.bg3Secondary}
      title="두 번째 장소!"
    >
      <div>가족과 친지분들을 모시고 소소한 결혼식을 올립니다.</div>
      <InfoTable />
      <KakaoMap />
    </Section>
  );
};

const InfoTable = () => {
  return (
    <BorderedTable style={{ margin: "1.2rem 0", position: "relative" }}>
      <tbody>
        <tr>
          <td>언제</td>
          <td>24년 10월 12일 토요일 12:00</td>
        </tr>
        <tr>
          <td>어디서</td>
          <td>세상의 모든 아침, 여의도</td>
        </tr>
      </tbody>
    </BorderedTable>
  );
};

const KakaoMap = () => {
  let rendered = useRef(0);

  useEffect(() => {
    if (rendered.current !== 0) {
      return;
    }
    new daum.roughmap.Lander({
      timestamp: "1720928602134",
      key: "2k29e",
      mapHeight: "360",
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1720928602134"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: "100%" }}
    ></div>
  );
};

export default SeoulEventSection;
