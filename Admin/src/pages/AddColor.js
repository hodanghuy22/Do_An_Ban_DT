import React from 'react';
import CustomInput from '../components/CustomInput';
import { Checkbox } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { CreateColor, resetState } from '../features/color/colorSlice';

const Colorschema = yup.object({
    colorName: yup.string().required('Color Name is Required'),
    status: yup.boolean()
});

const AddColor = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            colorName: "",
            status: true,
        },
        validationSchema: Colorschema,
        onSubmit: values => {
            dispatch(CreateColor(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState())
            }, 300)
        },
    });

    return (
        <div>
            <h3 className='mb-4'>Add Color</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="colorName"
                            class="form-control"
                            placeholder="ColorName"
                            value={formik.values.colorName}
                            onChange={formik.handleChange('colorName')}
                            onBlur={formik.handleBlur('colorName')}
                        />
                        <div className='error'>
                            {
                                formik.touched.colorName && formik.errors.colorName
                            }
                        </div>
                    </div>
                    <Checkbox 
                        checked={formik.values.status}
                        onChange={formik.handleChange('status')}
                    >
                        Status
                    </Checkbox><br />
                    <br />
                    <button className='btn btn-success' type='submit'>Add Color</button>
                </form>
            </div>
        </div>
    );
};

export default AddColor;