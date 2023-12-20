import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetCoupons } from '../features/coupon/couponSlice';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Code',
        dataIndex: 'code',
    },
    {
        title: 'DiscountPercent',
        dataIndex: 'discountPercent',
    },
    {
        title: 'DiscountMoney',
        dataIndex: 'discountMoney',
    },
    {
        title: 'RequiredTotal',
        dataIndex: 'requiredTotal',
    },
    {
        title: 'StartDate',
        dataIndex: 'startDate',
    },
    {
        title: 'EndDate',
        dataIndex: 'endDate',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const CouponList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetCoupons())
    },[]);
    const couponState = useSelector(state => state?.coupon?.coupons)
    const data1 = [];
    for (let i = 0; i < couponState?.length; i++) {
        data1.push({
        id: couponState[i].id,
        title: couponState[i].title,
        code: couponState[i].code,
        discountPercent: couponState[i].discountPercent,
        discountMoney: couponState[i].discountMoney,
        requiredTotal: couponState[i].requiredTotal,
        startDate: couponState[i].startDate,
        endDate: couponState[i].endDate,
        quantity: couponState[i].quantity,
        status: couponState[i].status,
        });
    }
    return (

        <div>
            <h3>Coupon List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} /></div>
            </div>
        </div>
    );
};

export default CouponList;