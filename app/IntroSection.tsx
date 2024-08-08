import React from "react";

export default function IntroSection() {
  return (
    <section
      className={
        "bg-gradient-to-br from-c-1a to-c-1b py-8 px-4 border-b border-solid border-black text-center"
      }
    >
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"my-8"}>유리 🤍 성수 결혼해요!</h1>
        <div className={"justify-center"}>
          <p>열한 번째 가을을 맞이하며 결혼합니다.</p>

          <p>앞으로 주어진 계절들도 기대가 됩니다.</p>

          <p>서로의 고유한 빛을 지켜주며 살았습니다.</p>

          <p>그렇게 빚어낸 저희의 모습을 만나러 와 주세요.</p>
        </div>
        <br />
        <div className={"flex justify-center gap-20 font-bold mb-8"}>
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
