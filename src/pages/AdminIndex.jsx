import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardListAdmin from "../components/CardListAdmin";
import { fetchProducts } from "../store/productSlice";
import Loading from "../components/Loading";

const AdminIndex = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Loading>
      <CardListAdmin data={records} loading={loading} error={error} />
    </Loading>
  );
};

export default AdminIndex;
