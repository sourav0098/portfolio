import { type } from "os";
import React from "react";

type Props = {
  title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <>
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        {title}
      </h2>
    </>
  );
}
