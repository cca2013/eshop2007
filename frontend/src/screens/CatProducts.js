import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listProductsCat } from "../actions/productActions";
import { detailsProduct } from "../actions/productActions";

function CatProducts(props) {
   const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
	const productDetails = useSelector(state => state.productDetails);
    const dispatch = useDispatch();
	//var cat=0
	const cat=props.location.state.cat;
	
   const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };

	
    useEffect(() => {
        window.scrollTo(0, 0);
		   //dispatch(detailsProduct(props.match.params.id));
		  dispatch(listProductsCat(cat))
		  closemenu();
	
        return () => {
        };
    }, []);


    return (
	 <div>
	 
	  <div className="back-to-result">
                <Link to="/">
                    <span class="material-icons">arrow_back</span>
                </Link>
            </div>
	 {cat} watches
	
            {loading ? (
                <div>loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <ul className="products">
				 
                    {products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <Link to={"/product/" + product._id}>
                                    <img
                                        className="product-image"
                                        src={product.image}
                                        alt="product"
                                    />
                                </Link>
                                <Link to={"/product/" + product._id}>
                                    <div className="product-name">
                                        {product.name}
                                    </div>
                                </Link>
                                <div className="product-brand">
                                    {product.brand}
                                </div>
                                <div className="product-price">
                                    ${product.price}
                                </div>
                                <div className="product-rating">
                                    {/* {product.rating} Stars ({product.numReviews} Reviews) */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
    
		<ul>
						<li>
                            <a href="/home">Αρχική σελίδα</a>
                        </li>
		</ul>
		
		    </div>
	
		
		
		
		
		
		
		
		
		
		
		
    );
}

export default CatProducts;
