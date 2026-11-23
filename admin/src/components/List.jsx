import React, { useEffect, useState } from 'react'
import axios from 'axios'

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching list", error);
    }
  }

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`, { id: productId });
      await fetchList();
      if (response.data.success) {
        alert("تم حذف المنتج بنجاح");
      }
    } catch (error) {
      alert("خطأ أثناء الحذف");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list' style={{ padding: '30px', width: '70%' }}>
      <h2>قائمة المنتجات الحالية</h2>
      <div className="list-table">
        <div className="list-table-format title" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr', gap: '10px', fontWeight: 'bold', borderBottom: '2px solid #ccc', padding: '10px 0' }}>
          <b>الصورة</b>
          <b>الاسم</b>
          <b>التصنيف</b>
          <b>السعر</b>
          <b>إجراء</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr', gap: '10px', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <img src={`${url}/images/` + item.image} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeProduct(item._id)} style={{ cursor: 'pointer', color: 'red' }}>❌ حذف</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List