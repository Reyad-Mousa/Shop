import { Card, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/productSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const AddCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    dispatch(addProducts({ id, title, description }))
      .unwrap()
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        // corrected typo here
        console.error(error);
      });
  };

  function checkIfEmpty() {
    if (title !== "" && description !== "") {
      document.querySelector("button").removeAttribute("disabled");
    } else {
      document.querySelector("button").setAttribute("disabled", "disabled");
    }
  }
  return (
    <>
      <Card
        border="primary"
        style={{ width: "25rem", margin: "20px" }}
        onSubmit={formHandler}
      >
        <Card.Header>Add New Product</Card.Header>
        <Card.Body>
          <Form>
            <div className="form-group">
              <div className="form-group mb-3 ">
                <label className="mr-2">Upload your CV:</label>
                <input type="file" name="file" />
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setTitle(e.target.value);
                    checkIfEmpty();
                  }}
                  value={title}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Example textarea"
                  onChange={(e) => {
                    setDescription(e.target.value);
                    checkIfEmpty();
                  }}
                  value={description}
                />
              </Form.Group>
            </div>

            <Loading>
              <button type="submit" disabled className="btn btn-primary mt-2">
                Save
              </button>
            </Loading>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddCard;
