export interface FontItem {
  title: string
  author: string
  type: string
  role: string
  description: string
  image: string
}

export const fontData: Record<string, FontItem> = {
  about: {
    title: '머리와 맺음',
    author: '히읗 열두번째 전시',
    type: '히읗',
    role: '전시소개',
    description: '이번 전시는 다양한 방향성과 감각을 지닌 디자이너들이 "서체"라는 매체를 통해 이야기하는 전시입니다.',
    image: '/images/exhibition.jpg',
  },
  hyun: {
    title: '평안',
    author: '박수민',
    type: '가로쓰기',
    role: '본문',
    description: '일상의 평화로움과 고요함을 활자 형태로 담은 작품입니다.',
    image: '/images/hyun.jpg',
  },
  bora: {
    title: '로맨스판타지',
    author: '이보라',
    type: '가로쓰기',
    role: '타이틀',
    description: '판타지적 상상력과 로맨스의 감정을 조형화한 실험적 본문 서체입니다.',
    image: '/images/bora.jpg',
  },
  suji: {
    title: '내벗',
    author: '이수지',
    type: '세로쓰기',
    role: '본문',
    description: '어린 시절 친구에게 쓰는 편지를 상상하며 제작된 세로쓰기 서체입니다.',
    image: '/images/suji.jpg',
  },
  // ... 다른 참여자들도 동일한 구조로 추가 가능
}