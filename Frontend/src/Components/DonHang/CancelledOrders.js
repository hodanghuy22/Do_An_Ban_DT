import React from 'react'
import { Button } from 'react-bootstrap'

const CancelledOrders = () => {
  return (
    <div>
      <div className='bg-light shadow pt-4 pb-4 mb-3 bg-white rounded'>
        <div className='border p-3 w-100'>
          <div className='d-flex'>
            <div className='d-inline-block'>
              <span className='font-weight-bold'>Đơn hàng: $72771045</span>
              <span className='ml-3'>Giao Trước 10:00 - Chủ Nhật (27/08)</span>
            </div>
            <div className='ml-auto'>
              <p className='text-danger'>Đã hủy</p>
            </div>
          </div>
          <hr />
          <div className='d-flex'>
            <div className='d-flex'>
              <img width='60px' height='60px' src='https://www.thegioididong.com/lich-su-mua-hang/images/no-image.jpg' alt='ảnh' />
              <p className='w-75 ml-2'>Tai nghe Bluetooth TWS Mozard DS635-WB Đen</p>
            </div>
            <div className='ml-auto'>
              <p>Tổng tiền: <span className='h5'>195.000đ</span></p>
            </div>
          </div>
          <div className='ml-auto mt-2'>
            <Button className=' btn-light border border-warning text-warning '>Xem chi tiết</Button>
          </div>
        </div>
        <div className='border p-3 w-100'>
          <div className='d-flex'>
            <div className='d-inline-block'>
              <span className='font-weight-bold'>Đơn hàng: $72771045</span>
              <span className='ml-3'>Giao Trước 10:00 - Chủ Nhật (27/08)</span>
            </div>
            <div className='ml-auto'>
              <p className='text-danger'>Đã hủy</p>
            </div>
          </div>
          <hr />
          <div className='d-flex'>
            <div className='d-flex'>
              <img width='60px' height='60px' src='https://www.thegioididong.com/lich-su-mua-hang/images/no-image.jpg' alt='ảnh' />
              <p className='w-75 ml-2'>Tai nghe Bluetooth TWS Mozard DS635-WB Đen</p>
            </div>
            <div className='ml-auto'>
              <p>Tổng tiền: <span className='h5'>195.000đ</span></p>
            </div>
          </div>
          <div className='ml-auto mt-2'>
            <Button className=' btn-light border border-warning text-warning '>Xem chi tiết</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelledOrders
