import React from 'react'
import { Helmet } from 'react-helmet'

const Doimatkhau = () => {
    return (
        <>
              <Helmet>
                <title>Đổi mật khẩu | PHBshop</title>
            </Helmet>
        <div className='bg-light shadow mb-3 bg-white rounded w-100 d-flex justify-content-center p-4'>
            <form id="quickForm" className='w-50'>
                <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Mật khẩu cũ</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Nhập mật khẩu cũ"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Mật khẩu mới</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Nhập mật khẩu mới" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Xác nhận mật khẩu mới</label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập lại mật khẩu mới"/>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Luu</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Doimatkhau
