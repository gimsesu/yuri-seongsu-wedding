import React from "react";

export default function Footer() {
  return (
    <footer className={"bg-c-grey text-white px-6 py-5 flex justify-between"}>
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
    </footer>
  );
}
