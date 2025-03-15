import { useEffect } from 'react';
import { useState } from 'react';
import { getQuestionById } from '../utils/api';
export default function useQuestionById(id) {
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchQuestion = async function(id) {

        setLoading(true);
        try {
            const data = await getQuestionById(id);
            setQuestion({
                id: data.id,
                title: data.title,
                description: data.description,
                userId: data.user_id,
                viewsCount: data.view_count,
                createdAt: data.created_at,
                answersCount: data.answers_count,
                votesCount: data.votes_count
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchQuestion(id);
    }, [id]);

    return {question, loading};

}