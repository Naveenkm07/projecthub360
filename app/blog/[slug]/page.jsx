import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { blogs } from '@/lib/blogData';
import Footer from '@/components/Footer';

// A simple utility to parse basic markdown to styled HTML for our blog
function parseMarkdown(content) {
    let html = content;
    
    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-black/50 p-6 rounded-2xl overflow-x-auto text-sm text-slate-300 font-mono my-8 border border-white/5 shadow-inner"><code>$2</code></pre>');
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-primary-500/10 text-primary-300 px-1.5 py-0.5 rounded-md font-mono text-sm border border-primary-500/20">$1</code>');
    // H2
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight">$1</h2>');
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    // Unordered Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-3 text-slate-400 list-disc marker:text-primary-500">$1</li>');
    // Ordered Lists
    html = html.replace(/^\d+\.\s(.*$)/gim, '<li class="ml-6 mb-3 text-slate-400 list-decimal marker:text-primary-500 marker:font-bold">$1</li>');

    // Paragraphs (Anything that is not a tag)
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        if (!p.trim()) return '';
        if (p.trim().startsWith('<')) return p;
        return \`<p class="text-slate-400 mb-6 leading-relaxed text-lg">\${p}</p>\`;
    }).join('\n');

    return html;
}

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default function BlogPostPage({ params }) {
    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    const htmlContent = parseMarkdown(blog.content);

    return (
        <div className="min-h-screen pt-32 pb-0 bg-[#070d1b]">
            <article className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8 font-medium">
                    <ArrowLeft size={18} /> Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-bold rounded-full">
                            {blog.category}
                        </span>
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {blog.date}</span>
                            <span className="flex items-center gap-1.5"><Clock size={16} /> {blog.readTime}</span>
                        </div>
                    </div>
                    
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-white/5 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-glow-sm">
                                {blog.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white font-medium">{blog.author}</p>
                                <p className="text-slate-500 text-sm">Author</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                </header>

                {/* Hero Image / Gradient */}
                <div className={\`w-full h-64 md:h-96 rounded-3xl mb-16 bg-gradient-to-br \${blog.coverGradient} shadow-2xl overflow-hidden relative\`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div 
                    className="prose prose-invert max-w-none mb-20 prose-p:text-slate-400 prose-headings:text-white"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5 mb-24">
                    {blog.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 glass rounded-xl text-slate-300 text-sm font-medium border border-white/5">
                            #{tag}
                        </span>
                    ))}
                </div>
            </article>

            <Footer />
        </div>
    );
}
