import React, { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "JavaScript Basics", author: "John Smith" },
    { id: 2, title: "Learn React", author: "David Miller" },
    { id: 3, title: "Mastering CSS", author: "Sarah Johnson" },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // update
      const updatedBooks = books.map((book) =>
        book.id === editId ? { ...book, ...formData } : book,
      );
      setBooks(updatedBooks);
      setEditId(null);
    } else {
      // add
      const newBook = {
        id: books.length + 1,
        title: formData.title,
        author: formData.author,
      };
      setBooks([...books, newBook]);
    }

    setFormData({ title: "", author: "" });
  };

  const handleDelete = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const handleEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
    });
    setEditId(book.id);
  };

  return (
    <div className="flex flex-col p-10">
      <h1 className="text-4xl mb-3">Books</h1>

      <form
        className="border rounded flex flex-col p-2 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border rounded p-2"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          className="border rounded p-2"
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          {editId ? "Update Book" : "Add Book"}
        </button>
      </form>

      <ul className="flex flex-wrap gap-4 mt-5">
        {books.map((book) => (
          <li key={book.id} className="flex flex-col border p-4 rounded">
            <span className="font-semibold">Title:</span> {book.title}
            <span className="font-semibold">Author:</span> {book.author}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(book)}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
