import React from 'react'

const ProductList = ({productlist}) => {
  return (
    <div>
      { productlist.length ?  productlist.map((val)=>{
        return <>
        <div className='border-grey p-2 mb-2' key={val._id}>
            <h2>{val.name}</h2>
            {
                val.data?.color ? <div>  <p className='mb-0'>Color: <span>{val.data.color}</span></p>
             <p className='mb-0'>Capacity: <span>{val.data.capacity}</span></p></div>
             : <p>Data: <span>NA</span></p>
            }
           
        </div> 
        </>
      }) : <h2>No Products Available</h2>}
    </div>
  )
}

export default ProductList
