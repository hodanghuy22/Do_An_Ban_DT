import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { Field, FieldArray, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreatePhone, resetState } from '../features/phone/phoneSlice';
import { GetProductTypes } from '../features/productType/productTypeSlice';
import { GetBrandsShow } from '../features/brand/brandSlice';

const phoneSchema = yup.object({
    name: yup.string().required('Name is Required'),
    desc: yup.string(),
    loaiMan: yup.string(),
    kichThuoc: yup.string(),
    doPhanGiai: yup.string(),
    cpu: yup.string(),
    ram: yup.string(),
    rom: yup.string(),
    cameraTruoc: yup.string(),
    cameraSau: yup.string(),
    pin: yup.string(),
    soLuong: yup.number().required('SoLuong is Required'),
    status: yup.bool(),
    brandId: yup.number().required('Brand is Required'),
    productTypeIds: yup.array().min(1, 'Please select at least one product type detail'),
});

const AddPhone = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProductTypes())
        dispatch(GetBrandsShow())
    }, [])
    const handleChange = (event) => {
        const { value } = event.target;
      
        if (!isNaN(value)) {
          formik.setFieldValue('brandId', Number(value));
        }
      };
    const productTypeState = useSelector(state => state?.productType?.productTypes)
    const brandState = useSelector(state => state?.brand?.brandShow)
    const formik = useFormik({
        //enableReinitialize: true,
        initialValues: {
            name: "",
            desc: "",
            loaiMan: "",
            kichThuoc: "",
            doPhanGiai: "",
            cpu: "",
            ram: "",
            rom: "",
            cameraTruoc: "",
            cameraSau: "",
            pin: "",
            soLuong: "",
            status: false,
            brandId: "",
            hinhPublicId: "",
            fileHinh: "",
            productTypeIds: [],
        },
        validationSchema: phoneSchema,
        onSubmit: values => {
            console.log(values);
            dispatch(CreatePhone(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState())
            }, 300)
        },
    });
    return (
        <div>
            <h3 className='mb-4'> Phone</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name"
                            value={formik.values.name.toUpperCase()}
                            onChange={formik.handleChange('name')}
                            onBlur={formik.handleBlur('name')}
                        />
                        <div className='error'>
                            {
                                formik.touched.name && formik.errors.name
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="desc"
                            class="form-control"
                            placeholder="Desc"
                            value={formik.values.desc}
                            onChange={formik.handleChange('desc')}
                            onBlur={formik.handleBlur('desc')}
                        />
                        <div className='error'>
                            {
                                formik.touched.desc && formik.errors.desc
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="loaiMan"
                            class="form-control"
                            placeholder="Loại Màn Hình"
                            value={formik.values.loaiMan}
                            onChange={formik.handleChange('loaiMan')}
                            onBlur={formik.handleBlur('loaiMan')}
                        />
                        <div className='error'>
                            {
                                formik.touched.loaiMan && formik.errors.loaiMan
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="kichThuoc"
                            class="form-control"
                            placeholder="Kích Thước"
                            value={formik.values.kichThuoc}
                            onChange={formik.handleChange('kichThuoc')}
                            onBlur={formik.handleBlur('kichThuoc')}
                        />
                        <div className='error'>
                            {
                                formik.touched.kichThuoc && formik.errors.kichThuoc
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="doPhanGiai"
                            class="form-control"
                            placeholder="Độ Phân Giải"
                            value={formik.values.doPhanGiai}
                            onChange={formik.handleChange('doPhanGiai')}
                            onBlur={formik.handleBlur('doPhanGiai')}
                        />
                        <div className='error'>
                            {
                                formik.touched.doPhanGiai && formik.errors.doPhanGiai
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="cpu"
                            class="form-control"
                            placeholder="CPU"
                            value={formik.values.cpu}
                            onChange={formik.handleChange('cpu')}
                            onBlur={formik.handleBlur('cpu')}
                        />
                        <div className='error'>
                            {
                                formik.touched.cpu && formik.errors.cpu
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="ram"
                            class="form-control"
                            placeholder="RAM"
                            value={formik.values.ram}
                            onChange={formik.handleChange('ram')}
                            onBlur={formik.handleBlur('ram')}
                        />
                        <div className='error'>
                            {
                                formik.touched.ram && formik.errors.ram
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="rom"
                            class="form-control"
                            placeholder="ROM"
                            value={formik.values.rom}
                            onChange={formik.handleChange('rom')}
                            onBlur={formik.handleBlur('rom')}
                        />
                        <div className='error'>
                            {
                                formik.touched.rom && formik.errors.rom
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="cameraTruoc"
                            class="form-control"
                            placeholder="Camera Trước"
                            value={formik.values.cameraTruoc}
                            onChange={formik.handleChange('cameraTruoc')}
                            onBlur={formik.handleBlur('cameraTruoc')}
                        />
                        <div className='error'>
                            {
                                formik.touched.cameraTruoc && formik.errors.cameraTruoc
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="cameraSau"
                            class="form-control"
                            placeholder="Camera Sau"
                            value={formik.values.cameraSau}
                            onChange={formik.handleChange('cameraSau')}
                            onBlur={formik.handleBlur('cameraSau')}
                        />
                        <div className='error'>
                            {
                                formik.touched.cameraSau && formik.errors.cameraSau
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="pin"
                            class="form-control"
                            placeholder="Pin"
                            value={formik.values.pin}
                            onChange={formik.handleChange('pin')}
                            onBlur={formik.handleBlur('pin')}
                        />
                        <div className='error'>
                            {
                                formik.touched.pin && formik.errors.pin
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="number"
                            name="soLuong"
                            class="form-control"
                            placeholder="Số Lượng"
                            value={formik.values.soLuong}
                            onChange={formik.handleChange('soLuong')}
                            onBlur={formik.handleBlur('soLuong')}
                        />
                        <div className='error'>
                            {
                                formik.touched.soLuong && formik.errors.soLuong
                            }
                        </div>
                    </div>
                    
                    <div className='mb-3'>
                        <select name="brandId"
                            type="number"
                            value={formik.values.brandId}
                            onChange={handleChange}
                            onBlur={formik.handleBlur('brandId')}
                            id='' className='form-control py-3 mb-3'>
                            <option value="">Select Brand</option>
                            {
                                brandState && brandState?.map((i, j) => {
                                    return <option key={j} value={i.id}>{i.title}</option>
                                })
                            }
                        </select>
                        <div className='error'>
                            {
                                formik.touched.brandId && formik.errors.brandId
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="productTypeIds">Product Type Details:</label>
                        <div role="group" aria-labelledby="checkbox-group">
                            {
                                productTypeState && productTypeState?.map((item, index) => {
                                    return (
                                        <Checkbox 
                                            key={index}
                                            value={item.id}
                                            name="productTypeIds"
                                            checked={formik.values.productTypeIds.includes(item.id)}
                                            onChange={formik.handleChange('productTypeIds')}
                                            //defaultChecked={formik.values.productTypeDetails}
                                        >
                                            {item.title}
                                        </Checkbox>
                                    )
                                })
                            }
                        </div>
                        <div className='error'>
                            {
                                formik.touched.productTypeIds && formik.errors.productTypeIds
                            }
                        </div>
                    </div>
                    <Checkbox
                        name="status"
                        checked={formik.values.status}
                        onChange={formik.handleChange('status')}
                        defaultChecked={formik.values.status}
                    >
                        Status
                    </Checkbox><br />
                    <br />
                    <button className='btn btn-success' type='submit'> Phone</button>
                </form>
            </div>
        </div>
    );
};

export default AddPhone;