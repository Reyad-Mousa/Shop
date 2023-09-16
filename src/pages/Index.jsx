import CardListUser from "../components/CardListUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Loading>
      <CardListUser
        data={records}
        loading={loading}
        error={error}
      />
    </Loading>
  );
};

export default Index;
