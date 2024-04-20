import React from "react";
import { Img, Text } from "..";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full px-8 mx-auto md:gap-10 md:px-5">
        <Img src="images/img_frame_146.svg" alt="image" className="h-[2rem]" />
        <div className="flex flex-row justify-between items-center w-[39%] md:w-full">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Link to={"/homepage"}>
              <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px] text-lg font-normal">
                Home
              </Text>
            </Link>
          </div>
          <Link to={"/shop"}>
            <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px] text-lg font-normal">
              Shop
            </Text>
          </Link>
          <Link to={"/blog"}>
            <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px] text-lg font-normal">
              Blog
            </Text>
          </Link>
          <Link to={"/aboutus"}>
            <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px] text-lg font-normal">
              About
            </Text>
          </Link>
          <Link to={"/aboutus"}>
            <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px] text-lg font-normal">
              Contact
            </Text>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-auto gap-[30px]">
          <Link to={"/aboutus"}>
            <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
          </Link>
          <Link to={"/aboutus"}>
            <Img src="images/img_list_black_900.svg" alt="list_one" className="h-[24px] w-[24px]" />
          </Link>
          <Link to={"/aboutus"}>
            <Img src="images/img_list.svg" alt="list_three" className="h-[24px] w-[24px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
