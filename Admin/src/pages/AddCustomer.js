import React from 'react';
import CustomInput from '../components/CustomInput';

const AddCustomer = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='Id' />
                    <CustomInput type='text' lable='Name' />
                    <CustomInput type='text' lable='Age' />
                    <CustomInput type='text' lable='Address' />
                    <CustomInput type='text' lable='Email' />
                    <CustomInput type='text' lable='Username' />
                    <CustomInput type='text' lable='Phone Number' />
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Customer</button>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;