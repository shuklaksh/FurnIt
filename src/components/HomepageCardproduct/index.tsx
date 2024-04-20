import React from "react";
import { Text, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  imageOne?: string;
  category?: string;
  status?: string;
  bxheartoneOne?: string;
  bxcarttwoOne?: string;
  teakwoodchair?: string;
  twentyfour?: string;
}

export default function HomepageCardproduct({
  imageOne = "images/img_image.png",
  category = "Living Room",
  status,
  bxheartoneOne,
  bxcarttwoOne,
  teakwoodchair = "Teak wood chair",
  twentyfour = "$24",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[400px] w-full relative">
          <Img
            src={imageOne}
            alt="image_one"
            className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <Button
            size="lg"
            shape="square"
            className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
          >
            {category}
          </Button>
          <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
            {!!status ? (
              <Text
                as="p"
                className="flex justify-center items-center w-full h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] text-sm font-normal bg-red-A200"
              >
                {status}
              </Text>
            ) : null}
            <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-5">
              {!!bxheartoneOne ? (
                <Button color="black_900" shape="circle" className="w-[40px] shadow-xs">
                  <Img src="images/img_bx_heart_1.svg" />
                </Button>
              ) : null}
              {!!bxcarttwoOne ? (
                <Button color="yellow_100" shape="circle" className="w-[40px] shadow-xs">
                  <Img src="images/img_bx_cart_2.svg" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Heading size="lg" as="h1" className="tracking-[-0.50px] !font-raleway text-xl font-semibold">
          {teakwoodchair}
        </Heading>
        <Text size="lg" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px] text-lg font-normal">
          {twentyfour}
        </Text>
      </div>
    </div>
  );
}
