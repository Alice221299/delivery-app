import { useForm } from "react-hook-form";
import React from 'react';
import { createAnUser } from "../../redux/authActions";
import './createAccount.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import uploadFile from '../../sevice/uploadFile';
import { useDispatch, useSelector } from "react-redux";
import back from '../../assets/back.png'

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {error} = useSelector((store)=>store.auth);

  const userRegister = async(data) => {
      try {
          const imageFile = data.photoURL[0];
          const avatar = await uploadFile(imageFile);
          const newUser = {
              ...data,
              photoURL: avatar
          }
          console.log(newUser);
          dispatch(createAnUser(newUser));
      } catch (error) {
      }  
  }

  if (error) {
      Swal.fire({
        text: 'There was an error in creating the account. Please try again',
        confirmButtonColor: '#FFE031',
      });
  }
  if (error === false) {
       Swal.fire({
               text: 'You have successfully registered!',
               confirmButtonColor: '#FFE031',
             }).then(()=>navigate("/home"));
  }

  return (
    <div className='create'>
      <div className='create__back' ></div>
      <h2 className='create__title'><img onClick={() => navigate(-1)} src={back} alt="back arrow" /> Create account</h2>
      <form className='create__form' onSubmit={handleSubmit(userRegister)}>
        <div>
        <div className='create__box'>
            <label className='create__label'>NAME</label>
            <input
              type="text"
              name="name"
              {...register('name', { required: 'Name is required' })}
              className="create__input"
            />
            {errors.name && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.name.message}</span>}
          </div>
          <div className='create__box'>
            <label className='create__label'>EMAIL</label>
            <input
              type="email"
              name="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email format',
                },
              })}
              className="create__input"
            />
            {errors.email && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.email.message}</span>}
          </div>
          <div className='create__box'>
            <label className='create__label'>ADDRES</label>
            <input
              type="text"
              name="addres"
              {...register('addres', { required: 'Addres is required' })}
              className="create__input"
            />
            {errors.name && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.address.message}</span>}
          </div>
          <div className='create__box'>
            <label className='create__label'>BIRTHDATE</label>
            <input
              type="date"
              name="birthdate"
              {...register('birthdate', { required: 'Birthdate is required' })}
              className="create__none"
            />
            {errors.name && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.birthdate.message}</span>}
          </div>
          <div className='create__box__file'>
            <label className='create__label'>PROFILE PICTURE</label>
            <input
              type="file"
              name="photoURL"
              {...register('photoURL', { required: 'Photo is required' })}
              className="create__file"
            />
            {errors.name && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.photoURL.message}</span>}
          </div>
          <div className='create__box'>
            <label className='create__label'>PASSWORD</label>
            <input
              type="password"
              name="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              className="create__input"
            />
            {errors.password && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.password.message}</span>}
          </div>
        </div>
        <button className='create__button' type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default CreateAccount;
