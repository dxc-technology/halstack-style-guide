// components/Image.js
import NextImage from "next/image";

const customLoader = ({ src }: { src: string }) => {
  return src;
};

type ImageProps = {
  src: any;
  alt: string;
};
export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader}/>;
}
