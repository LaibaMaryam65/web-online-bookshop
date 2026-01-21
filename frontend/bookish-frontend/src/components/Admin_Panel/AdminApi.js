const BASE_URL = "http://localhost:3001";

async function handleJson(res, errorMessage) {
  if (!res.ok) throw new Error(errorMessage);
  return res.json();
}

//featured part
export async function getFeaturedBooks() {
  const res = await fetch(`${BASE_URL}/featured`);
  return handleJson(res, "Failed to load featured books");
}


export async function addBookToFeatured(book) {
  const featured = await getFeaturedBooks();

  const exists = featured.find(f => f.id.toString() === book.id.toString());
  if (exists) {
    alert(`${book.title} is already in Featured!`);
    return null;
  }

  const res = await fetch(`${BASE_URL}/featured`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });

  const added = await handleJson(res, "Failed to add book to featured");
  alert(`${book.title} added to Featured!`);
  return added;
}

export async function deleteFeaturedBook(bookId) {
  if (!bookId) throw new Error("Invalid book id");


  const res = await fetch(`${BASE_URL}/featured/${bookId.toString()}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    console.error(`Delete failed, id: ${bookId}`);
    throw new Error("Failed to remove book from featured");
  }

  alert("Book removed from Featured!");
  return true;
}




//latest part

export async function getLatestBooks() {
  const res = await fetch(`${BASE_URL}/latestBooks`);
  return handleJson(res, "Failed to load latest books");
}


export async function addBookToLatest(book) {
  const latest = await getLatestBooks();
  if (latest.find(f => f.id.toString() === book.id.toString())) {
    alert(`${book.title} is already in Latest!`);
    return null;
  }
  const res = await fetch(`${BASE_URL}/latestBooks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  const added = await handleJson(res, "Failed to add book to latest");
  alert(`${book.title} added to Latest!`);
  return added;
}

export async function deleteLatestBook(bookId) {
  if (!bookId) throw new Error("Invalid book id");
  const res = await fetch(`${BASE_URL}/latestBooks/${bookId.toString()}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to remove book from latest");
  alert("Book removed from Latest!");
  return true;
}

// sale part
export async function getSaleBooks() {
  const res = await fetch(`${BASE_URL}/saleBooks`);
  return handleJson(res, "Failed to load sale books");
}


export async function addBookToSale(book) {
  const sale = await getSaleBooks();
  if (sale.find(f => f.id.toString() === book.id.toString())) {
    alert(`${book.title} is already in Sale!`);
    return null;
  }
  const res = await fetch(`${BASE_URL}/saleBooks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  const added = await handleJson(res, "Failed to add book to sale");
  alert(`${book.title} added to Sale!`);
  return added;
}


export async function deleteSaleBook(bookId) {
  if (!bookId) throw new Error("Invalid book id");
  const res = await fetch(`${BASE_URL}/saleBooks/${bookId.toString()}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to remove book from sale");
  alert("Book removed from Sale!");
  return true;
}


// bestseller part
export async function getBestBooks() {
  const res = await fetch(`${BASE_URL}/bestseller`);
  return handleJson(res, "Failed to load best seller books");
}

export async function addBookToBest(book) {
  const best = await getBestBooks();
  if (best.find(f => f.id.toString() === book.id.toString())) {
    alert(`${book.title} is already in Best Sellers!`);
    return null;
  }
  const res = await fetch(`${BASE_URL}/bestseller`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  const added = await handleJson(res, "Failed to add book to Best Sellers");
  alert(`${book.title} added to Best Sellers!`);
  return added;
}

export async function deleteBestBook(bookId) {
  if (!bookId) throw new Error("Invalid book id");
  const res = await fetch(`${BASE_URL}/bestseller/${bookId.toString()}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to remove book from Best Sellers");
  alert("Book removed from Best Sellers!");
  return true;
}


//update everywhere

async function updateIfExists(endpoint, book) {
  const check = await fetch(`${BASE_URL}/${endpoint}/${book.id}`);
  if (!check.ok) return;

  await fetch(`${BASE_URL}/${endpoint}/${book.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
}

export async function syncBookEverywhere(book) {
  await Promise.all([
    updateIfExists("featured", book),
    updateIfExists("latestBooks", book),
    updateIfExists("saleBooks", book),
    updateIfExists("bestseller", book)
  ]);
}


//delets everywhere 

async function deleteIfExists(endpoint, bookId) {
  const check = await fetch(`${BASE_URL}/${endpoint}/${bookId}`);
  if (!check.ok) return;

  await fetch(`${BASE_URL}/${endpoint}/${bookId}`, {
    method: "DELETE"
  });
}

export async function deleteBookEverywhere(bookId) {
  await Promise.all([
    deleteIfExists("featured", bookId),
    deleteIfExists("latestBooks", bookId),
    deleteIfExists("saleBooks", bookId),
    deleteIfExists("bestseller", bookId)
  ]);
}
