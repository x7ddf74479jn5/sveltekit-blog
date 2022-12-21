import type { MicroCMSImage, MicroCMSListResponse } from 'microcms-js-sdk';

export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
};

export type BlogResponse = MicroCMSListResponse<Blog>;
