// 홈 화면의 프로젝트 소개 목록. 프로젝트를 더하려면 배열에 항목 하나만 추가하면 된다.
// image 는 카드 위쪽에 작게 보이는 대표 화면 한 장이다.

import type { ImageMetadata } from 'astro';
import dashboard from '../assets/projects/disaster-alert/dashboard.png';

export type Project = {
	name: string;
	image: { src: ImageMetadata; alt: string; caption: string };
	summary: string;
	stack: string[];
	links: { label: string; href: string }[];
	posts: { title: string; href: string }[];
};

export const projects: Project[] = [
	{
		name: 'Disaster Alert Archive — 재난 안전문자 아카이브',
		image: {
			src: dashboard,
			alt: '대시보드. 시도별 오늘 재난문자 건수를 대한민국 지도에 색으로 보여 준다',
			caption: '대시보드 — 지역별 오늘의 재난문자 지도',
		},
		summary:
			'정부 재난문자 공공데이터를 모으고, 같은 사건에 대한 문자를 하나의 이벤트로 묶어 보여 주고, 관심 지역을 등록한 사용자에게 푸시 알림을 보내는 서비스입니다.',
		stack: ['Spring Boot', 'Java', 'Next.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'Redis', 'Spring AI', 'FCM'],
		links: [
			{ label: '서비스', href: 'https://disaster-alert-archive.co.kr/' },
			{ label: 'GitHub', href: 'https://github.com/lshlsh3690/disaster-alert-archive' },
		],
		posts: [
			{
				title: '재난문자 묶기가 맞는지 어떻게 확인할까 (1) — 정답셋 만들어서 성능 측정하기',
				href: '/blog/clustering-evaluation/',
			},
		],
	},
];
