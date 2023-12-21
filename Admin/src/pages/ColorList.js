import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetColors } from '../features/color/colorSlice';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'ColorName',
        dataIndex: 'colorName',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const ColorList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetColors())
    },[]);
    const colorState = useSelector(state => state?.color?.colors)
    const data1 = [];
    for (let i = 0; i < colorState?.length; i++) {
        data1.push({
        id: colorState[i].id,
        colorName: colorState[i].colorName,
        status: colorState[i].status,
        });
    }
    return (

        <div>
            <h3>Color List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ y: 500 }}/></div>
            </div>
        </div>
    );
};

export default ColorList;