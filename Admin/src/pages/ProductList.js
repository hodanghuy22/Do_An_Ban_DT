import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'desc',
    },
    {
        title: 'Loai Man',
        dataIndex: 'loaiMan',
    },
    {
        title: 'Kich Thuoc',
        dataIndex: 'kichThuoc',
    },
    {
        title: 'Do Phan Giai',
        dataIndex: 'doPhanGiai',
    },
    {
        title: 'CPU',
        dataIndex: 'cpu',
    },
    {
        title: 'RAM',
        dataIndex: 'ram',
    },
    {
        title: 'ROM',
        dataIndex: 'rom',
    },
    {
        title: 'Camera Truoc',
        dataIndex: 'cameraTruoc',
    },
    {
        title: 'Camera Sau',
        dataIndex: 'cameraSau',
    },
    {
        title: 'Pin',
        dataIndex: 'pin',
    },
    {
        title: 'So Luong',
        dataIndex: 'soLuong',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
];
const data1 = [];
for (let i = 0; i < 100; i++) {
    data1.push({
        //       
    });
}

const ProductList = () => {
    return (

        <div>
            <h3>Product List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ x: 2000, y: 500 }} /></div>
            </div>
        </div>
    );
};

export default ProductList;