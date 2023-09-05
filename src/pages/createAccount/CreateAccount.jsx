import React from 'react';
// import { useAuth } from '../../context/authContext';
import './createAccount.scss';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import uploadFile from '../../sevice/uploadFile';

const CreateAccount = () => {
  const navigate = useNavigate();
  // const { signUp } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password,address, birthdate, photoURL } = data;

    try {

      if (password.length < 3) {
        throw new Error('Password must be at least 3 characters long');
      }
      if (photoURL) {
        const uploadedPhotoURL = await uploadFile(data.photoURL[0]);
        data.photoURL = uploadedPhotoURL;
      }
      
      // await signUp(name, email, password,address, birthdate, photoURL );
      console.log('User registered successfully');
      console.log(data)

      await Swal.fire({
        text: 'You have successfully registered!',
        confirmButtonColor: '#FFE031',
    
      });

      reset();
      // navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='create'>
      <h2 className='create__title'>Create account</h2>
      <form className='create__form' onSubmit={handleSubmit(onSubmit)}>
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
            <label className='create__label'>ADDRESS</label>
            <input
              type="text"
              name="address"
              {...register('address', { required: 'Address is required' })}
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
            {errors.name && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.address.message}</span>}
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
                  value: 3,
                  message: 'Password must be at least 3 characters long',
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
