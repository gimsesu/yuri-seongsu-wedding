import React from "react";

const Section = ({
  backgroundPrimaryColor,
  backgroundSecondaryColor,
  title,
  children,
  style,
  headerStyle,
}: {
  backgroundPrimaryColor: string;
  backgroundSecondaryColor: string;
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
}) => {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${backgroundPrimaryColor}, ${backgroundSecondaryColor})`,
        padding: `${GAP}px 16px`,
        borderBottom: "1px solid black",
        ...style,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {title !== undefined && (
          <h1 style={{ marginBottom: GAP, ...headerStyle }}>{title}</h1>
        )}
        {children}
      </div>
    </section>
  );
};

const GAP = 32;

export default Section;
