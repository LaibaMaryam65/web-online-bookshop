const BASE_URL = "http://localhost:3001";

async function handleJson(res, msg) {
  if (!res.ok) throw new Error(msg);
  return res.json();
}

// READ
export async function getBooksByGenre(genre) {
  const res = await fetch(`${BASE_URL}/genres`);
  const data = await handleJson(res, "Failed to load genres");
  return data[genre] || [];
}

// ADD
export async function addBook(genre, book) {
  const res = await fetch(`${BASE_URL}/genres`);
  const genres = await handleJson(res, "Failed to load genres");

  const updated = [...(genres[genre] || []), book];

  const put = await fetch(`${BASE_URL}/genres`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...genres,
      [genre]: updated
    })
  });

  return handleJson(put, "Failed to add book");
}

// UPDATE
export async function updateBook(genre, book) {
  const res = await fetch(`${BASE_URL}/genres`);
  const genres = await handleJson(res, "Failed to load genres");

  const updated = genres[genre].map(b =>
    b.id === book.id ? book : b
  );

  const put = await fetch(`${BASE_URL}/genres`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...genres,
      [genre]: updated
    })
  });

  return handleJson(put, "Failed to update book");
}

// DELETE
export async function deleteBook(genre, id) {
  const res = await fetch(`${BASE_URL}/genres`);
  const genres = await handleJson(res, "Failed to load genres");

  const updated = genres[genre].filter(b => b.id !== id);

  const put = await fetch(`${BASE_URL}/genres`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...genres,
      [genre]: updated
    })
  });

  return handleJson(put, "Failed to delete book");
}
