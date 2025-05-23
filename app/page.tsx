'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CommunityFeedCard } from '@/components/CommunityFeedCard';
import { mockPosts } from '@/lib/mock-data';
import { IPost } from '@/types';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<IPost[]>(mockPosts);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('프롬프트를 입력해 주세요');
      return;
    }
    // 실제 API 연동 대신 목업 데이터로 처리
    console.log('이미지 생성 요청:', prompt);
    // 이미지 생성 페이지로 이동
    window.location.href = `/generate?prompt=${encodeURIComponent(prompt)}`;
  };

  const handleLikeToggle = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.postId === postId) {
        const newIsLiked = !post.isLiked;
        return {
          ...post,
          isLiked: newIsLiked,
          likes: post.likes + (newIsLiked ? 1 : -1)
        };
      }
      return post;
    }));
  };

  return (
    <main className="min-h-screen p-8">
      {/* 프롬프트 입력 섹션 */}
      <section className="max-w-2xl mx-auto space-y-4 mb-12">
        <Input
          placeholder="이미지 생성을 위한 프롬프트를 입력하세요..."
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setError('');
          }}
          className="bg-gray-50"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          onClick={handleGenerateImage}
          disabled={!prompt.trim()}
          className="w-full"
        >
          이미지 생성하기
        </Button>
      </section>

      {/* 커뮤니티 피드 섹션 */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">커뮤니티 피드</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <CommunityFeedCard
              key={post.postId}
              post={post}
              onLikeToggle={handleLikeToggle}
            />
          ))}
        </div>
      </section>
    </main>
  );
} 