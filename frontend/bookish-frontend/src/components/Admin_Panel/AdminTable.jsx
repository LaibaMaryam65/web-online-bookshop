export default function AdminTable({ books = [], onEdit, onDelete }) {
  if (!books.length) {
    return <div className="alert alert-info">No books found.</div>;
  }

  return (
  <div className="table-responsive">
  <table className="table table-bordered table-striped align-middle">
    <thead className="table-dark">
      <tr>
        <th>Cover</th>
        <th>Title</th>
        <th>Author</th>
        <th>Publisher</th>
        <th>ISBN</th>
        <th>Stock</th>
        <th>Price</th>
        <th>Format</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td className="text-center">
            {book.coverImage && (
              <img
                src={book.coverImage}
                alt={book.title}
                className="img-fluid rounded"
                style={{ maxWidth: "40px", height: "auto" }}
              />
            )}
          </td>
          <td className="text-truncate" style={{ maxWidth: "120px" }}>{book.title}</td>
          <td className="text-truncate" style={{ maxWidth: "100px" }}>{book.author}</td>
          <td className="text-truncate" style={{ maxWidth: "120px" }}>{book.publisher}</td>
          <td className="text-truncate" style={{ maxWidth: "100px" }}>{book.isbn}</td>
          <td>{book.stock}</td>
          <td>{book.price}</td>
          <td>{book.format}</td>
          <td>
            <div className="d-flex flex-column flex-sm-row gap-1">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onEdit(book)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  );
}
