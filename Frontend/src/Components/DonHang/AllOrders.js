import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllInvoice } from '../../features/invoice/invoiceSlice';

const AllOrders = () => {
  const authState = useSelector(state => state?.auth?.user?.userDto);
  const invocieState = useSelector(state => state?.invoice?.invoices);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllInvoice(authState?.id))
  }, [])
  return (
    <div>
      {
        invocieState && invocieState?.map((item, index) => {
          return (
            <div key={index} className='bg-light shadow pt-4 pb-4 mb-3 bg-white rounded'>
              <div className='border p-3 w-100'>
                <div className='d-flex'>
                  <div className='d-inline-block'>
                    <span className='font-weight-bold'>Đơn hàng: {item?.id}</span>
                    <span className='ml-3'>Ngày đặt {item?.issueDate}</span>
                  </div>
                  <div className='ml-auto'>
                    <p className='text-danger'>{item?.orderStatus}</p>
                  </div>
                </div>
                <hr />
                {
                  item && item?.invoiceDetails?.map(i => {
                    return (
                      <div className='d-flex'>
                        <div className='d-flex'>
                          <img width='60px' height='60px' src={i?.product?.images && i.product.images.length > 0 ? i.product.images[0].url : ''} alt='ảnh' />
                          <p className='w-75 ml-2'>{i?.product?.phone?.name}</p>
                        </div>
                        <div className='ml-auto'>
                          <p>Tổng tiền: <span className='h5'>{i?.totalPrice}</span></p>
                        </div>
                      </div>
                    )
                  })
                }

                <div className='ml-auto mt-2'>
                  <Link to={`chi-tiet-don-hang/${item?.id}`} className='btn btn-light border border-warning text-warning btn-hover '>Xem chi tiết</Link>
                </div>
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

export default AllOrders
