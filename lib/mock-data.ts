import { IPost, IComment } from '@/types';

export const mockComments: Record<string, IComment[]> = {
  '1': [
    { id: '1', content: '정말 귀여운 고양이네요!', userName: '댓글러1', userProfile: 'https://i.pravatar.cc/150?img=11', createdAt: '2024-03-20T12:30:00Z' },
    { id: '2', content: '우주 배경이 너무 멋져요', userName: '댓글러2', userProfile: 'https://i.pravatar.cc/150?img=12', createdAt: '2024-03-20T12:35:00Z' }
  ],
  '2': [
    { id: '3', content: '미래도시 분위기가 잘 표현됐어요', userName: '댓글러3', userProfile: 'https://i.pravatar.cc/150?img=13', createdAt: '2024-03-20T11:40:00Z' }
  ],
  // ... 다른 포스트의 댓글들도 추가
};

export const mockPosts: IPost[] = [
  {
    postId: '1',
    imageURL: 'https://picsum.photos/seed/1/800/800',
    userName: '창작자1',
    userProfile: 'https://i.pravatar.cc/150?img=1',
    createdAt: '2024-03-20T12:00:00Z',
    prompt: '우주를 여행하는 고양이',
    styleOptions: { style: 'anime', colorScheme: 'vibrant' },
    likes: 120,
    comments: 15,
    scraps: 30,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '2',
    imageURL: 'https://picsum.photos/seed/2/800/800',
    userName: '창작자2',
    userProfile: 'https://i.pravatar.cc/150?img=2',
    createdAt: '2024-03-20T11:30:00Z',
    prompt: '미래도시의 일상',
    styleOptions: { style: 'realistic', colorScheme: 'neon' },
    likes: 85,
    comments: 8,
    scraps: 20,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '3',
    imageURL: 'https://picsum.photos/seed/3/800/800',
    userName: '창작자3',
    userProfile: 'https://i.pravatar.cc/150?img=3',
    createdAt: '2024-03-20T11:00:00Z',
    prompt: '판타지 세계의 마법사',
    styleOptions: { style: 'fantasy', colorScheme: 'magical' },
    likes: 200,
    comments: 25,
    scraps: 45,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '4',
    imageURL: 'https://picsum.photos/seed/4/800/800',
    userName: '창작자4',
    userProfile: 'https://i.pravatar.cc/150?img=4',
    createdAt: '2024-03-20T10:30:00Z',
    prompt: '사이버펑크 거리의 로봇',
    styleOptions: { style: 'cyberpunk', colorScheme: 'neon' },
    likes: 150,
    comments: 18,
    scraps: 35,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '5',
    imageURL: 'https://picsum.photos/seed/5/800/800',
    userName: '창작자5',
    userProfile: 'https://i.pravatar.cc/150?img=5',
    createdAt: '2024-03-20T10:00:00Z',
    prompt: '꿈같은 수채화 풍경',
    styleOptions: { style: 'watercolor', colorScheme: 'pastel' },
    likes: 180,
    comments: 22,
    scraps: 40,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '6',
    imageURL: 'https://picsum.photos/seed/6/800/800',
    userName: '창작자6',
    userProfile: 'https://i.pravatar.cc/150?img=6',
    createdAt: '2024-03-20T09:30:00Z',
    prompt: '신비로운 심해 생물',
    styleOptions: { style: 'realistic', colorScheme: 'dark' },
    likes: 95,
    comments: 12,
    scraps: 25,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '7',
    imageURL: 'https://picsum.photos/seed/7/800/800',
    userName: '창작자7',
    userProfile: 'https://i.pravatar.cc/150?img=7',
    createdAt: '2024-03-20T09:00:00Z',
    prompt: '스팀펑크 시계탑',
    styleOptions: { style: 'steampunk', colorScheme: 'vintage' },
    likes: 165,
    comments: 20,
    scraps: 38,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '8',
    imageURL: 'https://picsum.photos/seed/8/800/800',
    userName: '창작자8',
    userProfile: 'https://i.pravatar.cc/150?img=8',
    createdAt: '2024-03-20T08:30:00Z',
    prompt: '가을 숲속의 요정',
    styleOptions: { style: 'fantasy', colorScheme: 'autumn' },
    likes: 210,
    comments: 28,
    scraps: 50,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '9',
    imageURL: 'https://picsum.photos/seed/9/800/800',
    userName: '창작자9',
    userProfile: 'https://i.pravatar.cc/150?img=9',
    createdAt: '2024-03-20T08:00:00Z',
    prompt: '레트로 게임 캐릭터',
    styleOptions: { style: 'pixel', colorScheme: 'retro' },
    likes: 145,
    comments: 16,
    scraps: 32,
    isLiked: false,
    isScrapped: false
  },
  {
    postId: '10',
    imageURL: 'https://picsum.photos/seed/10/800/800',
    userName: '창작자10',
    userProfile: 'https://i.pravatar.cc/150?img=10',
    createdAt: '2024-03-20T07:30:00Z',
    prompt: '미니멀한 추상화',
    styleOptions: { style: 'minimal', colorScheme: 'monochrome' },
    likes: 175,
    comments: 19,
    scraps: 42,
    isLiked: false,
    isScrapped: false
  }
]; 