import ProductList from "./components/ProductList";
import { addProduct, fetchProducts } from "./Utils/api";
import React, { useEffect, useState,useMemo } from 'react';
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

function App() {
  const [products, setProducts] = useState([]);
  const [data, setProductData] = useState('');
  const [name, setProductName] = useState('');

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');

  const filteredData = useMemo(() => {
    return products.filter(item => {
      const matchesColor = !selectedColor || (item.data && item.data.color === selectedColor);
      const matchesCapacity = !selectedCapacity || (item.data && item.data.capacity === selectedCapacity);
      return matchesColor && matchesCapacity;
    });
  }, [products,selectedColor, selectedCapacity]);

  const colors = [...new Set(products.filter(item => item.data && item.data.color).map(item => item.data.color))];
  const capacities = [...new Set(products.filter(item => item.data && item.data.capacity).map(item => item.data.capacity))];
  const handleproduct = async()=>{
    if(!name){
      alert("Please Fill Product Name")
      return
    }
    const resp = await addProduct(name,data)
    if(resp.status === 201){
      getProducts()
      setProductData('')
      setProductName('')
    }
    else { 
        alert("Invalid JSON")
        return
    }
  }

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
       <div className="container-fluid p-3">
            <div className="row">
              <div className="col-lg-5">
               <div className="d-flex mb-3 gap-3">
                <input type="text" placeholder="Product Name" className="form-control" value={name} onChange={(e)=>{setProductName(e.target.value)}} />
                <input type="text" placeholder="Product Data (JSON)" className="form-control" value={data} onChange={(e)=>{setProductData(e.target.value)}}/>
                <div>
                <button className="btn btn-primary white-nowrap" onClick={()=>{handleproduct()}}>Add Product</button>
                </div>
               </div>
               <div className="mb-3 d-flex gap-3">

                <select name="" id="" className="form-select" onChange={(e)=>{setSelectedColor(e.target.value)}}>
                  <option value="">Filter by Color</option>
                  {colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
                  </select>
                <select name="" id="" className="form-select" onChange={(e)=>{setSelectedCapacity(e.target.value)}}>
                  <option value="">Filter by Capacity</option>
                  {capacities.map(capacity => (
            <option key={capacity} value={capacity}>{capacity}</option>
          ))}
                </select>

               </div>
               <div className="product-list">
                <ProductList productlist={filteredData}/>
               </div>

              </div>
              <div className="col-lg-7">
                <div className="">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      {
                        filteredData.length>0 && <BarChart bardata={filteredData}/>
                      }
                    
                    </div>
                  <div className="w-50">
                  {
                        filteredData.length>0 &&  <PieChart piedata={filteredData}/>
                      }
                  </div>
                  
                  </div>
                </div>
                
              </div>
            </div>
        </div> 
    </>
  );
}

export default App;
