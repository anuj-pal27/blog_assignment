# Blog Website with Rich Text Editor and MongoDB

A modern blog website built with Next.js, featuring a rich text editor (React-Quill), MongoDB integration, and SEO-friendly URLs.

## Features

### ✨ Core Features
- **Rich Text Editor**: WYSIWYG editor using React-Quill for creating and editing blog posts
- **SEO-Friendly URLs**: Automatic slug generation from post titles
- **MongoDB Integration**: Full CRUD operations with MongoDB database
- **Admin Dashboard**: Complete management interface for blog posts
- **Dynamic Post Viewing**: Individual post pages with SEO meta tags
- **Responsive Design**: Modern, mobile-friendly UI with Tailwind CSS

### 🔧 Technical Features
- **Next.js 14**: App Router with TypeScript
- **MongoDB & Mongoose**: Database integration with schema validation
- **React-Quill**: Rich text editor with formatting options
- **DOMPurify**: XSS protection for HTML content
- **Slugify**: SEO-friendly URL generation
- **Tailwind CSS**: Modern styling framework

## Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuj-pal27/blog_assignment.git
   cd blog_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/blog-website
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog-website
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Public Pages

- **Home Page** (`/`): Displays all published blog posts
- **Individual Post** (`/post/[slug]`): View individual blog posts with SEO meta tags

### Admin Pages

- **Admin Dashboard** (`/admin`): Manage all blog posts (view, edit, delete)
- **Create Post** (`/admin/create`): Create new blog posts with rich text editor
- **Edit Post** (`/admin/edit/[slug]`): Edit existing blog posts

### Creating a Blog Post

1. Navigate to `/admin/create`
2. Enter the post title (slug will be auto-generated)
3. Use the rich text editor to write your content
4. Click "Create Post" to save

### Editing a Blog Post

1. Go to the admin dashboard (`/admin`)
2. Click "Edit" next to the post you want to modify
3. Update the title and/or content
4. Click "Update Post" to save changes

### Rich Text Editor Features

The React-Quill editor includes:
- **Text Formatting**: Bold, italic, underline, strikethrough
- **Headers**: H1, H2, H3
- **Lists**: Ordered and unordered lists
- **Colors**: Text and background colors
- **Alignment**: Left, center, right alignment
- **Links**: Add and edit hyperlinks
- **Images**: Insert images
- **Blockquotes**: Quote formatting
- **Code Blocks**: Syntax highlighting support

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts/create` - Create a new post
- `GET /api/posts/[slug]` - Get a specific post by slug
- `PUT /api/posts/[slug]` - Update a post by slug
- `DELETE /api/posts/[slug]` - Delete a post by slug

## Database Schema

```javascript
const PostSchema = {
  title: String (required),
  content: String (required, HTML),
  slug: String (required, unique),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Security Features

- **XSS Protection**: HTML content is sanitized using DOMPurify
- **Input Validation**: Server-side validation for all inputs
- **Unique Slugs**: Automatic slug generation with collision handling
- **Error Handling**: Comprehensive error handling throughout the application

## SEO Features

- **Dynamic Meta Tags**: Each post has unique meta tags
- **Open Graph Tags**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **SEO-Friendly URLs**: Clean, readable URLs based on post titles
- **Structured Data**: Proper HTML structure for search engines

## Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

### Environment Variables for Production

Set these in your Vercel dashboard:
- `MONGODB_URI`: Your MongoDB connection string
- `NEXT_PUBLIC_API_URL`: Your production domain (optional)

## Development

### Project Structure

```
├── app/
│   ├── admin/           # Admin pages
│   ├── api/             # API routes
│   ├── post/            # Public post pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── lib/
│   └── mongodb.ts       # Database connection
├── models/
│   └── Post.ts          # MongoDB schema
└── package.json
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 
