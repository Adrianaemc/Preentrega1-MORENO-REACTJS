import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; // Asegúrate de importar el archivo CSS

const ItemDetailContainer = () => {
    const { itemId } = useParams(); // Obtiene el id del producto desde la URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => console.error('Error al obtener el producto:', error));
    }, [itemId]);

    if (!item) {
        return <p>Cargando detalles del producto...</p>;
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail">
                <img src={item.image} alt={item.title} className="item-detail-image" />
                <div className="item-detail-info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className="price">${item.price}</p>
                    <button className="add-to-cart-btn">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;


