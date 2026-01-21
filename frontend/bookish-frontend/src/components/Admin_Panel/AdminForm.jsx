import { useEffect, useState, useRef } from "react";

const empty = {
  title: "",
  author: "",
  isbn: "",
  publisher: "",
  price: "",
  coverImage: "",
  description: "",
  category: "",
  reviews: { rating: "", count: "" },
  publicationYear: "",
  stock: "",
  format: ""
};

const categories = ["Fiction", "Classic", "Historical", "Non-Fiction", "Contemporary", "Latest"];

export default function AdminForm({ selectedBook, onSave }) {
  const [book, setBook] = useState(empty);
  const formRef = useRef();

  useEffect(() => {
    setBook(selectedBook || empty);
    if (selectedBook && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedBook]);

  function submit(e) {
    e.preventDefault();
    if (!book.category) {
      alert("Please select a category");
      return;
    }
    onSave(book);
    alert(selectedBook ? "Book updated successfully!" : "Book added successfully!");
    setBook(empty);
  }

  return (
   <form ref={formRef} onSubmit={submit} className="container g-3">
  <div className="row">
    <div className="col-md-6">
      <label className="form-label">Category</label>
      <select
        value={book.category}
        onChange={e => setBook({ ...book, category: e.target.value })}
        className="form-select"
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>

    <div className="col-md-6">
      <label className="form-label">Title</label>
      <input
        type="text"
        value={book.title}
        onChange={e => setBook({ ...book, title: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Author</label>
      <input
        type="text"
        value={book.author}
        onChange={e => setBook({ ...book, author: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">ISBN</label>
      <input
        type="text"
        value={book.isbn}
        onChange={e => setBook({ ...book, isbn: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Publisher</label>
      <input
        type="text"
        value={book.publisher}
        onChange={e => setBook({ ...book, publisher: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Price</label>
      <input
        type="number"
        value={book.price}
      onChange={e =>
  setBook({ ...book, price: Number(e.target.value) })
}
className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Rating (1.0-5.0)</label>
      <input
        type="text"
        value={book.reviews.rating}
        onChange={e =>
          setBook({ ...book, reviews: { ...book.reviews, rating: e.target.value } })
        }
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Number of Reviews</label>
      <input
        type="number"
        min="0"
        value={book.reviews.count}
        onChange={e =>
          setBook({ ...book, reviews: { ...book.reviews, count: e.target.value } })
        }
        className="form-control"
      />
    </div>

    <div className="col-12">
      <label className="form-label">Description</label>
      <textarea
        value={book.description}
        onChange={e => setBook({ ...book, description: e.target.value })}
        className="form-control"
        rows={4}
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Publication Year</label>
      <input
        type="number"
        value={book.publicationYear}
        onChange={e => setBook({ ...book, publicationYear: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Stock</label>
      <input
        type="text"
        value={book.stock}
        onChange={e => setBook({ ...book, stock: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-md-6">
      <label className="form-label">Format</label>
      <input
        type="text"
        value={book.format}
        onChange={e => setBook({ ...book, format: e.target.value })}
        className="form-control"
      />
    </div>

    <div className="col-12">
      <label className="form-label">Cover Image</label>
      <input
        type="file"
        accept="image/*"
        className="form-control"
        onChange={e => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onloadend = () =>
            setBook(prev => ({ ...prev, coverImage: reader.result }));
          reader.readAsDataURL(file);
        }}
      />
    </div>

    {book.coverImage && (
      <div className="col-12 text-center">
        <img
          src={book.coverImage}
          alt="Preview"
          style={{ width: 150, height: 180, objectFit: "cover", borderRadius: 8 }}
        />
      </div>
    )}

    <div className="col-12 text-center">
      <button type="submit" className="btn btn-primary btn-lg">
        {selectedBook ? "Update" : "Add"} Book
      </button>
    </div>
  </div>
</form>

  );
}
