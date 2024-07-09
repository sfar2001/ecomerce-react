import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

export default function Electronics() {
    const [menProd, setMenProd] = useState([]);

    const url = "https://fakestoreapi.com/products";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Could not fetch data");
                }
                const data = await response.json();
                const menClothingProducts = data.filter(
                    (product) => product.category === "electronics"
                );
                setMenProd(menClothingProducts);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);


    if (!menProd) {
        return <div>Loading...</div>;
    }


    return (

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', scrollBehavior: 'smooth' }}>
            {menProd.map((product, index) => (
                <Card key={index} sx={{ maxWidth: 345, margin: "auto", display: 'grid' }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={product.image}
                        title={product.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>

    );
}
