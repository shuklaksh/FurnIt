import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  image?: string;
  howtochoosea?: string;
  decembertwentys?: string;
}

export default function BlogDetailCardrecent({
  image = "images/defaultNoData.png",
  howtochoosea = "How to choose a chair at home",
  decembertwentys = "December 27, 2021",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-[70px] md:h-auto object-cover" />
      <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
        <Heading size="s" as="h1" className="!font-raleway text-base font-bold">
          {howtochoosea}
        </Heading>
        <Text as="p" className="!text-gray-500 tracking-[-0.50px] text-sm font-normal">
          {decembertwentys}
        </Text>
      </div>
    </div>
  );
}
