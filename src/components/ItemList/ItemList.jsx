import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <div key={producto.id} className="card">
                        <img src={producto.image} alt={producto.title} className="image" />
                        <h3>{producto.title}</h3>
                        <p className="price">${producto.price}</p>

                        <div className="counter">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <Link to={`/item/${producto.id}`} className="button">Ver Detalle</Link>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ItemList;
