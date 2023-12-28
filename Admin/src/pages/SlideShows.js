import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteSlideShow, GetSlideShows, resetState } from '../features/slideshow/slideshowSlice';
import { Link } from "react-router-dom";
import CustomModal from '../components/CustomModal';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'PublicId',
        dataIndex: 'publicId',
    },
    {
        title: 'Url',
        dataIndex: 'url',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const SlideShows = () => {
    const [open, setOpen] = useState(false);
    const [slideshowId, setslideshowId] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetState())
        dispatch(GetSlideShows())
      },[]);
      const hideModal = () => {
        setOpen(false);
      };
    const brandState = useSelector(state => state?.slideshow?.slideshows)
    const data1 = [];
    for (let i = 0; i < brandState?.length; i++) {
        data1.push({
        id: brandState[i].id,
        publicId: brandState[i].publicId,
        url: brandState[i].url,
        status: brandState[i].status?"Hoạt động":"Không hoạt động",
        action: (<>
            <Link className='fs-3 text-danger' to={`/admin/add-brand/${brandState[i].id}`}><BiEdit /></Link>
            <button className='fs-3 text-danger ms-3 text-danger bg-transparent border-0' 
            onClick={()=>showModal(brandState[i].id)}><AiFillDelete /></button>
          </>)
        });
    }
    const showModal = (e) => {
        setOpen(true);
        setslideshowId(e)
      };
    const deleteSlideShow = (e) =>{
        dispatch(DeleteSlideShow(e))
        setOpen(false);
        setTimeout(()=>{
          dispatch(GetSlideShows())
        },300)
      }
    return (

        <div>
            <h3>SlideShows</h3>
            <div>
                <div><Table columns={columns} dataSource={data1} scroll={{ y: 500 }}/></div>
            </div>
            <CustomModal 
                title="Are you sure you want to delete this slideshow?" 
                hideModal={hideModal}
                open={open}
                performAction={()=>{deleteSlideShow(slideshowId)}}
            />
        </div>
    );
};

export default SlideShows;