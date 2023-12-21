import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetBrands } from '../features/brand/brandSlice';
import { Link } from "react-router-dom";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'HinhPublicId',
        dataIndex: 'hinhPublicId',
    },
    {
        title: 'FileHinh',
        dataIndex: 'fileHinh',
    },
];

const BrandList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetBrands())
    },[]);
    const brandState = useSelector(state => state?.brand?.brands)
    const data1 = [];
    for (let i = 0; i < brandState?.length; i++) {
        data1.push({
        id: brandState[i].id,
        title: brandState[i].title,
        status: brandState[i].status,
        hinhPublicId: brandState[i].hinhPublicId,
        fileHinh: brandState[i].fileHinh,
        });
    }
    return (

        <div>
            <h3>Brand List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ y: 500 }}/></div>
            </div>
        </div>
    );
};

export default BrandList;