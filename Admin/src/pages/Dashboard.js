import React from 'react';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Name ${i}`,
      age: 20,
      address: `Address ${i}`,
    });
  }

const Dashboard = () => {
    const data = [
        {
            type: 'Jan',
            sales: 38,
        },
        {
            type: 'Feb',
            sales: 52,
        },
        {
            type: 'Mar',
            sales: 61,
        },
        {
            type: 'Apr',
            sales: 145,
        },
        {
            type: 'May',
            sales: 48,
        },
        {
            type: 'Jun',
            sales: 38,
        },
        {
            type: 'July',
            sales: 10,
        },
        {
            type: 'Aug',
            sales: 20,
        },
        {
            type: 'Sept',
            sales: 55,
        },
        {
            type: 'Oct',
            sales: 38,
        },
        {
            type: 'Nov',
            sales: 32,
        },
        {
            type: 'Dec',
            sales: 48,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return '#ffd333';
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Month',
            },
            sales: {
                alias: 'Income',
            },
        },
    };
    return (
        <div>
            <h3 className='mb-4'>Dashboard</h3>
            <div className='d-flex justify-content-between align-item-center gap-3'>
                <div className='d-flex justify-content-between align-item-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div><p>total</p><h4>1000$</h4></div>
                    <div className='d-flex flex-column align-items-end'><h6>32%</h6><p>April 2023</p></div>
                </div>
                <div className='d-flex justify-content-between align-item-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div><p>total</p><h4>1000$</h4></div>
                    <div className='d-flex flex-column align-items-end'><h6>32%</h6><p>April 2023</p></div>
                </div>
                <div className='d-flex justify-content-between align-item-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div><p>total</p><h4>1000$</h4></div>
                    <div className='d-flex flex-column align-items-end'><h6>32%</h6><p>April 2023</p></div>
                </div>
            </div>
            <div className='mt-4 bg-white p-3'>
                <h3 className='mb-4'>Income Statics</h3>
                <div><Column {...config} /></div>
            </div>
            <div className='mt-4 bg-white p-3'>
                <h3 className='mb-4'>Recent Orders</h3>
                <div><Table columns={columns} dataSource={data1} /></div>
            </div>
        </div>
    );
};

export default Dashboard;