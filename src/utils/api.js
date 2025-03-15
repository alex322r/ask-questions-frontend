export async function getQuestions(page = 1, pageSize = 5) {

  const apiUrl = import.meta.env.VITE_API_URL

    try {
      const response = await fetch(`${apiUrl}/api/v1/questions?page=${page}&limit=${pageSize}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  
}

export async function getQuestionById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/questions/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getQuestionsCount() {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/questions/count`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}