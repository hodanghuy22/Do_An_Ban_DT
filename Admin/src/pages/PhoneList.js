import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBrand, GetBrands, resetState } from '../features/brand/brandSlice';
import { Link } from "react-router-dom";
import CustomModal from '../components/CustomModal';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { GetPhones } from '../features/phone/phoneSlice';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'SoLuong',
        dataIndex: 'soLuong',
        sorter: (a, b) => a.soLuong - b.soLuong,
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const PhoneList = () => {
    const dispatch = useDispatch();
    const phoneState = useSelector(state => state?.phone?.phones)
    useEffect(()=>{
        //dispatch(resetState())
        dispatch(GetPhones())
      },[]);
    const data1 = [];
    for (let i = 0; i < phoneState?.length; i++) {
        data1.push({
            id: phoneState[i].id,
            name: phoneState[i].name,
            soLuong: phoneState[i].soLuong,
            brand: phoneState[i].brand?.title,
            status: phoneState[i].status? "Hoạt động" : "Không hoạt động",
            // action: (<>
            //     <Link className='fs-3 text-danger' to={`/admin/add-brand/${brandState[i].id}`}><BiEdit /></Link>
            //     <button className='fs-3 text-danger ms-3 text-danger bg-transparent border-0'
            //         onClick={() => showModal(brandState[i].id)}><AiFillDelete /></button>
            // </>)
        });
    }
    return (
        <div>
            <h3>Phone List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ y: 500 }} /></div>
            </div>
            {/* <CustomModal
                title="Are you sure you want to delete this brand?"
                hideModal={hideModal}
                open={open}
                performAction={() => { deleteBrand(brandId) }}
            /> */}
        </div>
    )
}

export default PhoneList