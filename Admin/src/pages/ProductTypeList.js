import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductTypes } from '../features/productType/productTypeSlice';

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
        title: 'Status',
        dataIndex: 'status',
    },
];

const ProductTypeList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetProductTypes())
    },[]);
    const productTypeState = useSelector(state => state?.productType?.productTypes)
    const data1 = [];
    for (let i = 0; i < productTypeState?.length; i++) {
        data1.push({
        id: productTypeState[i].id,
        title: productTypeState[i].title,
        status: productTypeState[i].status,
        });
    }
    return (

        <div>
            <h3>Product Type List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{y: 500}} /></div>
            </div>
        </div>
    );
};

export default ProductTypeList;