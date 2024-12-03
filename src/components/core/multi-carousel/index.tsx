import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";
import Cammera from "@/assets/img/svgs/camra.svg";
import "react-multi-carousel/lib/styles.css";

const images: string[] = [Cammera, Cammera, Cammera];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1920, min: 900 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
  },
  smmobile: {
    breakpoint: { max: 600, min: 400 },
    items: 1,
  },
  xsmobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

const CarouselComponent = ({ customItems, authChecks }: any) => {
  return (
    <Box sx={{ marginBottom: "-4px", width: "100%", height: "100%" }}>
      <Carousel
        responsive={responsive}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={1000}
        arrows={false}
      >
        {customItems.map((item: any, index: number) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            {authChecks && (
              <Image
                src={item}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  maxWidth: "600px", // Adjust this value as needed
                  height: "auto",
                }}
              />
            )}
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
