import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { ID } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", "4DVPnFUHXLN01xpmC3fv");

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();

          const productAdapted = {
            ID: response.id,
            categoryId: data.category,
            name: data.name,
            brand: data.brand,
            description: data.description,

            pice: data.Price,

            image: data.imageId,
            stock: data.stock,
          };
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
  }, [ID]);

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
