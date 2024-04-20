import React from "react";
import { Img, Button, Input, Text, Heading } from "./..";

interface Props {
  className?: string;
  offer?: string;
  description?: string;
  subscribe?: string;
}

export default function CartSection({
  offer = "Subscribe now and get 10% off all items",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text.",
  subscribe = "Subscribe",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-[48%] ml-[13px] gap-10">
        <div className="flex flex-col items-center justify-start w-full gap-2.5">
          <Heading
            size="4xl"
            as="h1"
            className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-[40px] font-bold leading-[60px]"
          >
            {offer}
          </Heading>
          <Text size="md" as="p" className="!text-gray-50_01 tracking-[-0.50px] text-base font-normal leading-[35px]">
            {description}
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-start w-full gap-px sm:gap-5">
          <Input shape="square" name="email" placeholder="Your email here.." className="w-[74%] md:w-full" />
          <Button
            size="10xl"
            shape="square"
            className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px]"
          >
            {subscribe}
          </Button>
        </div>
      </div>
      <Img
        src="images/img_pexels_photo_by.png"
        alt="pexelsphotoby"
        className="w-[48%] md:h-auto sm:w-full object-cover"
      />
    </div>
  );
}
