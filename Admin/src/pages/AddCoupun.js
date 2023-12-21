import React from 'react';
import CustomInput from '../components/CustomInput';

const AddCoupon = () => {
    return (
        <div>
            <h3 className='mb-4'>Add Product</h3>
            <div>
                <form action=''>
                    <CustomInput type='text' lable='Id' />
                    <CustomInput type='text' lable='Title' />
                    <CustomInput type='text' lable='code' />
                    <CustomInput type='text' lable='DiscountPercent' />
                    <CustomInput type='text' lable='DiscountMoney' />
                    <CustomInput type='text' lable='RequiredTotal' />
                    <CustomInput type='text' lable='StartDate' />
                    <CustomInput type='text' lable='EndDate' />
                    <CustomInput type='text' lable='Quantity' />
                    <CustomInput type='text' lable='Status' />
                    <br/>
                    <button className='btn btn-success' type='submit'>Add Coupon</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoupon;