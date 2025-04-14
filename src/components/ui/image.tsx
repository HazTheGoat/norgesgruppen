import { Box, Breakpoint } from "@mui/material";

type ImageProps = {
  src: string;
  alt: string;
  width?: Partial<{ [key in Breakpoint]: number } | number>;
  height?: Partial<{ [key in Breakpoint]: number } | number>;
  lazyLoad?: boolean;
};

export const ImageComponent = ({
  src,
  alt,
  width,
  height,
  lazyLoad = true,
}: ImageProps) => {
  const srcSet = `${src}large.jpg 1600w,
                ${src}medium.jpg 800w,
                ${src}small.jpg 400w`;

  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        backgroundColor: "#ffffff",
        objectFit: "contain",
      }}
    >
      <img
        src={`https://bilder.ngdata.no/${src}/medium.jpg`} // Fallback
        srcSet={srcSet}
        alt={alt}
        loading={lazyLoad ? "lazy" : "eager"}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </Box>
  );
};
