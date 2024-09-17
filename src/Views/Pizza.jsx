import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error('Error fetching pizza:', error);
            }
        };

        fetchPizza();
    }, [id]);

    if (!pizza) return <div>Cargando...</div>;

    return (
        <div>
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <img src={pizza.imageUrl} alt={pizza.name} />
            <p>Precio: ${pizza.price}</p>
        </div>
    );
};

export default Pizza;
