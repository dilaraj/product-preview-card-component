import './App.css'
import productImgLarge from './assets/image-product-desktop.jpg'
import productImgSmall from './assets/image-product-mobile.jpg'
import cartIcon from './assets/icon-cart.svg'

function App() {

  return (
   <div className="product-preview-container">
    <div className="product-preview-img">
      <img src={productImgSmall} alt="Mobile Product Img" className="product-img-mobile" />
      <img src={productImgLarge} alt="Mobile Product Large" className="product-img-desktop" />
    </div>
    <div className="product-preview-info">
      <span className="subheading">PERFUME</span>
      <div className="product-name">Gabrielle Essence Eu De Parfum</div>
      <div className="product-description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </div>
      <div className="product-price">
        $149.99
        <span className="original-price">$169.99</span>
      </div>
      <button type="submit" className='cart-btn'>
        <img src={cartIcon} alt="Cart Icon" />
        <span>Add to Cart</span>
      </button>
    </div>
   </div>
  )
}

export default App
