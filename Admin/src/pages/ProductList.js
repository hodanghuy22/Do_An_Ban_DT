import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/product/productSlice';
import { Link } from 'react-router-dom';

const columns2 = [
    {
        title: '#',
        dataIndex: 'key',
        sorter: (a, b) => a.key - b.key,
    },
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        sorter: (a, b) => a.price.length - b.price.length,
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        sorter: (a, b) => a.quantity.length - b.quantity.length,
    },
    {
        title: 'Bộ nhớ',
        dataIndex: 'rom',
    },
    {
        title: 'Màu',
        dataIndex: 'colorName',
    },
    {
        title: 'Xem chi tiết',
        dataIndex: 'viewDetails',
        render: (record) => {
            const productId = record;
            return (
                <>
                    <Link to={`/admin/product-detail/${productId}`} className='btn btn-primary m-1'>
                        Xem
                    </Link>
                </>
            );
        },
    },
];

const ProductList = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    useEffect(() => {
        const modifiedData2 = productState.map((item, index) => {
            return {
                key: index,
                price: item.price,
                name: item.phone.name,
                quantity: item.quantity,
                rom: item.capacity.totalCapacity,
                colorName: item.color.colorName,
                viewDetails: item.id,
            };
        });
        setData2(modifiedData2);
    }, [productState]);

    return (
        <div>
            <h3>Danh sách sản phẩm</h3>
            <div>
                <Table columns={columns2} dataSource={data2} />
            </div>
        </div>
    );
};

export default ProductList;