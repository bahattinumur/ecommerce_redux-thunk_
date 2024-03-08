import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader";
import { getData } from "../redux/actions/productActions";
import Card from "../component/Card";
import { getBasket } from "../redux/actions/basketActions";

const HomePage = () => {
  // Store'a abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sdece bir aksiyon calıştırıcagız
    // Bu action API isteğinide arkaplanda yapıcak
    dispatch(getData());

    // Sepetteki verileri al.
    dispatch(getBasket());
  }, []);

  return (
    <div className="container">
      {/* Veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/* hata oluştuysa ekrana bas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse ekrana bas */}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {store?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
