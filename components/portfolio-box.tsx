import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    };
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ data: { id, title, image, urlGithub, urlDemo } }) => {
    return (
        <div key={id} className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>
            <Image
                src={image}
                alt={`${title} Image`}
                width={300}
                height={300}
                className="w-full rounded-2xl h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            />

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white flex-1 text-center"
                >
                    GitHub
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white flex-1 text-center"
                >
                    Descargar
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;
