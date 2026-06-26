import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const articles = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'React',
  },
  {
    id: 2,
    title: 'Web Performance Optimization Tips',
    excerpt: 'Discover practical techniques to improve your website\'s performance and user experience.',
    date: 'Jan 10, 2024',
    readTime: '8 min read',
    category: 'Performance',
  },
  {
    id: 3,
    title: 'Building Beautiful UIs with Framer Motion',
    excerpt: 'A comprehensive guide to creating smooth animations and interactive UIs with Framer Motion.',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    category: 'Animation',
  },
]

export default function Articles() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="articles" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Latest Articles
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-dark-bg/50 border border-dark-border rounded-xl p-6 backdrop-blur hover:border-accent-purple/50 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs px-2 py-1 rounded bg-accent-blue/20 text-accent-blue">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-purple transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
              <div className="text-xs text-gray-600">{article.date}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
