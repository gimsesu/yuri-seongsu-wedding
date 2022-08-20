import React from "react";

const IntroSection = () => {
  return (
    <>
      <WelcomeText />
      <FromInfo />
      <InfoTable />
    </>
  );
};

const WelcomeText = () => {
  return (
    <div>
      <p>
        7년 연애 끝에 결혼합니다.
        <br />
        서로가 없는 시간을 상상하기 어려워
        <br />
        연애 시즌2를 시작해보려 합니다.
      </p>

      <p>
        집에 손님 초대하는 걸 좋아해서
        <br />
        결혼식도 파티처럼 준비했어요.
        <br />
        맛있는 음식, 그리고 저희가 좋아하는 <br />
        특별한 술을 마련해보았습니다.
      </p>
      <p>와서 편하게 놀다 가셨으면 좋겠습니다.</p>

      <p>
        귀한 시간 내어 참석해 주실
        <br />
        소중한 분들께 미리 감사드립니다
      </p>
    </div>
  );
};

const FromInfo = () => {
  return (
    <div>
      <p>장채환, 서순옥 의 장남 기효</p>
      <p>진경철, 김은숙 의 장녀 유림</p>
    </div>
  );
};

const InfoTable = () => {
  return (
    <table>
      <tr>
        <td>언제</td>
        <td>
          2022년 9월 17일 토요일
          <br />낮 12시
        </td>
      </tr>
      <tr>
        <td>어디서</td>
        <td>
          네이버 1784사옥 27층 스카이홀 <br />
          경기 성남시 분당구 정자일로 95
        </td>
      </tr>
    </table>
  );
};

export default IntroSection;