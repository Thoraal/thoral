import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 my-auto">
            <Image src="/home-4.png" priority layout="intrinsic"  width={180} height={180} alt="Avatar" className="mx-auto md:w-[300px] md:h-[300px]"/>
                <div className="flex flex-col justify-center max-w-md ">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Soy Alejandro Toral, <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollador',
                                1500,
                                'Contador',
                                1500,
                                'Financiero',
                                1500,
                                'Analista de Datos',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Apasionado de la tecnología siempre en búsqueda de nuevas oportunidades para aprender y crecer en un mundo que cambia rápidamente.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 pb-20">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyectos
                        </a>
                        <a href="https://wa.me/+528142555089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Contactame 📱
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;