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
        //
    });
}

const Comment = () => {
    return (

        <div>
            <h3>Comment</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ y: 500 }}/></div>
            </div>
        </div>
    );
};

export default Comment;