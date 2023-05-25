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
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6"></span>
      </h2>
    </>
  );
}
