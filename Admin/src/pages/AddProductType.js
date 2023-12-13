import React from 'react';
import CustomInput from '../components/CustomInput';
import { Checkbox } from 'antd';

const onChange = (e) => {
    return e.target.checked;
  };

const AddProductType = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='Loai' />
                    <Checkbox onChange={onChange}>Còn Hàng</Checkbox><br/>
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductType;