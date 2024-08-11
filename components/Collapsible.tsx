"use client";
import React from "react";

const Collapsible = ({
  title,
  contents,
}: {
  title: string;
  contents: React.ReactNode;
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <div
      className={
        "bg-c-table rounded-md mb-3 px-3.5 py-2.5 border border-solid border-strong-blue cursor-pointer"
      }
    >
      <div onClick={() => setCollapsed((prev) => !prev)}>{title}</div>
      {!collapsed && (
        <div
          className={"border-t border-solid border-strong-blue mt-2.5 pt-2.5"}
        >
          {contents}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
