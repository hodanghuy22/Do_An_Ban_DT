import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateProduct, resetState } from '../features/product/productSlice';
import { GetPhonesShow } from '../features/phone/phoneSlice';
import { GetCapacitiesShow } from '../features/capacity/capacitySlice';
import { GetColorsShow } from '../features/color/colorSlice';
import { DeleteImg, UploadImg } from '../features/uploadImage/uploadSlice';
import Dropzone from 'react-dropzone';

const productSchema = yup.object({
  quantity: yup.number().min(1, 'Quantity must be greater than 0').required('Quantity is Required'),
  price: yup.number().min(1, 'Price must be greater than 0').required('Price is Required'),
  phoneId: yup.number().required('Phone is Required'),
  capacityId: yup.number().required('Capacity is Required'),
  colorId: yup.number().required('Color is Required'),
  hinhPublicId: yup.string(),
  fileHinh: yup.string(),
  status: yup.boolean(),
  images: yup.array()
});


const AddProduct = () => {
  const dispatch = useDispatch();
  const phoneState = useSelector(state => state?.phone?.phoneShow)
  const capacityState = useSelector(state => state?.capacity?.capacitiesShow)
  const colorState = useSelector(state => state?.color?.colorShow)
  const uploadState = useSelector(state => state?.upload?.images)


  useEffect(() => {
    dispatch(GetPhonesShow())
    dispatch(GetCapacitiesShow())
    dispatch(GetColorsShow())
  }, [])
  useEffect(() => {
    if(uploadState && uploadState.publicId){
      const newImage = {
        hinhPublicId: uploadState?.publicId,
        url: uploadState?.url
      };
      const currentImages = formik.values.images || [];
      const updatedImages = [...currentImages, newImage];
      formik.setFieldValue("images", updatedImages);
      
    }
  }, [uploadState])
  const formik = useFormik({
    //enableReinitialize: true,
    initialValues: {
      quantity: 0,
      price: 0,
      soldQuantity: 0,
      averageRating: 0,
      phoneId: "",
      capacityId: "",
      colorId: "",
      status: false,
      images: []
    },
    validationSchema: productSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(CreateProduct(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState())
      }, 300)
    },
  });

  return (
    <div>
      <h3 className='mb-4'> Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-3'>
            <select name="phoneId"
              type="number"
              value={formik.values.phoneId}
              onChange={formik.handleChange('phoneId')}
              onBlur={formik.handleBlur('phoneId')}
              id='' className='form-control py-3 mb-3'>
              <option value="">Select Phone</option>
              {
                phoneState && phoneState?.map((i, j) => {
                  return <option key={j} value={i.id}>{i.name}</option>
                })
              }
            </select>
            <div className='error'>
              {
                formik.touched.phoneId && formik.errors.phoneId
              }
            </div>
          </div>
          <div className='mb-3'>
            <select name="capacityId"
              type="number"
              value={formik.values.capacityId}
              onChange={formik.handleChange('capacityId')}
              onBlur={formik.handleBlur('capacityId')}
              id='' className='form-control py-3 mb-3'>
              <option value="">Select Capacity</option>
              {
                capacityState && capacityState?.map((i, j) => {
                  return <option key={j} value={i.id}>{i.totalCapacity}</option>
                })
              }
            </select>
            <div className='error'>
              {
                formik.touched.capacityId && formik.errors.capacityId
              }
            </div>
          </div>
          <div className='mb-3'>
            <select name="colorId"
              type="number"
              value={formik.values.colorId}
              onChange={formik.handleChange('colorId')}
              onBlur={formik.handleBlur('colorId')}
              id='' className='form-control py-3 mb-3'>
              <option value="">Select Color</option>
              {
                colorState && colorState?.map((i, j) => {
                  return <option key={j} value={i.id}>{i.colorName}</option>
                })
              }
            </select>
            <div className='error'>
              {
                formik.touched.colorId && formik.errors.colorId
              }
            </div>
          </div>
          <div className='mb-3'>
            <label class="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              class="form-control"
              placeholder="Quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange('quantity')}
              onBlur={formik.handleBlur('quantity')}
            />
            <div className='error'>
              {
                formik.touched.quantity && formik.errors.quantity
              }
            </div>
          </div>
          <div className='mb-3'>
            <label class="form-label">Price</label>
            <input
              type="number"
              name="price"
              class="form-control"
              placeholder="Price"
              value={formik.values.price}
              onChange={formik.handleChange('price')}
              onBlur={formik.handleBlur('price')}
            />
            <div className='error'>
              {
                formik.touched.price && formik.errors.price
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
          <div className='bg-white border-1 p-5 text-center'>
            <Dropzone onDrop={acceptedFiles => dispatch(UploadImg(acceptedFiles))}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
            {formik.values.images.length > 0 && formik.values.images.map((item,index) => {
              return (
                <div key={index} className='showImages d-flex flex-wrap gap-3 mb-3'>
                  <div className='position-relative'>
                    <button type="button" onClick={() => dispatch(DeleteImg(item?.hinhPublicId))} className='btn-close position-absolute' style={{ top: "10px", right: "10px" }}></button>
                    <img src={item?.url} alt="" width={200} height={200} />
                  </div>
              </div>
              )
            })}
          </div>
          <button className='btn btn-success' type='submit'> Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct