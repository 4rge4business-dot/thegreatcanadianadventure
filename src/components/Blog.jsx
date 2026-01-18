import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from './posts';
import northernLightsImg from '../assets/adventures/northern-lights.jpg';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div
        className="relative h-96 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${northernLightsImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Canadian Adventures Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Tales of thrill-seeking, breathtaking landscapes, and unforgettable experiences.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/80 border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-emerald-400">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0">
                    Read More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center py-8">
        <Link to="/">
          <Button className="text-xl px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0">
            Back to Adventures
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
