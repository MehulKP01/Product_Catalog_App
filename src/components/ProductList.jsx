import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import Skeleton from "../utils/Skeleton";
import Cards from "./Cards";
import { isValidArray } from "../utils/validation";
import Filters from "./Filters";

const ProductList = () => {
  const dispatch = useDispatch(); // hooks to dispatch an action
  const productList = useSelector((state) => state.products); // hooks to get products from store
  const filterData = useSelector((state) => state.filters); // hooks to get applied filters from store
  const [searchName, setSearchName] = useState(filterData?.searchByName ?? ""); //state to store search value
  const [category, setCategory] = useState(filterData?.searchByCategory ?? ""); //state to store category value

  // To fetch products from API on component mount
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Filter products based on searchName
  const filteredProducts = productList?.data
    ?.filter((product) =>
      product.title.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((product) => {
      return category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;
    });

  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Header section */}
      <Header searchName={searchName} setSearchName={setSearchName} />

      {/* Filters section */}
      <Filters
        category={category}
        setCategory={setCategory}
        productList={productList}
        setSearchName={setSearchName}
      />

      {/* Product List */}
      <main className="container mx-auto md:px-20 px-10 py-8">
        {productList?.isLoading && !productList?.isError ? (
          <Skeleton />
        ) : // Check if there are filtered products
        isValidArray(filteredProducts) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts?.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <p className="text-center text-lg italic">No Products Found..</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductList;
