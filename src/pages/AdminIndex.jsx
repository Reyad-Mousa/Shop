import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import CardListAdmin from "../components/CardListAdmin";
import { fetchProducts, deleteProducts } from "../store/productSlice";
import Loading from "../components/Loading";

const AdminIndex = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // function to delete (products)
  const deleteProduct = useCallback(
    (id) => dispatch(deleteProducts(id)),
    [dispatch]
  );
 
  return (
    <Loading>
      <CardListAdmin
        data={records}
        loading={loading}
        error={error}
        deleteProduct={deleteProduct}
      />
    </Loading>
  );
};

export default AdminIndex;
