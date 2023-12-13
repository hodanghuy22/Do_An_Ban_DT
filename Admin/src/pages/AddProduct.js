import React from 'react';
import CustomInput from '../components/CustomInput';
import { Checkbox } from 'antd';

const onChange = (e) => {
    return e.target.checked;
  };

const AddProduct = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='Name' />
                    <CustomInput type='text' lable='Desciption' />
                    <CustomInput type='text' lable='Loai Man' />
                    <CustomInput type='text' lable='Kich Thuoc' />
                    <CustomInput type='text' lable='Do Phan Giai' />
                    <CustomInput type='text' lable='CPU' />
                    <CustomInput type='text' lable='RAM' />
                    <CustomInput type='text' lable='ROM' />
                    <CustomInput type='text' lable='Camera Truoc' />
                    <CustomInput type='text' lable='Camera Sau' />
                    <CustomInput type='text' lable='Pin' />
                    <CustomInput type='text' lable='So Luong' />
                    <CustomInput type='text' lable='Brand' />
                    <Checkbox onChange={onChange}>Còn Hàng</Checkbox><br/>
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;