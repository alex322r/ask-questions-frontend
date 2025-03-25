
const apiUrl = import.meta.env.VITE_API_URL

export async function getQuestions(page, pageSize) {


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
    const response = await fetch(`${apiUrl}/api/v1/questions/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function postQuestion(question) {
  try {
    const response = await fetch(`${apiUrl}/api/v1/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    });
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
    const response = await fetch(`${apiUrl}/api/v1/questions/count`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
