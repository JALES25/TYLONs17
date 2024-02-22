import Dashboard from "@/components/layout/dashboard/Dashboard"

const blogPosts = [
    { title: 'Blog Post 1', link: '/blog/1' },
    { title: 'Blog Post 2', link: '/blog/2' },
    { title: 'Blog Post 3', link: '/blog/3' },
    { title: 'Blog Post 4', link: '/blog/4' },
    { title: 'Blog Post 5', link: '/blog/5' },
    { title: 'Blog Post 6', link: '/blog/6' },
    // more blog posts here
]

export default function Blog() {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-800">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Blogs Dashboard</h1>
            <hr />
            <Dashboard items={blogPosts} title="My blogs" className="bg-gray-900"/>
        </div>
    )
}