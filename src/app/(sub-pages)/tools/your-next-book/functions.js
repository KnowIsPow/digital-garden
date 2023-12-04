export async function getBooks(keyword) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=3&fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks,volumeInfo/categories,volumeInfo/industryIdentifiers,volumeInfo/description)&langRestrict=en&q=${encodeURIComponent(
      keyword
    )}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch book data");
  }
  return await res.json();
}

export async function getBook(keyword) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=1&fields=items(volumeInfo)&langRestrict=en&q=${encodeURIComponent(
      keyword
    )}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch book data");
  }
  const jsonResponse = await res.json();
  return jsonResponse.items[0].volumeInfo;
}

export async function getBookById(id) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch book data");
  }
  const jsonResponse = await res.json();

  return jsonResponse.volumeInfo;
}

export async function getRecommendations(...books) {
  const messages = [
    {
      role: "system",
      content:
        'You are an expert librarian tasked with suggesting books based on a user\'s reading preferences. You will be provided with a list of books, and your recommendations should adhere to these principles:\n\n- Select books similar in theme and messaging to the provided list.\n- Avoid recommending books by the same author as in the provided list.\n- Your first recommendations should be a bestselling, popular, and widely recognized book.\n\nPlease provide 1 book recommendations, unless specified otherwise. Your response should be in valid JSON format, structured as a list with each entry containing the book\'s title and a brief explanation (two or three sentences) on why it\'s recommended and how it might appeal to someone who enjoyed the provided books. For example:\n\n[\n  {"title": "Book A by Author", "reason": "This book shares a similar theme of ... It\'s known for its ..."},\n  {"title": "Book B by Author", "reason": "With a focus on ..., this book offers a unique perspective on ..."}\n]\n\nEnsure that the titles are distinct and include the authors name. Also, avoid repeating any titles in your recommendations.',
    },
    {
      role: "user",
      content: books.join(", "),
    },
  ];

  try {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ messages }),
    });

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch recommendations:", error);
    throw error; // Re-throw the error to handle it in the UI if needed
  }
}
