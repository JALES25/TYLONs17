
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  content: string;
  link: string;
  // type?: 'blog';
}

export default function BlogsCard({ title, date, image, content, link }: BlogCardProps): JSX.Element {
  return (
    <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg bg-gray-800">
      <Image src={image} width={300} height={300} alt="" className="object-cover w-full h48 md:h-54 lg:h-60" />
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 p-4">
        <time dateTime={date} className="block text-xs text-white/90">
          {date}
        </time>
        <h3 className="mt-0.5 text-lg text-white">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          {content}...
        </p>
        <Link href={link}>
          <p className="text-blue-500 flex gap-2 justify-center items-center hover-text-blue-400"> <FaArrowCircleRight /> Read Blog</p>
        </Link>
      </div>
      
    </div>
  );
};