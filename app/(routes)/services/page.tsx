import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl">
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className="grid items-center justify-center h-full gap-6 mx-auto md:grid-cols-2">
          <div className="max-w-[450px] mx-auto">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis <span className="font-bold text-secondary">servicios.</span>
            </h1>
            <p className="mb-3 text-xl text-gray-300">
              Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
            </p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
              Contacta conmigo
            </button>
          </div>

          {/* SLIDER */}
          <div className="mx-auto">
            <SliderServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
