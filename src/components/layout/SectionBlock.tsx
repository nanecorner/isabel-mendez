import { ReactNode } from "react";

export function SectionBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-block">
      <h2 className="section-title">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
