export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-card-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-card-actions"> 
                <button className="btn btn-secondary">Add to Cart</button>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
}