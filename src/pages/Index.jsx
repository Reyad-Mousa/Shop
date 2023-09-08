import CardListUser from "../components/CardListUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import CardListAdmin from "../components/CardListAdmin";
// import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <CardListUser data={records} loading={loading} error={error} />
    </>
  );
};

export default Index;
