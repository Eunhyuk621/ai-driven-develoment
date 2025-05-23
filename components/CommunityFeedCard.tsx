import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { IPost, IComment } from '@/types';
import { mockComments } from '@/lib/mock-data';

interface CommunityFeedCardProps {
  post: IPost;
  onLikeToggle: (postId: string) => void;
}

export function CommunityFeedCard({ post, onLikeToggle }: CommunityFeedCardProps) {
  const [showComments, setShowComments] = useState(false);
  const comments = mockComments[post.postId] || [];

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLikeToggle(post.postId);
  };

  const handleCommentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComments(true);
  };

  return (
    <>
      <Link href={`/post/${post.postId}`}>
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={post.imageURL}
                alt="Generated Image"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <div className="flex justify-between items-center w-full">
              <span className="font-medium">{post.userName}</span>
              <div className="flex items-center space-x-4 text-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center gap-1 ${post.isLiked ? 'text-red-500' : 'text-gray-500'}`}
                  onClick={handleLikeClick}
                >
                  {post.isLiked ? '❤️' : '🤍'} {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-gray-500"
                  onClick={handleCommentClick}
                >
                  💬 {post.comments}
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>

      <Dialog open={showComments} onOpenChange={setShowComments}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>댓글</DialogTitle>
          </DialogHeader>
          <div className="max-h-[400px] overflow-y-auto space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3 p-2">
                <div className="relative w-8 h-8">
                  <Image
                    src={comment.userProfile}
                    alt={comment.userName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{comment.userName}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm mt-1">{comment.content}</p>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-center text-gray-500">아직 댓글이 없습니다.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 