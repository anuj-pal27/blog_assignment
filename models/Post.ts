import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true,
      trim: true
    },
    content: { 
      type: String, 
      required: true 
    }, // HTML content
    slug: { 
      type: String, 
      required: true, 
      unique: true,
      trim: true,
      index: true
    }, // SEO-friendly slug
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    updatedAt: { 
      type: Date, 
      default: Date.now 
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema); 