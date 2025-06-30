"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ArrowLeft, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Calendar
} from "lucide-react";

// Mock article data - in a real app, this would come from an API
const mockArticles = {
  "1": {
    id: "1",
    title: "Modern Sustainable Architecture: Building for the Future",
    description: "Exploring innovative approaches to sustainable design that balance environmental responsibility with aesthetic excellence",
    content: `
      <p>In today's rapidly evolving architectural landscape, sustainability has emerged as more than just a trend—it's become a fundamental principle that shapes how we design and construct buildings for future generations.</p>
      
      <h2>The Rise of Sustainable Design</h2>
      <p>Sustainable architecture represents a paradigm shift in how we approach building design. It encompasses everything from material selection and energy efficiency to water conservation and indoor air quality. Modern architects are increasingly adopting green building standards such as LEED, BREEAM, and Living Building Challenge to ensure their projects meet rigorous environmental criteria.</p>
      
      <h2>Key Principles of Sustainable Architecture</h2>
      <p>Several core principles guide sustainable architectural practice:</p>
      <ul>
        <li><strong>Energy Efficiency:</strong> Designing buildings that minimize energy consumption through passive solar design, high-performance insulation, and efficient HVAC systems.</li>
        <li><strong>Material Selection:</strong> Choosing renewable, recycled, or locally-sourced materials with low environmental impact.</li>
        <li><strong>Water Conservation:</strong> Implementing rainwater harvesting, greywater recycling, and drought-resistant landscaping.</li>
        <li><strong>Site Integration:</strong> Designing buildings that work harmoniously with their natural environment and local climate.</li>
      </ul>
      
      <h2>Innovative Technologies</h2>
      <p>The integration of cutting-edge technologies is revolutionizing sustainable architecture. Smart building systems that monitor and optimize energy usage, photovoltaic panels that generate renewable energy, and green roofs that provide insulation while supporting biodiversity are just a few examples of how technology is enhancing sustainable design.</p>
      
      <h2>Case Studies in Excellence</h2>
      <p>Several groundbreaking projects demonstrate the potential of sustainable architecture. The Bullitt Center in Seattle, often called the "greenest commercial building in the world," generates its own energy and treats its own water. Similarly, the Crystal in London showcases how sustainable design can be both environmentally responsible and visually stunning.</p>
      
      <h2>The Future of Sustainable Architecture</h2>
      <p>As we look toward the future, sustainable architecture will continue to evolve. Emerging concepts like regenerative design—which goes beyond sustainability to actually improve environmental conditions—and biophilic design—which incorporates natural elements to enhance human well-being—represent the next frontier in green building.</p>
      
      <p>The challenge for today's architects is to create buildings that not only minimize their environmental impact but also provide healthy, inspiring spaces for their occupants. By embracing sustainable design principles and innovative technologies, we can build a future that is both environmentally responsible and architecturally excellent.</p>
    `,
    author: {
      name: "Olajide Funminiyi",
      avatar: "/assets/images/article-1.jpg",
      bio: "Sustainable Architecture Specialist with 15+ years of experience in green building design"
    },
    category: "Architecture",
    tags: ["sustainability", "green building", "energy efficiency", "LEED"],
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    views: "2,456",
    likes: "89",
    comments: "23",
    image: "/assets/images/article-1.jpg",
    isLiked: false,
    isBookmarked: false
  },
  "2": {
    id: "2",
    title: "Structural Engineering Innovations in High-Rise Construction",
    description: "Examining the latest advances in structural engineering that are enabling taller, safer, and more efficient skyscrapers",
    content: `<p>High-rise construction content...</p>`,
    author: {
      name: "Sarah Chen",
      avatar: "/assets/images/article-2.jpg",
      bio: "Structural Engineer specializing in high-rise and seismic design"
    },
    category: "Engineering",
    tags: ["structural engineering", "high-rise", "seismic design", "materials"],
    publishedAt: "2024-01-12",
    readTime: "10 min read",
    views: "1,834",
    likes: "67",
    comments: "18",
    image: "/assets/images/article-2.jpg",
    isLiked: false,
    isBookmarked: false
  },
  "3": {
    id: "3",
    title: "Smart Construction Technologies: The Digital Transformation of Building",
    description: "How IoT, AI, and robotics are revolutionizing construction processes and project management",
    content: `<p>Smart construction content...</p>`,
    author: {
      name: "Michael Johnson",
      avatar: "/assets/images/article-3.jpg",
      bio: "Construction Technology Consultant and Digital Innovation Expert"
    },
    category: "Technology",
    tags: ["IoT", "AI", "robotics", "construction tech"],
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    views: "3,123",
    likes: "145",
    comments: "34",
    image: "/assets/images/article-3.jpg",
    isLiked: false,
    isBookmarked: false
  }
};

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  publishedAt: string;
  likes: number;
  isLiked: boolean;
  replies: Reply[];
}

interface Reply {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  publishedAt: string;
  likes: number;
  isLiked: boolean;
}

export default function ArticlePage() {
  const params = useParams();
  const articleId = params.id as string;
  const [article] = useState(mockArticles[articleId as keyof typeof mockArticles] || null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        avatar: "/assets/images/article-2.jpg"
      },
      content: "Great article! I particularly found the section on sustainable materials very insightful. Have you considered discussing biophilic design in future articles?",
      publishedAt: "2024-01-16T10:30:00Z",
      likes: 5,
      isLiked: false,
      replies: [
        {
          id: 101,
          author: {
            name: "Olajide Funminiyi",
            avatar: "/assets/images/article-1.jpg"
          },
          content: "Thank you for your feedback! Biophilic design is definitely on my list for upcoming articles. It's such an important aspect of creating healthy built environments.",
          publishedAt: "2024-01-16T14:20:00Z",
          likes: 2,
          isLiked: false
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Michael Rodriguez",
        avatar: "/assets/images/article-3.jpg"
      },
      content: "The case studies you mentioned are excellent examples. I've been working on a similar project and this gives me some great ideas for implementation.",
      publishedAt: "2024-01-16T08:15:00Z",
      likes: 3,
      isLiked: false,
      replies: []
    },
    {
      id: 3,
      author: {
        name: "Emily Chen",
        avatar: "/assets/images/article-4.jpg"
      },
      content: "Could you elaborate more on the cost implications of implementing these sustainable technologies? That would be very helpful for project planning.",
      publishedAt: "2024-01-15T16:45:00Z",
      likes: 8,
      isLiked: false,
      replies: []
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    if (article) {
      setLikes(parseInt(article.likes));
      setIsLiked(article.isLiked);
      setIsBookmarked(article.isBookmarked);
    }
  }, [article]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      author: {
        name: "User",
        avatar: "/assets/images/article-1.jpg"
      },
      content: newComment,
      publishedAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
      replies: []
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleCommentLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  const handleAddReply = (commentId: number) => {
    if (!replyContent.trim()) return;
    
    const reply: Reply = {
      id: Date.now(),
      author: {
        name: "User",
        avatar: "/assets/images/article-1.jpg"
      },
      content: replyContent,
      publishedAt: new Date().toISOString(),
      likes: 0,
      isLiked: false
    };
    
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));
    
    setReplyContent("");
    setReplyingTo(null);
  };

  const handleReplyLike = (commentId: number, replyId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? {
            ...comment,
            replies: comment.replies.map(reply =>
              reply.id === replyId
                ? {
                    ...reply,
                    isLiked: !reply.isLiked,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
                  }
                : reply
            )
          }
        : comment
    ));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!article) {
    return (
      <main className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-gray-400 text-sm">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            {article.description}
          </p>

          {/* Author and Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">{article.author.name}</h3>
                <p className="text-gray-400 text-sm">{article.author.bio}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{article.views} views</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-8 mb-12">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{likes}</span>
            </button>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">{article.comments}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBookmark}
              className={`transition-colors ${
                isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              <Bookmark className={`w-6 h-6 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={handleShare}
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{article.author.name}</h3>
              <p className="text-gray-300 mb-4">{article.author.bio}</p>
              <Link href="/profile" className="text-yellow-500 hover:text-yellow-400 font-medium">
                View Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Comments ({comments.length})
          </h3>

          {/* Add Comment Form */}
          <div className="mb-8">
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 resize-none h-24"
                />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-900 rounded-lg p-6">
                {/* Comment Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{comment.author.name}</h4>
                      <p className="text-sm text-gray-400">
                        {new Date(comment.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment Content */}
                <p className="text-gray-300 mb-4">{comment.content}</p>

                {/* Comment Actions */}
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleCommentLike(comment.id)}
                    className={`flex items-center space-x-2 text-sm ${
                      comment.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    } transition-colors`}
                  >
                    <Heart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                    <span>{comment.likes}</span>
                  </button>
                  
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-4 ml-4 pl-4 border-l-2 border-gray-700">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-semibold">
                        U
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder={`Reply to ${comment.author.name}...`}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 resize-none h-20 text-sm"
                        />
                        <div className="flex justify-end space-x-2 mt-2">
                          <button
                            onClick={() => {
                              setReplyingTo(null);
                              setReplyContent("");
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleAddReply(comment.id)}
                            disabled={!replyContent.trim()}
                            className="bg-yellow-500 text-black px-4 py-1 rounded text-sm font-medium hover:bg-yellow-600 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 ml-4 pl-4 border-l-2 border-gray-700 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={reply.author.avatar}
                                alt={reply.author.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h5 className="font-medium text-white text-sm">{reply.author.name}</h5>
                              <p className="text-xs text-gray-400">
                                {new Date(reply.publishedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">{reply.content}</p>
                        
                        <button
                          onClick={() => handleReplyLike(comment.id, reply.id)}
                          className={`flex items-center space-x-2 text-xs ${
                            reply.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          } transition-colors`}
                        >
                          <Heart className={`w-3 h-3 ${reply.isLiked ? 'fill-current' : ''}`} />
                          <span>{reply.likes}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mock related articles */}
            <Link href="/article/2" className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
              <div className="relative h-48">
                <Image
                  src="/assets/images/article-2.jpg"
                  alt="Related Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Structural Engineering Innovations</h4>
                <p className="text-gray-400 text-sm">Latest advances in structural engineering for high-rise construction</p>
              </div>
            </Link>
            
            <Link href="/article/3" className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
              <div className="relative h-48">
                <Image
                  src="/assets/images/article-3.jpg"
                  alt="Related Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Smart Construction Technologies</h4>
                <p className="text-gray-400 text-sm">How IoT and AI are transforming the construction industry</p>
              </div>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
