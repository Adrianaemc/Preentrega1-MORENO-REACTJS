import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const { categoryId } = useParams(); // Obtén el parámetro de la categoría
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                let url = 'https://fakestoreapi.com/products'; // Todos los productos por defecto

                // Si hay una categoría, filtra por esa categoría
                if (categoryId) {
                    const categoryMap = {
                        men: "men's clothing",
                        women: "women's clothing"
                    };
                    const category = categoryMap[categoryId]; // Mapea el categoryId a la categoría correcta
                    url = `https://fakestoreapi.com/products/category/${category}`;
                }

                const response = await fetch(url);
                const productosData = await response.json();

                // Filtra solo los productos de "ropa de hombre" y "ropa de mujer" si no se seleccionó ninguna categoría
                if (!categoryId) {
                    const productosFiltrados = productosData.filter(product =>
                        product.category === "men's clothing" || product.category === "women's clothing"
                    );
                    setProductos(productosFiltrados);
                } else {
                    setProductos(productosData);
                }
            } catch (error) {
                console.error("Error al cargar los productos", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [categoryId]); // Se ejecuta cuando cambia la categoría en la URL

    return (
        <div>
            <h2>¡Bienvenido a ARCLOTING!</h2>
            <p>Explora nuestras categorías:</p>

            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div>
                    <h3>{categoryId ? (categoryId === 'men' ? 'Ropa de Hombre' : 'Ropa de Mujer') : 'Todos los productos'}</h3>
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
