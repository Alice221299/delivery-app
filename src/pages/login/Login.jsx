import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/Logo.png'
import './login.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithEmailAndPassword } from '../../redux/authActions';
import google from '../../assets/google.svg'
import { useAuth } from '../../context/authContext';


const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const signIn = (data) => {
//     dispatch(loginWithEmailAndPassword(data));
// }

//   const onSubmit = async (data) => {
//     // const { email, password } = data;
//     const authResult = await signIn(data);

//     if (authResult) {
//       dispatch(setIsAuthenticated(true));
//       navigate('/home');
//       localStorage.setItem('isAuthenticated', true);
//       Swal.fire({
//         text: 'Welcome!',
//         confirmButtonColor: '#FFE031',
//       });
//     } else {
//       Swal.fire({
//         text: 'Email and password do not match',
//         confirmButtonColor: '#FFE031',
//       });
//     }
//   };
const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const { error } = useSelector((store) => store.auth);

    const signIn = (data) => {
      console.log(data);
      dispatch(loginWithEmailAndPassword(data));
    }
    if (error) {
        Swal.fire("Oops!", "Ha occurrido un error en el inicio de sesión", "error");
    }
    if (error === false) {
        Swal.fire("Excelente", "Haz iniciado sesión correctamente", "success").then(()=>navigate("/home"));
    }

  const loginWithGoogle = () => {
    dispatch(login());
  };

    const goRegister = () => {
      navigate('/register');
    }


  return (
      <div className='login'>
        <div className='login__header'>
          <img src={logo} alt="" />
          <h1>Sign in</h1>
          <p  >Login or create an account with your phone number to start ordering</p>
        </div>

        {/* <form className='login__form' onSubmit={handleSubmit(signIn)}>
            <div>
              <label>Email</label>
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
                className="login__input"
              />
              {errors.email && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.email.message}</span>}
            </div>
            <div >
              <label className='login__label'>Password</label>
              <input
                type="password"
                name="password"
                {...register('password', {
                  required: 'Password is required',
                })}
                className="login__input"
              />
              {errors.password && <span className="error" style={{ color: 'red', fontSize: '10px' }}>{errors.password.message}</span>}
            </div>
            <button className='login__button' type="submit">Login</button>
        </form> */}
        <main>
            <button type="button" onClick={() => navigate(-1)}>Atras</button>
            <h1>Inicia sesión con un correo y una contraseña</h1>
            <form onSubmit={handleSubmit(signIn)}>
                <input type="text" placeholder="Correo electrónico" {...register("email")} />
                <input type="password" placeholder="Contraseña" {...register("password")} />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {/* <p>¿No tienes una cuenta creada con email y contraseña? puedes hacer click <Link to={"/register"}>aquí</Link></p> */}
        </main>
        <button type='button' className='login__button' onClick={loginWithGoogle}>Sign in with Google<img src={google} alt="google icon" /></button>
        <button className='login__button' onClick={goRegister}>Sign Up</button>
      </div>
  );
}

export default Login;
