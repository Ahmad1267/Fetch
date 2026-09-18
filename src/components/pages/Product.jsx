import React from 'react'
import Header1 from '../common/Header1'
import Footer1 from '../common/Footer1'
import './Product.css'
import products from '../../data/ProData'


export default function Product() {
  return (
    <div>
    <section className="products-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="heading-area">
            <span className="featured">Featured Collection</span>

            <h1>Product Static Card Layout</h1>

            <p>
              Explore a clean product section with pricing, ratings,
              and action buttons.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button className="active">All Products</button>
            <button>New In</button>
            <button>Popular</button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>

              {/* Image */}
              <div className="image-container">
                <img
                  src={product.image}
                //   alt={product.name}
                />

                <span className="category">
                  {product.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="card-content">

                {/* Rating + Stock */}
                <div className="rating-row">
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-number">
                      ({product.rating})
                    </span>
                  </div>

                  <span className="stock">
                    In Stock
                  </span>
                </div>

                {/* Product Name */}
                <h2>{product.name}</h2>

                {/* Description */}
                <p className="description">
                  {product.description}
                </p>

                {/* Price */}
                <div className="price-row">
                  <span className="price">
                    {product.price}
                  </span>

                  <span className="old-price">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="card-buttons">
                  <button className="add-cart">
                    Add to Cart
                  </button>

                  <button className="view-btn">
                    View
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
    </div>
  )
}
