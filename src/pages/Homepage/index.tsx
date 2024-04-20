import React from "react";
import AliceCarousel, { DotsItem, EventObject } from "react-alice-carousel";
import { Button, Heading, Img, Slider, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar/Navbar";
import HomepageCardblog from "../../components/HomepageCardblog";
import HomepageCardproduct from "../../components/HomepageCardproduct";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full px-14 py-[75px] md:p-5 bg-orange-50">
            <div className="flex flex-row md:flex-col justify-between items-center w-full my-[5px] md:gap-10 max-w-[1290px]">
              <div className="flex flex-col items-start justify-start w-[48%] md:w-full gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-[26px]">
                  <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] text-xl font-normal">
                    Interior Needs
                  </Text>
                  <Text
                    as="p"
                    className="flex !text-black-900 tracking-[-0.50px] !font-pollerone text-[40px] font-normal leading-[60px]"
                  >
                    <span className="text-black-900 font-raleway font-bold">
                    Various new collections of furniture to decorate the corner of your house.
                    </span>
                  </Text>
                </div>
                <Button
                  size="9xl"
                  shape="square"
                  className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-medium border-blue_gray-900_01 border-2 border-solid min-w-[218px] sm:min-w-full"
                >
                  Shop Now
                </Button>
              </div>
              <Img
                src="images/img_nathan_oakley_o.png"
                alt="nathanoakleyo"
                className="w-[48%] md:w-full md:h-[566px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-11 p-[41px] md:p-5 bg-black-900">
          <Text size="xl" as="p" className="!text-gray-50_01 tracking-[-0.50px] text-center text-xl font-normal">
            Various brands have used our products
          </Text>
          <div className="flex flex-row md:flex-col justify-start w-full gap-[50px] md:gap-5 max-w-[1094px]">
            <Img src="images/img_search_gray_50_01.svg" alt="search_three" className="h-[48px]" />
            <Img src="images/img_company_logo_company109.svg" alt="companylogo_one" className="h-[48px]" />
            <Img src="images/img_company_logo_company109_gray_50_01.svg" alt="companylogo" className="h-[48px]" />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x141.svg"
              alt="companylogo"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x134.svg"
              alt="companylogo"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x132.svg"
              alt="companylogo"
              className="h-[48px]"
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-col w-full gap-5 md:px-5 max-w-[1290px]">
          <div className="flex flex-row sm:flex-col justify-between items-center w-[50%] md:w-full p-6 sm:gap-10 sm:p-5 bg-gradient">
            <div className="flex flex-col items-start justify-start w-[55%] sm:w-full ml-1.5 gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text size="lg" as="p" className="!text-gray-50_01 tracking-[-0.50px] text-lg font-normal">
                  Living Room
                </Text>
                <Heading
                  as="h1"
                  className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-4xl font-bold"
                >
                  The best foam padded chair
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[155px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_sam_moghadam_kh.png"
              alt="image"
              className="w-[31%] md:h-auto sm:w-full mr-1.5 object-cover"
            />
          </div>
          <div className="flex flex-row sm:flex-col justify-between items-center w-[50%] md:w-full p-[30px] sm:gap-10 sm:p-5 bg-gradient">
            <div className="flex flex-col items-start justify-start w-[54%] sm:w-full gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text size="lg" as="p" className="!text-gray-50_01 tracking-[-0.50px] text-lg font-normal">
                  Living Room
                </Text>
                <Heading
                  as="h2"
                  className="!text-gray-50_01 tracking-[-0.50px] !font-raleway text-4xl font-bold"
                >
                  Latest model chandelier
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[155px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_phil_desforges.png"
              alt="phildesforges"
              className="w-[34%] md:h-auto sm:w-full my-[22px] sm:my-0 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[45px] md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-center w-full gap-[21px]">
              <Heading
                as="h2"
                className="flex tracking-[-0.50px] !font-raleway text-center text-[40px] font-bold"
              >
                <span className="text-black-900">Our Newest Product</span>
              </Heading>
              <Text size="lg" as="p" className="mb-1 !text-gray-500 tracking-[-0.50px] text-center text-lg font-normal">
                Made of the best materials and with a design that follows the times
              </Text>
            </div>
            {/* Product Display Slider*/}
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
              renderDotsItem={(props: DotsItem) => {
                return props?.isActive ? (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                ) : (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-[47px] mx-auto">
                    <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                      <HomepageCardproduct
                        status="New"
                        bxheartoneOne="images/img_bx_heart_1.svg"
                        bxcarttwoOne="images/img_bx_cart_2.svg"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_400x308.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_1.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_2.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                    </div>
                    <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                      <HomepageCardproduct
                        imageOne="images/img_image_3.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_4.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_5.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_6.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
        <div className="h-[535px] w-full relative">
          <div className="flex flex-col items-center justify-start h-full w-[535px] sm:h-auto right-0 bottom-0 top-0 my-auto absolute">
            <Img src="images/img_inside_weather.png" alt="insideweather" className="w-[535px] md:h-auto object-cover" />
          </div>
          <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[13px] m-auto bg-yellow-100 absolute">
            <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px] md:ml-5">
              <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                <Text size="2xl" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px] text-2xl font-normal">
                  Interior Modern
                </Text>
                <Heading
                  as="h2"
                  className="tracking-[-0.50px] !font-raleway text-[40px] font-bold leading-[60px]"
                >
                  Arrange your home in such a way with our modern interiors
                </Heading>
              </div>
              <Button
                size="9xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[218px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[67px] md:px-5 max-w-[1290px]">
            <Heading
              as="h2"
              className="!text-blue_gray-900_01 tracking-[-0.50px] !font-raleway text-center text-[32px] font-bold"
            >
              New Arrival
            </Heading>
            <div className="flex flex-col w-full gap-[47px]">
              <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                <HomepageCardproduct
                  status="New"
                  bxheartoneOne="images/img_bx_heart_1.svg"
                  bxcarttwoOne="images/img_bx_cart_2.svg"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_8.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_9.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[19px]">
                <HomepageCardproduct
                  imageOne="images/img_image_10.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_11.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_12.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_13.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-between w-full md:gap-10 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-[50px]">
              <Heading
                as="h2"
                className="tracking-[-0.50px] !font-raleway text-[40px] font-bold leading-[60px]"
              >
                We guarantee the safety of your shopping
              </Heading>
              <div className="justify-center w-full gap-[50px] grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon.svg" alt="fast_shipping" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h3" className="tracking-[-0.50px] !font-raleway text-xl font-semibold">
                      Fast Shipping
                    </Heading>
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px] text-sm font-normal leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_gray_50_01.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h4" className="tracking-[-0.50px] !font-raleway text-xl font-semibold">
                      Safe Delivery
                    </Heading>
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px] text-sm font-normal leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_gray_50_01_60x63.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2">
                    <Heading as="h5" className="tracking-[-0.50px] !font-raleway text-xl font-semibold">
                      365 Days Return
                    </Heading>
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px] text-sm font-normal leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_60x63.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading as="h6" className="tracking-[-0.50px] !font-raleway text-xl font-semibold">
                      24 hours CS
                    </Heading>
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px] text-sm font-normal leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_16.png"
              alt="image_one"
              className="w-[47%] md:w-full md:h-[640px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                as="h2"
                className="tracking-[-0.50px] !font-raleway text-center text-[40px] font-semibold"
              >
                Read Our Latest Blog
              </Heading>
              <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center text-lg font-normal">
                We write various things related to furniture, from tips and what things I need to pay attention to when
                choosing furniture
              </Text>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-5">
              <HomepageCardblog className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6" />
              <HomepageCardblog
                image="images/img_rectangle_18_400x416.png"
                className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6"
              />
              <HomepageCardblog
                image="images/img_rectangle_18_1.png"
                className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
