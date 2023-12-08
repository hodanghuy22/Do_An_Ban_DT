import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
const Thongtindiachi = () => {
    const [showEditForm, setShowEditForm] = useState(false);
    const [gender, setGender] = useState(1);
    const [fullName, setFullName] = useState("Phạm Quảng Bình");
    const [phoneNumber, setPhoneNumber] = useState("0329155867");

    const handleClick = () => {
        setShowEditForm(true);
    };

    const handleGenderChange = (value) => {
        setGender(value);
    };

    const handleFullNameChange = (event) => {
        const value = event.target.value;
        setFullName(value);
    };

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    };

    const handleProfileEdit = () => {
        // Xử lý lưu thông tin
        setShowEditForm(false);
    };

    const handleCancelEdit = () => {
        setShowEditForm(false);
    };
    return (
        <div>
            <h4>Thông tin tải khoản</h4>
            <div className='bg-light shadow p-4 mb-5 bg-white rounded'>
                <p className='h6'>THÔNG TIN CÁ NHÂN</p>
                <p>Anh Phạm Quảng Bình - 0329155867 <Link onClick={handleClick} className='ml-2'><TiEdit className='mb-2' />Sửa</Link></p>

                <div>

                    <div className="edit-form " style={{ display: showEditForm ? 'block' : 'none' }}>
                        <div className="profile-input-group">
                            <div>
                                <span
                                    className={gender === 1 ? 'active mr-2' : 'mr-2'}
                                    data-val="1"
                                    onClick={() => handleGenderChange(1)}
                                >
                                    <input type="radio" name="gender" checked={gender === 1} readOnly /> Anh
                                </span>
                                <span
                                    className={gender === 0 ? 'active' : ''}
                                    data-val="0"
                                    onClick={() => handleGenderChange(0)}
                                >
                                    <input type="radio" name="gender" checked={gender === 0} readOnly /> Chị
                                </span>
                            </div>
                            <div className="profile-input d-flex mt-3">
                                <div className="profile-name mr-5">
                                    <span>Họ &amp; Tên: </span>
                                    <input
                                        className='p-2'
                                        type="text"
                                        name="txtFullName"
                                        value={fullName}
                                        onChange={handleFullNameChange}
                                    />
                                    <p className="texterror txtFullName_error"></p>
                                </div>
                                <div className="profile-phoneNumber">
                                    <span>Số điện thoại: </span>
                                    <input
                                        className='p-2'
                                        type="tel"
                                        name="txtPhoneNumber"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                    />
                                    <p className="texterror txtPhoneNumber_error"></p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3" style={{ justifyContent: 'center' }}>
                            <Button variant='light' style={{ display: 'block' }} className="" onClick={handleCancelEdit}>Hủy</Button>
                            <Button variant='light' style={{ display: 'block' }} className="text-danger" onClick={handleProfileEdit}>Lưu</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-light shadow p-4 mb-5 bg-white rounded'>
                <p className='h6'>ĐỊA CHỈ NHẬN HÀNG</p>
                <p>Đường 106, phường Tăng Nhơn Phú A, Thành Phố Thủ Đức
                    <Link className='ml-2'><TiEdit className='mb-2' />Sửa</Link>
                    <Link className='ml-2'><RiDeleteBin6Line className='mb-2' />Xóa</Link>
                </p>
            </div>
        </div>
    )
}

export default Thongtindiachi
