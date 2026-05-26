import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                setProducts(data.slice(0, 6));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <section className="products container">
                <h2>{error}</h2>
            </section>
        );
    }

    return (
        <section className="products container" id="products">
            <h2 className="section-title">Featured Products</h2>

            <div className="product-grid">
                {products.map((item) => (
                    <motion.div
                        className="card"
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>{item.title}</h3>

                        <p>{item.body}</p>

                        <button>Read More</button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Products;