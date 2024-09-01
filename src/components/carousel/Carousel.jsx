import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "@/components/carousel/NextArrow";
import PrevArrow from "@/components/carousel/PrevArrow";
import cn from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenContext } from "../../contexts/screenContext";

function Carousel({ project }) {
  const [images, setImages] = useState([]);
  const { width } = useScreenContext();

  useEffect(() => {
    const importAllImages = async () => {
      // On importe tous les chemins des images du dossier projects
      const imageModules = import.meta.glob(
        "@/assets/projects/*/*.{png,jpg,jpeg,JPG}"
      );

      // Filtre les chemins pour ne garder que ceux qui correspondent au projet spécifique
      const projectImages = Object.keys(imageModules).filter((path) =>
        path.includes(`/projects/${project}/`)
      );

      console.log(projectImages);

      // Charger les modules des images et les stocker dans un tableau
      const imagesArray = await Promise.all(
        projectImages.map((path) => imageModules[path]())
      );
      console.log(imagesArray);
      setImages(imagesArray.map((module) => module.default)); // `module.default` est le chemin d'accès à l'image
    };

    importAllImages();
  }, [project]);

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: width > 768 ? 3 : 1,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow size="2xl" />,
    prevArrow: <PrevArrow size="2xl" />,
    beforeChange: (current, next) => setImageIndex(next),
    autoplay: false,
    swipeToSlide: true,
  };

  return (
    <Slider
      className=" w-full h-full rounded-3xl overflow-hidden flex flex-col justify-center"
      {...settings}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={cn(
            "transition-transform cursor-pointer flex h-full object-contain max-h-dvh",
            idx === imageIndex ? "scale-100" : "scale-75 opacity-50"
          )}
        >
          <img
            src={img}
            alt="screen du projet"
            className="rounded-3xl bg-white/20 p-1 active:outline-none object-contain h-full mx-auto max-h-dvh"
          />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
