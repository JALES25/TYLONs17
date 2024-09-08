

import Dashboard from "@/components/layout/dashboard/Dashboard"

const blogPosts = [
    { title: 'Blog Post 1', link: '/blog/1', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 1.', date: '2022-10-10' },
    { title: 'Blog Post 2', link: '/blog/2', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 2.', date: '2022-10-10' },
    { title: 'Blog Post 3', link: '/blog/3', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 3.', date: '2022-10-10' },
    { title: 'Blog Post 4', link: '/blog/4', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 4.', date: '2022-10-10' },
    { title: 'Blog Post 5', link: '/blog/5', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 5.', date: '2022-10-10' },
    { title: 'Blog Post 6', link: '/blog/6', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 6.', date: '2022-10-10' },
    { title: 'Blog Post 7', link: '/blog/7', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 7.', date: '2022-10-10' },
    { title: 'Blog Post 8', link: '/blog/8', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 8.', date: '2022-10-10' },
    { title: 'Blog Post 9', link: '/blog/9', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 9.', date: '2022-10-10' },
    { title: 'Blog Post 10', link: '/blog/10', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 10.', date: '2022-10-10' },
    { title: 'Blog Post 11', link: '/blog/11', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 11.', date: '2022-10-10' },
    { title: 'Blog Post 12', link: '/blog/12', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 12.', date: '2022-10-10' },
    { title: 'Blog Post 13', link: '/blog/13', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 13.', date: '2022-10-10' },
    { title: 'Blog Post 14', link: '/blog/14', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 14.', date: '2022-10-10' },
    { title: 'Blog Post 15', link: '/blog/15', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 15.', date: '2022-10-10' },
    { title: 'Blog Post 16', link: '/blog/16', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 16.', date: '2022-10-10' },
    { title: 'Blog Post 17', link: '/blog/17', type: 'blog' as 'blog', image: 'https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=600', content: 'This is the content of blog post 17.', date: '2022-10-10' },
    // more blog posts here
]

export default function Blog() {
    return (    
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-800">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ">Blogs Dashboard</h1>
            <hr className="border-2"/>
            <Dashboard items={blogPosts} title="My blogs" className="bg-gray-900"/>
        </div>
    )
}

