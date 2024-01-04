import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetInvoices, UpdateStatusInvoice, resetState } from '../features/invoice/invoiceSlice';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'UserName',
        dataIndex: 'userName',
    },
    {
        title: 'ShippingInfo',
        dataIndex: 'shippingInfo',
    },
    {
        title: 'IssueDate',
        dataIndex: 'issueDate',
    },
    {
        title: 'TotalPrice',
        dataIndex: 'totalPrice',
    },
    {
        title: 'TotalPriceAfterDiscount',
        dataIndex: 'totalPriceAfterDiscount',
    },
    {
        title: 'CouponTitle',
        dataIndex: 'couponTitle',
    },
    {
        title: 'OrderStatus',
        dataIndex: 'orderStatus',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Invoice = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetInvoices())
    }, []);
    const invoiceState = useSelector(state => state?.invoice?.invoices)
    const data1 = [];
    for (let i = 0; i < invoiceState?.length; i++) {
        data1.push({
            id: invoiceState[i].id,
            userName: invoiceState[i].user?.name,
            shippingInfo: invoiceState[i].shippingInfo,
            issueDate: invoiceState[i].issueDate,
            totalPrice: invoiceState[i].totalPrice,
            totalPriceAfterDiscount: invoiceState[i].totalPriceAfterDiscount,
            couponTitle: invoiceState[i].coupon?.title,
            orderStatus: (<>
                <select defaultValue={invoiceState[i]?.orderStatus}
                    onClick={(e)=> UpdateStatus(invoiceState[i]?.id,e.target.value)}
                    name="" className='form-control form-select'> 
                  <option value="HDM" disabled selected>Hóa Đơn Mới</option>
                  <option value="DXL">Đang Xử Lý</option>
                  <option value="DG">Đang Giao</option>
                  <option value="HT">Hoàn Thành</option>
                </select>
              </>),
            action: (<Link className='fs-3 text-info' to={`/admin/invoiceDetails/${invoiceState[i].id}`}><BiEdit /></Link>)
        });
    }

    const UpdateStatus = (a,b)=>
    {
        dispatch(UpdateStatusInvoice({id:a, status:b}))
    }

    return (

        <div>
            <h3>Invoice</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ x: 1500, y: 500 }}/></div>
            </div>
        </div>
    );
};

export default Invoice;