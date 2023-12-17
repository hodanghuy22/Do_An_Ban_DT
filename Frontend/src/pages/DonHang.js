import React, { useState } from 'react'
import AllOrders from '../Components/DonHang/AllOrders';
import PlacedOrders from '../Components/DonHang/PlacedOrders';
import ConfirmedOrders from '../Components/DonHang/ConfirmedOrders';
import DeliveringOrders from '../Components/DonHang/DeliveringOrders';
import DeliveredOrders from '../Components/DonHang/DeliveredOrders';
import CancelledOrders from '../Components/DonHang/CancelledOrders';
import { Helmet } from 'react-helmet';



const DonHang = () => {
  const [selectedTab, setSelectedTab] = useState('Tất cả');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderForm = () => {
    switch (selectedTab) {
      case 'Tất cả':
        return <AllOrders />;
      case 'Đã đặt':
        return <PlacedOrders />;
      case 'Đã xác nhận':
        return <ConfirmedOrders />;
      case 'Đang giao':
        return <DeliveringOrders />;
      case 'Đã giao':
        return <DeliveredOrders />;
      case 'Đã hủy':
        return <CancelledOrders />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Lịch sử mua hang | PHBshop</title>
      </Helmet>
      <div>
        <div className="bg-light shadow mb-3 bg-white rounded d-flex">
          <div className={`pt-3 pb-3 w-25 ${selectedTab === 'Tất cả' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Tất cả' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Tất cả')}>Tất cả</p>
          </div>
          <div className={`pt-3 pb-3 w-25 ml-2 ${selectedTab === 'Đã đặt' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Đã đặt' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Đã đặt')}>Đã đặt</p>
          </div>
          <div className={`pt-3 pb-3 w-25 ml-2 ${selectedTab === 'Đã xác nhận' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Đã xác nhận' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Đã xác nhận')}>Đã xác nhận</p>
          </div>
          <div className={`pt-3 pb-3 w-25 ml-2 ${selectedTab === 'Đang giao' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Đang giao' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Đang giao')}>Đang giao</p>
          </div>
          <div className={`pt-3 pb-3 w-25 ml-2 ${selectedTab === 'Đã giao' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Đã giao' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Đã giao')}>Đã giao</p>
          </div>
          <div className={`pt-3 pb-3 w-25 ml-2 ${selectedTab === 'Đã hủy' ? 'border-bottom border-danger' : 'border-bottom'}`} style={{ cursor: 'pointer' }}>
            <p className={`m-auto text-center ${selectedTab === 'Đã hủy' ? 'text-danger' : ''}`} onClick={() => handleTabClick('Đã hủy')}>Đã hủy</p>
          </div>
        </div>
        <div>
          {renderForm()}
        </div>
      </div>
    </>
  );
};


export default DonHang
