import React, { useState } from 'react'
import axios from 'axios'

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/product/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Men"
        });
        setImage(false);
        alert("تمت إضافة المنتج بنجاح!");
      } else {
        alert(response.data.message || "حدث خطأ أثناء الإضافة");
      }
    } catch (error) {
      alert("خطأ في الاتصال بالسيرفر");
    }
  }

  return (
    <div className='add' style={{ padding: '30px', width: '70%' }}>
      <h2>إضافة منتج جديد</h2>
      <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <p>رفع صورة المنتج</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" required />
        </div>
        <div>
          <p>اسم المنتج</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='اكتبي اسم المنتج' required />
        </div>
        <div>
          <p>وصف المنتج</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="4" placeholder='وصف المنتج' required></textarea>
        </div>
        <div>
          <p>التصنيف</p>
          <select onChange={onChangeHandler} name="category">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
          </select>
        </div>
        <div>
          <p>السعر ($)</p>
          <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='20' required />
        </div>
        <button type='submit' style={{ padding: '10px 20px', cursor: 'pointer' }}>حفظ المنتج</button>
      </form>
    </div>
  )
}

export default Add