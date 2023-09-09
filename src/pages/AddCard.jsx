import { Button, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const AddCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { loading, error } = useSelector((state) => state.products);

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
      document.getElementById("save").removeAttribute("disabled");
    } else {
      document.getElementById("save").setAttribute("disabled", "disabled");
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
                <Form.Label>Add Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add title"
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
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                    checkIfEmpty();
                  }}
                  value={description}
                />
              </Form.Group>
            </div>

            <Button
              id="save"
              type="submit"
              className="btn btn-primary mt-2"
              disabled
            >
              <Loading loading={loading} error={error}>
                Save
              </Loading>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddCard;
