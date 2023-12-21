import React from 'react';
import CustomInput from '../components/CustomInput';
import { Checkbox } from 'antd';

const onChange = (e) => {
    return e.target.checked;
  };

const AddBrand = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Brand</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='Title' />
                    <CustomInput type='text' lable='HinhPublicId' />
                    <CustomInput type='text' lable='FileHinh' />
                    <CustomInput type='text' lable='Function' />
                    <Checkbox onChange={onChange}>Status</Checkbox><br/>
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Brand</button>
                </form>
            </div>
        </div>
    );
};

export default AddBrand;