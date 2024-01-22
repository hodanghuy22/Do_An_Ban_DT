import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

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
            sales: 66,
        },
        {
            type: 'Jul',
            sales: 38,
        },
        {
            type: 'Aug',
            sales: 55,
        },
        {
            type: 'Sep',
            sales: 38,
        },
        {
            type: 'Oct',
            sales: 66,
        },
        {
            type: 'Nov',
            sales: 31,
        },
        {
            type: 'Dec',
            sales: 22,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        columnWidthRatio: 0.8,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
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
            <br></br>
            <div>
                <h4>Income Chart</h4>
                <br></br>
                <Column {...config} />
            </div>
        </div>
    );
};

export default Dashboard;