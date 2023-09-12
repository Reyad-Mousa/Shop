import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../store/productSlice";
import { useParams } from "react-router-dom";

const useProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, record } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  return { loading, error, record };
};

export default useProductDetail;
