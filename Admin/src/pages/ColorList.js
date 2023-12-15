import React from 'react';
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

const ColorList = () => {
    return (

        <div>
            <h3>Color List</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} /></div>
            </div>
        </div>
    );
};

export default ColorList;