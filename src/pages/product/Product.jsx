import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData";
import Jacket from "../../Assets/Jacket.jpg";
import PublishRounded from '@mui/icons-material/PublishRounded';

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={Jacket} alt="" className="productInfoImg" />
              <span className="productName">Jacket</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">$120</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder='Jacket' />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={Jacket} alt="" className="productUploadImg" />
                <label for="file">
                  <PublishRounded />
                </label>
                <input type="file" id='file' />
              </div>
              <button className='productButton'>Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}
