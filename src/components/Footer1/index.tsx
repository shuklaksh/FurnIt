import React from "react";
import { Text, Button, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer1({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[148px] mx-auto md:px-5 max-w-[1301px]">
        <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
          <div className="flex flex-col items-start justify-start w-[28%] md:w-full gap-4">
            <Heading
              size="2xl"
              as="h2"
              className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-[32px] font-bold"
            >
              Furnit.
            </Heading>
            <Text size="md" as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81 leading-[35px]">
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel
              alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-6">
            <Heading
              size="lg"
              as="h5"
              className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-xl font-semibold"
            >
              Customer
            </Heading>
            <div className="flex flex-col items-start justify-start gap-6">
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Order Status
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Collections
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Our Story
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Affiliates
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Security
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-6">
            <Heading
              size="lg"
              as="h5"
              className="mt-[5px] !text-gray-50_01 tracking-[-0.50px] !font-raleway text-xl font-semibold"
            >
              Information
            </Heading>
            <div className="flex flex-col items-start justify-start gap-6">
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Customer Service
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                Careers
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-sm font-normal opacity-0.81">
                FAQ
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-[25px]">
            <Heading
              size="lg"
              as="h5"
              className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-xl font-semibold"
            >
              Follow Us
            </Heading>
            <div className="flex flex-row justify-between w-full">
              <Button color="yellow_100" shape="circle" className="w-[40px]">
                <Img src="images/img_bxl_instagram.svg" />
              </Button>
              <Button color="yellow_100" shape="circle" className="w-[40px]">
                <Img src="images/img_bxl_facebook.svg" />
              </Button>
              <Button color="yellow_100" shape="circle" className="w-[40px]">
                <Img src="images/img_bxl_twitter.svg" />
              </Button>
              <Button color="yellow_100" shape="circle" className="w-[40px]">
                <Img src="images/img_bxl_tiktok.svg" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
          <Text size="md" as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81">
            © Copyright 2022. All Rights Reserved.
          </Text>
          <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
            <Text size="md" as="p" className="mb-px tracking-[-0.50px] text-base font-normal opacity-0.81">
              Terms of condition
            </Text>
            <Text size="md" as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81">
              Privacy Policy
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
