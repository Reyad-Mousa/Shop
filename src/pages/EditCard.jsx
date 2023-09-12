import { Button, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../store/productSlice";
import Loading from "../components/Loading";
import useProductDetail from "../hooks/use-product-details";
import { useNavigate } from "react-router-dom";
const EditCard = () => {
  const { loading, error } = useSelector((state) => state.products);
  const { record, loading: dataLoading, error: dataError } = useProductDetail();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (record && !title && !description) {
      setTitle(record?.title);
      setDescription(record?.description);
    }
  }, [record, title, description]);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: record?.id,
        title,
        description,
      })
    )
      .unwrap()
      .then(() => navigate("/admin"));
  };

  function checkIfEmpty() {
    if (title !== "" && description !== "") {
      document.getElementById("save").removeAttribute("disabled");
    } else {
      document.getElementById("save").setAttribute("disabled", "disabled");
    }
  }

  return (
    <Loading loading={dataLoading} error={dataError}>
      <Card
        border="primary"
        style={{ width: "25rem", margin: "20px" }}
        onSubmit={formHandler}
      >
        <Card.Header>Edit</Card.Header>
        <Card.Body>
          <Form>
            <div className="form-group">
              <div className="form-group mb-3 ">
                <label className="mr-2">Upload Image:</label>
                <input type="file" name="file" />
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
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
    </Loading>
  );
};

export default EditCard;
