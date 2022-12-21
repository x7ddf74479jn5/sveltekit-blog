import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
import type { Blog, BlogResponse } from '../types';
const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

export const getList = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: 'blogs', queries });
};
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId,
		queries
	});
};
