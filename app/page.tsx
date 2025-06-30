import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/posts`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-xl text-gray-600">
          Discover insightful articles and stories
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            No posts yet
          </h2>
          <p className="text-gray-500">
            Check back soon for new content!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Link 
                  href={`/post/${post.slug}`}
                  className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <span>Published: {new Date(post.createdAt).toLocaleDateString()}</span>
                {post.updatedAt !== post.createdAt && (
                  <span className="ml-4">
                    Updated: {new Date(post.updatedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              <Link 
                href={`/post/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
} 