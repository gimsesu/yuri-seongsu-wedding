import React from "react";

export default function IntroSection() {
  return (
    <section
      className={"py-8 px-4 text-center border-b border-solid border-black"}
    >
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mt-4 mb-8"}>유리 🤍 성수 결혼해요!</h1>
        <div className={"justify-center"}>
          <p className={"pb-1.5"}>열한 번째 가을을 맞이하며 결혼합니다.</p>
          <p className={"pb-1.5"}>앞으로 주어진 계절들도 기대가 됩니다.</p>
          <p className={"pb-1.5"}>서로의 고유한 빛을 지켜주며 만났습니다.</p>
          <p className={"pb-1.5"}>어제와 같이 오늘도 다정하게 손을 잡고</p>
          <p className={"pb-1.5"}>언제나 삶의 멋진 여정을 함께하겠습니다.</p>
        </div>
        <br />
        <div className={"flex justify-center gap-12 font-bold mb-8 px-4"}>
          <div>
            김목중•김문자의 아들
            <br />
            김성수
          </div>
          <div>
            이길재•김정미의 딸
            <br />
            이유리
          </div>
        </div>
      </div>
    </section>
  );
}
