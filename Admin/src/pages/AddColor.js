import React from 'react';
import CustomInput from '../components/CustomInput';
import { Checkbox } from 'antd';

const onChange = (e) => {
    return e.target.checked;
  };

const AddColor = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Color</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='ColorName' />
                    <Checkbox onChange={onChange}>Status</Checkbox><br/>
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Color</button>
                </form>
            </div>
        </div>
    );
};

export default AddColor;