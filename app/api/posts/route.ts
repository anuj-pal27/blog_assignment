import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

// GET - Fetch all posts
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const posts = await Post.find({})
      .select('title slug createdAt updatedAt')
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      posts: posts.map(post => ({
        id: post._id,
        title: post.title,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      }))
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
} 