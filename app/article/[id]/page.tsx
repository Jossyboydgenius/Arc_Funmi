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
    content: `
      <p>The world of high-rise construction is experiencing a renaissance driven by groundbreaking innovations in structural engineering. As cities grow denser and land becomes more precious, engineers are pushing the boundaries of what's possible in vertical construction.</p>
      
      <h2>Advanced Materials Revolution</h2>
      <p>Modern high-rise construction benefits from revolutionary materials that offer superior strength-to-weight ratios. Ultra-high-performance concrete (UHPC) provides exceptional durability and allows for thinner structural elements. Carbon fiber reinforced polymers (CFRP) offer lightweight alternatives to traditional steel reinforcement, while advanced steel alloys provide greater tensile strength and corrosion resistance.</p>
      
      <h2>Innovative Structural Systems</h2>
      <p>Contemporary structural engineering employs sophisticated systems to maximize efficiency and safety:</p>
      <ul>
        <li><strong>Outrigger Systems:</strong> These connect the building's core to perimeter columns, effectively distributing lateral loads and reducing sway.</li>
        <li><strong>Mega-Frame Structures:</strong> Large-scale structural frameworks that span multiple floors, creating open, flexible interior spaces.</li>
        <li><strong>Damping Systems:</strong> Tuned mass dampers and viscous dampers that reduce building movement during wind and seismic events.</li>
        <li><strong>Diagrid Systems:</strong> Diagonal grid structures that provide both structural support and architectural expression.</li>
      </ul>
      
      <h2>Seismic and Wind Engineering</h2>
      <p>Modern high-rises must withstand extreme environmental forces. Advanced computational fluid dynamics (CFD) modeling helps engineers understand wind loads and optimize building shapes to reduce wind resistance. Seismic isolation systems and energy dissipation devices protect structures in earthquake-prone regions.</p>
      
      <h2>Digital Design and Analysis</h2>
      <p>Building Information Modeling (BIM) and advanced structural analysis software enable engineers to optimize designs with unprecedented precision. Finite element analysis (FEA) allows for detailed stress analysis, while parametric design tools facilitate the exploration of multiple design alternatives.</p>
      
      <h2>Sustainable Structural Design</h2>
      <p>Sustainability considerations are increasingly important in structural engineering. Engineers are developing strategies to minimize material usage while maintaining structural integrity. Prefabricated and modular construction techniques reduce waste and construction time, while the use of recycled materials supports circular economy principles.</p>
      
      <h2>Future Trends</h2>
      <p>The future of high-rise structural engineering promises even more exciting developments. Self-healing concrete that can repair minor cracks automatically, shape-memory alloys that can change properties in response to environmental conditions, and AI-assisted design optimization are just a few of the innovations on the horizon.</p>
      
      <p>As we continue to reach higher into the sky, structural engineers play a crucial role in ensuring that our buildings are not only tall and impressive but also safe, sustainable, and responsive to human needs.</p>
    `,
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
    content: `
      <p>The construction industry is undergoing a digital transformation that promises to revolutionize how we build. From artificial intelligence and robotics to the Internet of Things (IoT) and advanced analytics, smart technologies are making construction more efficient, safer, and more sustainable.</p>
      
      <h2>The Internet of Things in Construction</h2>
      <p>IoT sensors and connected devices are providing real-time insights into construction processes. These technologies enable:</p>
      <ul>
        <li><strong>Equipment Monitoring:</strong> Sensors track equipment performance, predict maintenance needs, and prevent costly breakdowns.</li>
        <li><strong>Environmental Monitoring:</strong> Continuous monitoring of air quality, noise levels, and weather conditions helps ensure worker safety and optimal working conditions.</li>
        <li><strong>Material Tracking:</strong> RFID tags and GPS sensors provide real-time visibility into material locations and usage.</li>
        <li><strong>Safety Monitoring:</strong> Wearable devices track worker vitals and detect potential safety hazards.</li>
      </ul>
      
      <h2>Artificial Intelligence and Machine Learning</h2>
      <p>AI is transforming construction project management and decision-making. Machine learning algorithms analyze vast amounts of project data to identify patterns, predict risks, and optimize schedules. AI-powered tools can:</p>
      <ul>
        <li>Automatically generate project schedules and resource allocations</li>
        <li>Predict project delays and cost overruns</li>
        <li>Optimize material ordering and logistics</li>
        <li>Enhance quality control through automated defect detection</li>
      </ul>
      
      <h2>Robotics and Automation</h2>
      <p>Robotic systems are increasingly being deployed on construction sites to perform repetitive, dangerous, or precision tasks. Examples include:</p>
      <ul>
        <li><strong>Bricklaying Robots:</strong> Automated systems that can lay bricks faster and more precisely than human workers.</li>
        <li><strong>3D Printing:</strong> Large-scale 3D printers that can construct entire building components or even complete structures.</li>
        <li><strong>Demolition Robots:</strong> Remote-controlled machines that safely demolish structures in hazardous environments.</li>
        <li><strong>Inspection Drones:</strong> UAVs equipped with cameras and sensors for site surveys and progress monitoring.</li>
      </ul>
      
      <h2>Digital Twins and Virtual Construction</h2>
      <p>Digital twin technology creates virtual replicas of physical construction projects, enabling real-time monitoring and simulation. These digital models help teams:</p>
      <ul>
        <li>Visualize construction progress and identify potential issues</li>
        <li>Test different scenarios and optimize construction sequences</li>
        <li>Coordinate between different trades and stakeholders</li>
        <li>Maintain accurate as-built documentation</li>
      </ul>
      
      <h2>Augmented and Virtual Reality</h2>
      <p>AR and VR technologies are enhancing construction planning and execution. These tools enable:</p>
      <ul>
        <li>Immersive design reviews and client presentations</li>
        <li>On-site visualization of completed designs</li>
        <li>Remote collaboration and expert assistance</li>
        <li>Enhanced worker training and safety education</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>While smart construction technologies offer tremendous benefits, their adoption faces several challenges:</p>
      <ul>
        <li>High initial investment costs</li>
        <li>Need for worker training and skill development</li>
        <li>Integration with existing workflows and systems</li>
        <li>Cybersecurity and data privacy concerns</li>
      </ul>
      
      <h2>The Future of Smart Construction</h2>
      <p>As technology continues to evolve, we can expect even more innovative applications in construction. Autonomous construction equipment, AI-powered project management, and fully integrated digital ecosystems will further transform the industry.</p>
      
      <p>The key to successful digital transformation lies in taking a holistic approach that considers not just the technology itself, but also the people, processes, and culture that must evolve alongside it. Companies that embrace this comprehensive view of digitalization will be best positioned to thrive in the construction industry of the future.</p>
    `,
    author: {
      name: "Michael Rodriguez",
      avatar: "/assets/images/article-3.jpg",
      bio: "Construction Technology Consultant and Digital Transformation Expert"
    },
    category: "Construction",
    tags: ["smart construction", "IoT", "AI", "robotics", "digital transformation"],
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    views: "3,267",
    likes: "124",
    comments: "31",
    image: "/assets/images/article-3.jpg",
    isLiked: false,
    isBookmarked: false
  }
};

export default function ArticlePage() {
  const params = useParams();
  const articleId = params.id as string;
  const [article] = useState(mockArticles[articleId as keyof typeof mockArticles] || null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (article) {
      setIsLiked(article.isLiked);
      setIsBookmarked(article.isBookmarked);
      setLikes(parseInt(article.likes));
    }
  }, [article]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
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
