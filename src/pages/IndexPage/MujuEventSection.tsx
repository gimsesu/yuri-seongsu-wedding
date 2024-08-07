import React, { useEffect, useRef } from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";
import { BorderedTable } from "src/components/Table";

const MujuEventSection = () => {
  return (
    <Section
      backgroundPrimaryColor={COLORS.bg2Primary}
      backgroundSecondaryColor={COLORS.bg2Secondary}
      title="첫 번째 장소!"
    >
      <div>
        그린가든에서 아주 특별한 동네잔치를 엽니다.
        <br />
        누구든지 오셔서 따뜻한 밥 한 끼 드시고 가세요.
      </div>
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
          <td>24년 9월 28일 토요일 12:00</td>
        </tr>
        <tr>
          <td>어디서</td>
          <td>그린가든, 무주</td>
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
      timestamp: "1720928405328",
      key: "2k29d",
      mapHeight: "360",
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1720928405328"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: "100%" }}
    ></div>
  );
};

export default MujuEventSection;
