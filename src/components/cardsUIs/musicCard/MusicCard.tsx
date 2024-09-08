import Link from 'next/link'


export default function MusicCard({ title, link }: { title: string; link: string }) {
    return (
      <div className="card bg-gray-700 p-4">
        <h3 className="text-xl">{title}</h3>
        <Link href={link}>
          <a className="text-purple-500">Listen to Music</a>
        </Link>
      </div>
    )
  }