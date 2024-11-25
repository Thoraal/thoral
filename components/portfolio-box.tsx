import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Import dynamic icons to prevent SSR issues
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub), { ssr: false });
const FaDownload = dynamic(() => import("react-icons/fa").then(mod => mod.FaDownload), { ssr: false });

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    };
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ data: { title, image, urlGithub, urlDemo } }) => {
    return (
        <div className="p-4 rounded-xl bg-white/20 backdrop-blur-md transition duration-300 hover:bg-white/30">
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>
            <Image
                src={image}
                alt={`${title} Image`}
                width={250}
                height={250}
                className="w-full rounded-2xl h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            />

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-sm transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white flex-1 text-center flex items-center justify-center gap-2 transform hover:scale-110 hover:bg-opacity-90"
                >
                    <FaGithub /> GitHub
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-sm transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white flex-1 text-center flex items-center justify-center gap-2 transform hover:scale-110 hover:bg-opacity-90"
                >
                    <FaDownload /> Descargar
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;