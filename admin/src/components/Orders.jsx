import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        console.log("Error fetching orders");
      }
    } catch (error) {
      console.log("Server error", error);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log("Error updating status", error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='orders add' style={{ padding: '30px', width: '80%' }}>
      <h2>طلبات العملاء (Orders Page)</h2>
      <div className="order-list">
        {orders.length === 0 ? (
          <p>لا توجد طلبات حتى الآن</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
              <p><b>📦 المنتجات:</b> {order.items.map((item, i) => {
                if (i === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}</p>
              <p><b>👤 اسم العميل:</b> {order.address.firstName + " " + order.address.lastName}</p>
              <p><b>📍 العنوان:</b> {order.address.street + ", " + order.address.city + ", " + order.address.country}</p>
              <p><b>📞 الهاتف:</b> {order.address.phone}</p>
              <p><b>💰 الإجمالي:</b> ${order.amount}</p>
              <p><b>عدد المنتجات:</b> {order.items.length}</p>
              
              <div>
                <label><b>حالة الطلب: </b></label>
                <select onChange={(e) => statusHandler(e, order._id)} value={order.status} style={{ padding: '5px' }}>
                  <option value="Food Processing">قيد المعالجة (Processing)</option>
                  <option value="Out for delivery">جاري التوصيل (Out for delivery)</option>
                  <option value="Delivered">تم التوصيل (Delivered)</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;