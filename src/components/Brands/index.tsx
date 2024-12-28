import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section id="about" className="pt-5">
      <div className="container">
      <div className="text-[40px] md:text-[50px] font-bold mb-8 ">Партнеры</div>
        <div className="flex flex-wrap justify-center">
          {brandsData.map((brand, index) => (
            <SingleBrand key={index} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center w-[50%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 sm:h-1/2 md:h-[80px] lg:h-1/3 xl:h-[50px] justify-center my-[2px] px-[5px] md:mt-10">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[80px] w-full opacity-80 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
