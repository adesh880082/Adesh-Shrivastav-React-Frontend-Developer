import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useTheme } from "../hooks/useTheme";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen(); // initial run
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div
        className={`${styles.page} ${styles[theme]}`}
        style={theme === "theme2" ? (!isMobile ? { marginLeft: "200px" } : {}):{}}
    >
        <h1>Featured Products</h1>
        <div className={styles.grid}>
            {products.map(product => (
            <div key={product.id} className={styles.card}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <div className={styles.info}>
                    <h3 className={styles.title}>{product.title.slice(0,15)}...</h3>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    {/* <p className={styles.category}>{product.category}</p> */}
                    {/* <p className={styles.desc}>{product.description.slice(0, 80)}...</p> */}
                    <div className={styles.rating}>
                    <span className={styles.stars}>
                        {"★".repeat(Math.round(product.rating.rate)) +
                        "☆".repeat(5 - Math.round(product.rating.rate))}
                    </span>
                    <span>({product.rating.count})</span>
                    </div>
                </div>
                <div className={theme !== "theme3" ? styles.buttonGroup : styles.buttonGroup2}>
                  <button className="btn buy">Buy Now</button>
                  <button className="btn cart">Add to Cart</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}
