export interface IPost {
  postId: string;
  imageURL: string;
  userName: string;
  userProfile: string;
  createdAt: string;
  prompt: string;
  styleOptions: Record<string, any>;
  likes: number;
  comments: number;
  scraps: number;
  isLiked: boolean;
  isScrapped: boolean;
}

export interface IComment {
  id: string;
  content: string;
  userName: string;
  userProfile: string;
  createdAt: string;
  parentId?: string;
} 