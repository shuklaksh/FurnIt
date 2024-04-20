import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, SelectBox, Input, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Navbar";
import HomepageCardproduct from "../../components/HomepageCardproduct";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Lakshay's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
          <Header className="flex justify-center items-center w-full p-[35px] sm:p-5 bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full md:px-5 max-w-[1290px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[450px] w-full relative">
                  <Img
                    src="images/img_rectangle_28.png"
                    alt="image_one"
                    className="justify-center h-[450px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[37%] h-full ml-[70px] gap-[30px] left-[5%] bottom-0 top-0 my-auto md:ml-5 absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <Heading as="h1" className="!text-yellow-100 tracking-[-0.50px] text-lg font-semibold">
                        Best Room Decor Items
                      </Heading>
                      <Heading
                        size="3xl"
                        as="h2"
                        className="!text-white-A700 tracking-[-0.50px] !font-raleway text-4xl font-bold leading-[60px]"
                      >
                        Our goods have the best quality and materials in the world
                      </Heading>
                    </div>
                    <Button
                      color="yellow_100"
                      size="9xl"
                      shape="square"
                      className="sm:px-5 tracking-[-0.50px] font-poppins font-bold min-w-[170px] sm:min-w-full"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row md:flex-col justify-start items-start w-full gap-5 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[60px]">
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Heading size="lg" as="h2" className="!font-raleway text-xl font-semibold">
                  Filter By Price
                </Heading>
                <div className="flex flex-row justify-between items-center w-full pr-[74px] md:pr-5">
                  <Input
                    color="gray_500"
                    size="xs"
                    variant="outline"
                    shape="round"
                    name="price"
                    placeholder="$0"
                    className="w-[42%]"
                  />
                  <Heading size="xs" as="h3" className="!font-plusjakartasans text-sm font-semibold">
                    -
                  </Heading>
                  <Input
                    color="gray_500"
                    size="xs"
                    variant="outline"
                    shape="round"
                    name="price"
                    placeholder="$2000"
                    className="w-[42%]"
                  />
                </div>
                <Img src="images/img_slider.svg" alt="slider_one" className="h-[16px]" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Heading size="lg" as="h4" className="!font-raleway text-xl font-semibold">
                  Filter By Color
                </Heading>
                <Img src="images/img_frame_48095956.svg" alt="image_two" className="h-[40px]" />
                <Img src="images/img_frame_48095957.svg" alt="image_three" className="h-[40px]" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Heading size="lg" as="h5" className="!font-raleway text-xl font-semibold">
                  Product Categories
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-5">
                  <Text
                    size="md"
                    as="p"
                    className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Chair (9)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Lamp (10)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Table (12)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Sofa (6)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Table (12)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Clock (5)
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] !font-poppins text-base font-normal"
                  >
                    Pillow (3)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Heading size="lg" as="h6" className="!font-raleway text-xl font-semibold">
                  Product Tag
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                  <div className="flex flex-row justify-start gap-2.5">
                    <Button
                      size="lg"
                      shape="round"
                      className="!text-yellow-100 tracking-[-0.50px] font-poppins border-blue_gray-900_01 border border-solid min-w-[66px]"
                    >
                      Chair
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[68px]"
                    >
                      Lamp
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[101px]"
                    >
                      Minimalist
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start gap-2.5">
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[59px]"
                    >
                      Sofa
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[58px]"
                    >
                      New
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[67px]"
                    >
                      Clock
                    </Button>
                  </div>
                  <Button
                    color="gray_500"
                    size="lg"
                    variant="outline"
                    shape="round"
                    className="tracking-[-0.50px] font-poppins min-w-[66px] sm:min-w-full"
                  >
                    Pillow
                  </Button>
                </div>
              </div>
              <div className="h-[400px] w-full relative">
                <Img
                  src="images/img_rectangle_29.png"
                  alt="image_four"
                  className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[87%] gap-[15px] bottom-[10%] right-0 left-0 m-auto absolute">
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-white-A700 !font-raleway text-center text-xl font-bold leading-[35px]"
                  >
                    Make a purchase now and get 50% discount
                  </Heading>
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="round"
                    className="!text-black-900 tracking-[-0.50px] font-poppins font-semibold border-yellow-100 border border-solid min-w-[107px] sm:min-w-full"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[75%] md:w-full gap-[49px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row justify-center w-[43%] sm:w-full">
                  <div className="flex flex-row sm:flex-col justify-center w-full sm:gap-5">
                    <Input
                      size="md"
                      shape="square"
                      name="office_chair"
                      placeholder="Office Chair"
                      className="w-[74%] md:w-full !text-black-900_3f"
                    />
                    <Button
                      size="6xl"
                      shape="square"
                      className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold min-w-[107px]"
                    >
                      Search
                    </Button>
                  </div>
                </div>
                <SelectBox
                  shape="square"
                  indicator={<Img src="images/img_evaarrowiosforwardfill.svg" alt="eva:arrow-ios-forward-fill" />}
                  name="sortby"
                  placeholder="Sort By"
                  options={dropDownOptions}
                  className="w-[8%] sm:w-full gap-px text-black-900 font-raleway font-medium"
                />
              </div>
              <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                <HomepageCardproduct
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_8.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_10.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_11.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_12.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_9.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_13.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-full pl-[371px] pr-14 gap-2.5 md:px-5">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                <div className="flex flex-row w-[24%] gap-2.5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      1
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      3
                    </Button>
                  </div>
                </div>
                <Button color="gray_100" size="md" className="w-[35px] rounded-[17px]">
                  <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                </Button>
                <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
