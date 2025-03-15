import {getQuestions} from './api';

export default function  memoQuestions() {
    let questions = {};
    const CACHE_TIMEOUT = 1000 * 60 * 5;

    return async function(page, pageSize) {
        const cacheEntry = questions[page];
        if (cacheEntry && (Date.now() - cacheEntry.timestamp) < CACHE_TIMEOUT) {
            console.log('from cache');
            return cacheEntry.data;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = await getQuestions(page, pageSize);
            questions[page] = {
                data,
                timestamp: Date.now()
            }
            console.log('from api');
            return data;
        } catch (error) {
            console.error(error);
        }
    }

}