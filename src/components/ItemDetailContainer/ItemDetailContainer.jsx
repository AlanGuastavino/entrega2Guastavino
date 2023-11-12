import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("Document does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      {loading ? (
        <h3 className="Loading">Cargando...</h3>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <p>El producto no fue encontrado</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
