import React, { useEffect, useState } from "react";

function Crudfetch() {
  const [booklist, setBooklist] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [action, setAction] = useState(null);

  const [userID, setUserID] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setEditId] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "userID"
      ? setUserID(value)
      : name === "title"
      ? setTitle(value)
      : setBody(value);
  };
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setBooklist(response);
        setHeaders(Object.keys(response[0]));
      })

      .catch((error) => console.log(error));
  }, []);
  const handleCreate = (e) => {
    setAction(1);
  };
  const handleEdit = (e, id) => {
    setAction(2);
    setEditId(id);
  };
  const handlePost = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        userId: userID,
        title: title,
        body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })

      .catch((error) => console.log(error));
  };
  const handlePut = (e, id) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "PUT",
      body: JSON.stringify({
        userId: userID,
        title: title,
        body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })

      .catch((error) => console.log(error));
  };
  const handleDelete = (e, i) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
    });
  };
  const getBookKeys = (booklist) => {
    console.log("booklist", booklist);
    setHeaders(Object.keys(booklist[0]));
    console.log(headers);
  };
  return (
    <div className="book-app">
      <h1>Book list</h1>
      <button onClick={(e) => handleCreate(e)}>Create</button>

      <Action
        state={action}
        userID={userID}
        title={title}
        body={body}
        handlePost={handlePost}
        handleChange={handleChange}
        handlePut={handlePut}
        id={id}
      />
      <table>
        <thead>
          <tr>
            {booklist?.length ? (
              headers.map((header, index) => <th key={index}>{header}</th>)
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody>
          {booklist?.length ? (
            booklist.map((book) => (
              <tr key={book.id}>
                {Object.values(book).map((ele, index) => (
                  <td key={index}>{ele}</td>
                ))}
                <td>
                  <button onClick={(e) => handleEdit(e, book.id)}>EDIT</button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(e, book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Crudfetch;
const Action = ({
  state,
  userID,
  title,
  body,
  handlePost,
  handleChange,
  handlePut,
  id,
}) => {
  return (
    <>
      {state === 1 ? (
        <div>
          <form onSubmit={(e) => handlePost(e)}>
            <input
              type="number"
              name="userID"
              value={userID}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="body"
              value={body}
              onChange={handleChange}
            />
            <button type="submit">create book</button>
          </form>
        </div>
      ) : state === 2 ? (
        <div>
          <form onSubmit={(e) => handlePut(e, id)}>
            <input
              type="number"
              name="userID"
              value={userID}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="body"
              value={body}
              onChange={handleChange}
            />
            <button type="submit">Edit book</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
