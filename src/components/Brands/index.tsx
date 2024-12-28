import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section id="about" className="pt-5">
      <div className="container">
        <div className="text-[40px] md:text-[50px] font-bold mb-8">Партнеры</div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:space-y-0 sm:justify-center">
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
    <div className="flex items-center w-full sm:w-[50%] md:w-[150px] lg:w-1/3 xl:w-1/4 justify-center px-[5px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[80px] w-full bg-white rounded-[10px] opacity-90 transition hover:opacity-100 dark:opacity-90 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
