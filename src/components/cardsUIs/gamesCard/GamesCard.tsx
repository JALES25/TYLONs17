import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  link: string;
  image: string;
  videoSrc: string;
  description: string;
  reviews: string;
  reviewCount: number;
}

export default function GameCard({ title, link, image, videoSrc, description, reviews, reviewCount, }: GameCardProps) {
  return (
    <div className="card bg-gray-700 p-2 group overflow-hidden relative rounded-lg shadow-lg max-w-xs mt-4 ">
      {/* Image Section */}
      <Link href={link} className="absolute inset-0 z-10">
        {/* <a className="absolute inset-0 z-10"></a> */}
      </Link>
      <Image className="block object-cover w-full h48 md:h-54 lg:h-80 group-hover:opacity-40 transition-opacity duration-700" src={image} alt={title} width={300} height={300} />

      {/* Video Section */}
      <div className="absolute bg-black flex items-center group-hover:-top-0 group-hover:opacity-100 duration-700 top-full right-0 w-full opacity-0 h-1/2 transition-all">
        <div className="w-full">
          <video className="w-full" autoPlay loop muted preload="none">
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Game Info Section */}
      <div className="absolute bg-gradient-to-br from-blue-700 to-blue-900 text-white left-0 right-0 top-full text-base h-1/2 w-full opacity-50 transition-all group-hover:top-1/2 group-hover:opacity-100">
        <div className="py-4 px-7 text-xs">
          <div className="text-xl font-bold">{title}</div>
          <div className="mt-1">
            <span className="uppercase text-gray-400">Caption: </span>
            <span className="whitespace-nowrap">
              
              <p className="text-blue-300">{description}</p>
              
            </span>
          </div>
          <div className="mt-1">
            <span className="uppercase text-gray-400">All Reviews: </span>
            <span className="text-positive">{reviews}</span>
            <span className="text-gray-300"> ({reviewCount})</span>
          </div>
        </div>
        <div className="absolute left-0 pl-7 pt-1 ">
          <Link href={link}>
            <p className="px-4 py-2 text-base block text-green-300 rounded-sm border-2 border-green-400 bg-green-700 ">
              Play now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
