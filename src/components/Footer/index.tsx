import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-row md:flex-col justify-start w-full gap-11  bg-gradient">
        <div className="flex flex-col items-center justify-start w-[48%] md:w-full ml-[13px] gap-10">
          <div className="flex flex-col items-center justify-start w-full gap-2.5">
            <Heading
              as="h1"
              className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-[40px] font-bold leading-[60px]"
            >
              Subscribe now and get 10% off all items
            </Heading>
            <Text as="p" className="!text-gray-50_01 tracking-[-0.50px] text-base font-normal leading-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text.
            </Text>
          </div>
          <div className="flex flex-row sm:flex-col justify-start w-full gap-px sm:gap-5">
            <Input shape="square" name="email" placeholder="Your email here.." className="w-[74%] md:w-full" />
            <Button
              size="10xl"
              shape="square"
              className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px]"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Img
          src="images/img_pexels_photo_by.png"
          alt="pexelsphotoby"
          className="w-[48%] md:w-full md:h-[309px] object-cover"
        />
      </div>
      <div className="flex flex-row justify-end w-full p-12 md:ml-0 md:p-5 bg-black-900">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[28%] md:w-full gap-4">
              <Heading
                as="h2"
                className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-[32px] font-bold"
              >
                Furnit.
              </Heading>
              <Text as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81 leading-[35px]">
                Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel
                alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-6">
              <Heading
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
            <Text as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81">
              © Copyright 2022. All Rights Reserved.
            </Text>
            <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
              <Text as="p" className="mb-px tracking-[-0.50px] text-base font-normal opacity-0.81">
                Terms of condition
              </Text>
              <Text as="p" className="tracking-[-0.50px] text-base font-normal opacity-0.81">
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
