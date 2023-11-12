import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const collectionRef = categoryId
          ? query(
              collection(db, "products"),
              where("category", "==", categoryId)
            )
          : collection(db, "products");
        const querySnapshot = await getDocs(collectionRef);
        const productsAdapted = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    console.log(categoryId);
    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId}</h1>
      <ItemList products={products}></ItemList>
    </div>
  );
};

export default ItemListContainer;
