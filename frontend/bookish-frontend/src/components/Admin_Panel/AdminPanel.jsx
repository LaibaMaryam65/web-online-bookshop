import { useEffect, useState } from "react";
import {
  getBooksByGenre,
  addBook,
  updateBook,
  deleteBook
  
} from "../../api/BooksApi";
import {
  syncBookEverywhere,
  deleteBookEverywhere
} from "./AdminApi";


import AdminTable from "./AdminTable";
import AdminForm from "./AdminForm";
import "../../app.css"
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";

const AdminPanel = () => {
  const [genre, setGenre] = useState("Fiction");
  const [books, setBooks] = useState([]);
  const [editing, setEditing] = useState(null);
  
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      window.location.href = "/login"; 
    }
  }, []);
  useEffect(() => {
    load();
  }, [genre]);

  async function load() {
    const data = await getBooksByGenre(genre);
    setBooks(data);
  }

async function handleSave(book) {
  if (editing) {
    await updateBook(genre, book);
    await syncBookEverywhere(book);
  } else {
    await addBook(genre, { ...book, id: Date.now() });
  }

  setEditing(null);
  load();
}
async function handleDelete(id) {
  if (!confirm("Delete this book?")) return;

  await deleteBook(genre, id);
  await deleteBookEverywhere(id);

  load();
}


  return (
    <div>
      <AdminNavbar/>
      <br/><br/>
      <h2>Add a Book</h2>
   <AdminForm selectedBook={editing} onSave={handleSave} />
      <div className="genre-select-container">
  <label>Filter by Category:</label>
  <select value={genre} onChange={e => setGenre(e.target.value)}>
    <option>Fiction</option>
    <option>Classic</option>
    <option>Historical</option>
    <option>Non-Fiction</option>
    <option>Contemporary</option>
  </select>
</div>


   

      <AdminTable
        books={books}
        onEdit={setEditing}
        onDelete={handleDelete}
      />

      <AdminFooter/>
    </div>
  );
};

export default AdminPanel;