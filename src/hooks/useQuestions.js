import { useState, useEffect } from 'react';
import { getQuestionsCount } from '../utils/api.js';
import memoQuestions from '../utils/memoQuestions.js';
import { useRef } from 'react';

export default function useQuestions() {

  const [questionsCount, setQuestionsCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const memo = useRef(memoQuestions()).current;

  useEffect(() => {
    
    async function fetchQuestions() {
      try {
        setLoading(true);
        const data = await memo(page, pageSize);
        const {count} = await getQuestionsCount();
        const mapQuestions = data.map((question) => {
          return {
            id: question.id,
            title: question.title,
            description: question.description,
            userId: question.user_id,
            guestName: question.guest_name,
            views: question.view_count,
            createdAt: question.created_at,
          }})

        setQuestionsCount(count);
        setQuestions(mapQuestions);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuestions();
  }, [page, pageSize, memo]);





  return { questions, questionsCount ,loading, page ,setPage, setPageSize, currentQuestion, setCurrentQuestion};
}