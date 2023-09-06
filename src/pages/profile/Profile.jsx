import React, { useState } from 'react'
import './profile.scss'
import FooterSearch from '../../components/footerSearch/FooterSearch'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authActions';
import { useDispatch } from 'react-redux';


const Profile = () => {
    
    const dispatch = useDispatch();

    const [editProfil, setEditProfil] = useState(true);

    const handleEdit = () => 
    {
        setEditProfil(!editProfil);
        console.log('Has dado Click a editar.')
    }
    const navigate = useNavigate();
    const handleNavigate = (ruta) => 
    {
        navigate(`${ruta}`);
    }

    return (

        <main className='user'>
            <button className='user__logout' onClick={() => dispatch(logout())}>LogOut</button>

            <section className='user__info'>

                <figure className='figureUser'>
                    <img className='imgUser' src="https://content.wepik.com/statics/20906796/preview-page0.jpg" alt="profil" />
                </figure>
                <span className='nameUser'><b>Donnie Darko</b></span>

            </section>

            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99984 7.00016C7.34057 7.00016 6.6961 6.80467 6.14794 6.4384C5.59977 6.07212 5.17253 5.55153 4.92024 4.94244C4.66795 4.33335 4.60194 3.66313 4.73055 3.01653C4.85917 2.36993 5.17664 1.77598 5.64282 1.30981C6.10899 0.843633 6.70293 0.526164 7.34954 0.397547C7.99614 0.268929 8.66636 0.33494 9.27545 0.587232C9.88454 0.839525 10.4051 1.26677 10.7714 1.81493C11.1377 2.36309 11.3332 3.00756 11.3332 3.66683C11.3332 4.55089 10.982 5.39873 10.3569 6.02385C9.73174 6.64897 8.88389 7.00016 7.99984 7.00016ZM7.99984 1.66683C7.60428 1.66683 7.2176 1.78413 6.8887 2.00389C6.5598 2.22365 6.30345 2.53601 6.15208 2.90146C6.0007 3.26692 5.9611 3.66905 6.03827 4.05701C6.11544 4.44497 6.30592 4.80134 6.58562 5.08104C6.86533 5.36075 7.2217 5.55123 7.60966 5.6284C7.99762 5.70557 8.39975 5.66596 8.7652 5.51459C9.13066 5.36321 9.44301 5.10687 9.66278 4.77797C9.88254 4.44907 9.99984 4.06239 9.99984 3.66683C9.99984 3.1364 9.78912 2.62769 9.41405 2.25262C9.03898 1.87754 8.53027 1.66683 7.99984 1.66683Z" fill="#414141" />
                            <path d="M14.0002 15.6665H2.00016C1.82335 15.6665 1.65378 15.5963 1.52876 15.4712C1.40373 15.3462 1.3335 15.1766 1.3335 14.9998V12.9998C1.3335 11.5853 1.8954 10.2288 2.89559 9.2286C3.89579 8.22841 5.25234 7.6665 6.66683 7.6665H9.3335C10.748 7.6665 12.1045 8.22841 13.1047 9.2286C14.1049 10.2288 14.6668 11.5853 14.6668 12.9998V14.9998C14.6668 15.1766 14.5966 15.3462 14.4716 15.4712C14.3465 15.5963 14.177 15.6665 14.0002 15.6665ZM2.66683 14.3332H13.3335V12.9998C13.3335 11.939 12.9121 10.9216 12.1619 10.1714C11.4118 9.42126 10.3944 8.99984 9.3335 8.99984H6.66683C5.60596 8.99984 4.58855 9.42126 3.8384 10.1714C3.08826 10.9216 2.66683 11.939 2.66683 12.9998V14.3332Z" fill="#414141" />
                        </svg>

                        <span><b>Account edit</b></span>
                    </div>


                    <svg onClick={() => handleNavigate('/EditProfile')} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9L7 7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928931C1.95262 0.538407 1.31946 0.538407 0.928933 0.928931C0.538409 1.31946 0.538409 1.95262 0.928933 2.34314L6.58579 8L0.928931 13.6569C0.538407 14.0474 0.538407 14.6805 0.928931 15.0711C1.31946 15.4616 1.95262 15.4616 2.34314 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="#414141" />
                    </svg>

                </div>
            </section>

            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_436_869)">
                                <path d="M8 14.5C7.46957 14.5 6.96086 14.2893 6.58579 13.9142C6.21071 13.5391 6 13.0304 6 12.5C6 12.3674 6.05268 12.2402 6.14645 12.1464C6.24021 12.0527 6.36739 12 6.5 12H9.5C9.63261 12 9.75979 12.0527 9.85355 12.1464C9.94732 12.2402 10 12.3674 10 12.5C10 13.0304 9.78929 13.5391 9.41421 13.9142C9.03914 14.2893 8.53043 14.5 8 14.5ZM7.135 13C7.22291 13.1515 7.34908 13.2773 7.50089 13.3648C7.6527 13.4522 7.82481 13.4982 8 13.4982C8.17519 13.4982 8.3473 13.4522 8.49911 13.3648C8.65092 13.2773 8.77709 13.1515 8.865 13H7.135Z" fill="#414141" />
                                <path d="M9 3.5H7C6.86739 3.5 6.74021 3.44732 6.64645 3.35355C6.55268 3.25979 6.5 3.13261 6.5 3C6.5 2.60218 6.65804 2.22064 6.93934 1.93934C7.22064 1.65804 7.60218 1.5 8 1.5C8.39782 1.5 8.77936 1.65804 9.06066 1.93934C9.34196 2.22064 9.5 2.60218 9.5 3C9.5 3.13261 9.44732 3.25979 9.35355 3.35355C9.25979 3.44732 9.13261 3.5 9 3.5Z" fill="#414141" />
                                <path d="M13.5 13H2.5C2.36739 13 2.24022 12.9473 2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5C1.99956 11.9353 2.13575 11.3789 2.39695 10.8783C2.65815 10.3777 3.0366 9.94767 3.5 9.625V7C3.49997 5.81171 3.96996 4.67164 4.8074 3.82858C5.64483 2.98552 6.78173 2.50792 7.97 2.5H8.025C9.21847 2.5 10.3631 2.97411 11.207 3.81802C12.0509 4.66193 12.525 5.80653 12.525 7V9.625C12.9838 9.95043 13.3574 10.3816 13.6141 10.8821C13.8709 11.3826 14.0033 11.9375 14 12.5C14 12.6326 13.9473 12.7598 13.8536 12.8536C13.7598 12.9473 13.6326 13 13.5 13ZM3.05 12H12.95C12.8792 11.6534 12.7356 11.3257 12.5287 11.0387C12.3219 10.7517 12.0564 10.5118 11.75 10.335C11.6737 10.2909 11.6104 10.2275 11.5665 10.1511C11.5226 10.0747 11.4997 9.9881 11.5 9.9V7C11.5 6.07174 11.1313 5.1815 10.4749 4.52513C9.8185 3.86875 8.92826 3.5 8 3.5C7.07174 3.5 6.1815 3.86875 5.52513 4.52513C4.86875 5.1815 4.5 6.07174 4.5 7V9.9C4.50035 9.9881 4.47741 10.0747 4.43351 10.1511C4.38961 10.2275 4.3263 10.2909 4.25 10.335C3.94355 10.5118 3.67813 10.7517 3.47127 11.0387C3.2644 11.3257 3.12082 11.6534 3.05 12Z" fill="#414141" />
                            </g>
                            <defs>
                                <clipPath id="clip0_436_869">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span><b>Account edit</b></span>
                    </div>


                    <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                        <rect  y="2"  width="19" height="8" rx="4" fill="#414141" />
                        {editProfil ? (<rect x="9" width="12" height="12" rx="6" fill="#FFE031" />):<rect x="0" width="12" height="12" rx="6" fill="#FFE031" />}
                    </svg>

                </div>
            </section>


            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_436_880)">
                                <path d="M12 14.5H4C3.33696 14.5 2.70107 14.2366 2.23223 13.7678C1.76339 13.2989 1.5 12.663 1.5 12V5C1.5 4.86739 1.55268 4.74021 1.64645 4.64645C1.74021 4.55268 1.86739 4.5 2 4.5H12C12.663 4.5 13.2989 4.76339 13.7678 5.23223C14.2366 5.70107 14.5 6.33696 14.5 7V12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5ZM2.5 5.5V12C2.5 12.3978 2.65804 12.7794 2.93934 13.0607C3.22064 13.342 3.60218 13.5 4 13.5H12C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12V7C13.5 6.60218 13.342 6.22064 13.0607 5.93934C12.7794 5.65804 12.3978 5.5 12 5.5H2.5Z" fill="black" />
                                <path d="M13.0001 5.50011C12.8674 5.50011 12.7403 5.44743 12.6465 5.35366C12.5527 5.25989 12.5001 5.13271 12.5001 5.00011V3.62511C12.5096 3.44995 12.4795 3.27489 12.412 3.11299C12.3445 2.9511 12.2413 2.80654 12.1101 2.69011C11.9922 2.60178 11.8557 2.54147 11.711 2.51375C11.5663 2.48603 11.4172 2.49162 11.2751 2.53011L2.89006 4.43511C2.77726 4.46051 2.67676 4.52421 2.60565 4.61537C2.53455 4.70654 2.49723 4.81952 2.50006 4.93511C2.50006 5.06771 2.44738 5.19489 2.35361 5.28866C2.25984 5.38243 2.13266 5.43511 2.00006 5.43511C1.86745 5.43511 1.74027 5.38243 1.6465 5.28866C1.55273 5.19489 1.50006 5.06771 1.50006 4.93511C1.49712 4.5933 1.61102 4.26075 1.82288 3.99251C2.03474 3.72427 2.33187 3.53643 2.66506 3.46011L11.0551 1.55511C11.3436 1.48214 11.645 1.4762 11.9362 1.53774C12.2274 1.59927 12.5007 1.72665 12.7351 1.91011C12.9829 2.12043 13.1803 2.38373 13.3127 2.68057C13.4451 2.97741 13.5091 3.3002 13.5001 3.62511V5.00011C13.5001 5.13271 13.4474 5.25989 13.3536 5.35366C13.2598 5.44743 13.1327 5.50011 13.0001 5.50011Z" fill="black" />
                                <path d="M14 11.5H10.5C9.96957 11.5 9.46086 11.2893 9.08579 10.9142C8.71071 10.5391 8.5 10.0304 8.5 9.5C8.5 8.96957 8.71071 8.46086 9.08579 8.08579C9.46086 7.71071 9.96957 7.5 10.5 7.5H14C14.1326 7.5 14.2598 7.55268 14.3536 7.64645C14.4473 7.74021 14.5 7.86739 14.5 8V11C14.5 11.1326 14.4473 11.2598 14.3536 11.3536C14.2598 11.4473 14.1326 11.5 14 11.5ZM10.5 8.5C10.2348 8.5 9.98043 8.60536 9.79289 8.79289C9.60536 8.98043 9.5 9.23478 9.5 9.5C9.5 9.76522 9.60536 10.0196 9.79289 10.2071C9.98043 10.3946 10.2348 10.5 10.5 10.5H13.5V8.5H10.5Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_436_880">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span><b>Payment</b></span>
                    </div>


                    <svg onClick={() => handleNavigate('/payment')} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9L7 7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928931C1.95262 0.538407 1.31946 0.538407 0.928933 0.928931C0.538409 1.31946 0.538409 1.95262 0.928933 2.34314L6.58579 8L0.928931 13.6569C0.538407 14.0474 0.538407 14.6805 0.928931 15.0711C1.31946 15.4616 1.95262 15.4616 2.34314 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="#414141" />
                    </svg>

                </div>
            </section>


            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_437_480)">
                                <path d="M8 0C3.58187 0 0 3.58187 0 8C0 12.4181 3.58187 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58187 12.4181 0 8 0ZM14.9822 7.5H12.2922C12.2891 7.26937 12.2771 7.03917 12.2563 6.80937C12.1667 5.84829 11.928 4.90701 11.5487 4.01937C12.1757 3.90098 12.7945 3.74317 13.4016 3.54688C14.3281 4.66732 14.8808 6.04962 14.9822 7.5ZM5.53375 4.04906C6.18454 4.15985 6.84096 4.23455 7.5 4.27281V7.5H4.70844C4.71135 7.30333 4.72177 7.10729 4.73969 6.91187C4.83563 5.81406 5.15438 4.84813 5.53375 4.04906ZM8.5 1.29406C9.08633 1.87265 9.59829 2.52202 10.0241 3.22719C9.70781 3.25781 9.38854 3.27865 9.06625 3.28969C8.87875 3.29656 8.69 3.3 8.5 3.3V1.29406ZM7.5 1.29406V3.27063C7.01583 3.24104 6.53 3.1899 6.0425 3.11719C6.15969 2.92781 6.27656 2.75406 6.38844 2.59687C6.72 2.13092 7.09196 1.69507 7.5 1.29437V1.29406ZM7.5 8.5V11.7275C6.9375 11.76 6.3724 11.8199 5.80469 11.9072C5.22531 10.7628 4.87521 9.6274 4.75437 8.50094L7.5 8.5ZM7.5 12.7291V14.5C7.07506 13.973 6.68366 13.4198 6.32812 12.8438C6.71979 12.7915 7.11042 12.7532 7.5 12.7291ZM8.5 12.6978C8.68917 12.6978 8.87792 12.7013 9.06625 12.7081C9.28906 12.7159 9.51031 12.7294 9.73 12.7466C9.35944 13.3577 8.94853 13.9435 8.5 14.5V12.6978ZM9.10219 11.7087C8.90198 11.7017 8.70125 11.698 8.5 11.6978V8.5H11.2456C11.1296 9.58729 10.7989 10.6843 10.2534 11.7909C9.87385 11.7509 9.4901 11.7238 9.10219 11.7094V11.7087ZM8.5 7.5V4.30156C8.70083 4.30156 8.90156 4.29792 9.10219 4.29063C9.58344 4.27333 10.0585 4.23573 10.5275 4.17781C10.9246 5.03667 11.1724 5.95693 11.2603 6.89906C11.2784 7.09906 11.2889 7.29938 11.2916 7.5H8.5ZM12.6187 2.74031C12.1176 2.88229 11.6092 2.99704 11.0956 3.08406C10.887 2.70337 10.6554 2.33571 10.4022 1.98312C10.2003 1.70187 10.0012 1.45187 9.81594 1.23719C10.8537 1.51528 11.813 2.02974 12.6187 2.74031ZM6.18406 1.23781C5.99875 1.45375 5.79969 1.70312 5.59781 1.98375C5.37926 2.28779 5.17669 2.60301 4.99094 2.92812C4.52156 2.82875 4.05135 2.70979 3.58031 2.57125C4.34403 1.94743 5.23152 1.49292 6.18406 1.23781ZM2.75625 3.36281C3.34583 3.55406 3.9351 3.71615 4.52406 3.84906C4.10376 4.78645 3.83984 5.78635 3.74281 6.80906C3.72198 7.03823 3.71 7.26844 3.70688 7.49969H1.01781C1.12491 5.96677 1.73615 4.51235 2.75625 3.36313V3.36281ZM1.01781 8.5H3.75C3.86313 9.69333 4.2074 10.8912 4.78281 12.0938C4.09883 12.2389 3.423 12.4201 2.75813 12.6366C1.73734 11.4876 1.12544 10.0331 1.01781 8.5ZM3.58031 13.4288C4.14281 13.2621 4.70531 13.1245 5.26781 13.0159C5.63533 13.6497 6.04478 14.2583 6.49344 14.8375C5.42538 14.6031 4.42752 14.1205 3.58063 13.4288H3.58031ZM9.50688 14.8375C9.9901 14.2143 10.4274 13.5569 10.8153 12.8703C11.4241 12.9616 12.0265 13.0917 12.6187 13.2597C11.7322 14.0412 10.6612 14.5841 9.50688 14.8375ZM13.4016 12.4531C12.7122 12.2303 12.0078 12.0572 11.2937 11.935C11.8235 10.7871 12.1428 9.64208 12.2516 8.5H14.9822C14.8808 9.95038 14.3281 11.3327 13.4016 12.4531Z" fill="#414141" />
                            </g>
                            <defs>
                                <clipPath id="clip0_437_480">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span><b>Language</b></span>
                    </div>


                    <span onClick={() => handleNavigate('/Language')} className='LanguageEdit'>Eng</span>

                </div>
            </section>


            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.222 6.54515C14.222 3.24773 11.5785 0.592285 8.29604 0.592285C5.01354 0.592285 2.37012 3.24773 2.37012 6.54515C2.37012 9.84257 8.29604 15.9997 8.29604 15.9997C8.29604 15.9997 14.222 9.84257 14.222 6.54515ZM5.53642 6.42842C5.53642 4.91103 6.78551 3.65626 8.29604 3.65626C9.80657 3.65626 11.0557 4.88185 11.0557 6.42842C11.0557 7.94582 9.83562 9.20059 8.29604 9.20059C6.78551 9.20059 5.53642 7.94582 5.53642 6.42842Z" fill="#414141" />
                        </svg>

                        <span><b>Location</b></span>
                    </div>


                    <svg onClick={() => handleNavigate('/Location')} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9L7 7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928931C1.95262 0.538407 1.31946 0.538407 0.928933 0.928931C0.538409 1.31946 0.538409 1.95262 0.928933 2.34314L6.58579 8L0.928931 13.6569C0.538407 14.0474 0.538407 14.6805 0.928931 15.0711C1.31946 15.4616 1.95262 15.4616 2.34314 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="#414141" />
                    </svg>

                </div>
            </section>

            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_437_511)">
                                <path d="M7.99984 0.666504C6.54944 0.666504 5.13162 1.0966 3.92566 1.90239C2.7197 2.70819 1.77977 3.8535 1.22472 5.19349C0.669681 6.53348 0.524457 8.00797 0.807415 9.4305C1.09037 10.853 1.78881 12.1597 2.81439 13.1853C3.83998 14.2109 5.14665 14.9093 6.56918 15.1923C7.99171 15.4752 9.4662 15.33 10.8062 14.775C12.1462 14.2199 13.2915 13.28 14.0973 12.074C14.9031 10.8681 15.3332 9.45023 15.3332 7.99984C15.3309 6.05562 14.5575 4.19169 13.1828 2.81692C11.808 1.44215 9.94406 0.668798 7.99984 0.666504ZM7.99984 13.9998C6.81315 13.9998 5.65311 13.6479 4.66642 12.9887C3.67972 12.3294 2.91069 11.3923 2.45656 10.2959C2.00244 9.19958 1.88362 7.99318 2.11513 6.8293C2.34664 5.66541 2.91808 4.59631 3.7572 3.7572C4.59632 2.91808 5.66541 2.34664 6.8293 2.11513C7.99319 1.88361 9.19958 2.00243 10.2959 2.45656C11.3923 2.91069 12.3294 3.67972 12.9887 4.66642C13.6479 5.65311 13.9998 6.81315 13.9998 7.99984C13.9979 9.59054 13.3651 11.1155 12.2403 12.2403C11.1155 13.3651 9.59054 13.9979 7.99984 13.9998ZM8.66651 10.9998V12.3332H7.33317V10.9998H8.66651ZM10.6665 6.33317C10.6672 6.73299 10.5777 7.12781 10.4045 7.4882C10.2314 7.84858 9.9791 8.16522 9.66651 8.4145C9.16156 8.8058 8.82011 9.37084 8.70851 9.99984H7.35384C7.41279 9.48586 7.57405 8.98888 7.82812 8.53822C8.08219 8.08756 8.42393 7.69233 8.83317 7.37584C8.99741 7.24439 9.12821 7.07596 9.2149 6.88429C9.30158 6.69262 9.34169 6.48317 9.33193 6.27304C9.32218 6.0629 9.26285 5.85806 9.15878 5.67525C9.05472 5.49243 8.90888 5.33684 8.73318 5.22117C8.53735 5.09317 8.31203 5.0174 8.07865 5.00106C7.84527 4.98473 7.61159 5.02837 7.39984 5.12784C7.17397 5.2361 6.98442 5.40765 6.85423 5.62163C6.72404 5.83562 6.65882 6.08281 6.66651 6.33317C6.66651 6.50998 6.59627 6.67955 6.47125 6.80457C6.34622 6.9296 6.17665 6.99984 5.99984 6.99984C5.82303 6.99984 5.65346 6.9296 5.52844 6.80457C5.40341 6.67955 5.33317 6.50998 5.33317 6.33317C5.32326 5.82079 5.46463 5.31687 5.73961 4.88442C6.01459 4.45197 6.41097 4.11019 6.87917 3.90184C7.29421 3.71635 7.74927 3.63837 8.20238 3.67507C8.65549 3.71177 9.09207 3.86198 9.47184 4.11184C9.83881 4.35477 10.1399 4.68474 10.3484 5.07233C10.5569 5.45992 10.6661 5.89308 10.6665 6.33317Z" fill="#414141" />
                            </g>
                            <defs>
                                <clipPath id="clip0_437_511">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span><b>FAQ</b></span>
                    </div>


                    <svg onClick={() => handleNavigate('/FAQ')} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9L7 7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928931C1.95262 0.538407 1.31946 0.538407 0.928933 0.928931C0.538409 1.31946 0.538409 1.95262 0.928933 2.34314L6.58579 8L0.928931 13.6569C0.538407 14.0474 0.538407 14.6805 0.928931 15.0711C1.31946 15.4616 1.95262 15.4616 2.34314 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="#414141" />
                    </svg>

                </div>
            </section>
            <section className='listOptions'>
                <div className='listOptions__action'>

                    <div className='countUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_437_508)">
                                <path d="M11.7881 16.0038C11.4182 16.0035 11.0508 15.9437 10.7001 15.8264C8.25055 15.0057 6.02424 13.6291 4.19541 11.8044C2.37081 9.97598 0.994416 7.74983 0.174075 5.30045C-0.0429815 4.65577 -0.0619505 3.96085 0.119614 3.3053C0.301179 2.64974 0.674952 2.0636 1.19274 1.62245L2.45941 0.537112C2.68712 0.341905 2.95179 0.194534 3.23766 0.10378C3.52352 0.0130265 3.82473 -0.0192527 4.12334 0.00886599C4.42195 0.0369847 4.71184 0.124926 4.97574 0.26745C5.23964 0.409973 5.47214 0.604162 5.65941 0.838445L7.26674 2.84978C7.52357 3.17216 7.67486 3.56583 7.70003 3.97724C7.7252 4.38865 7.62303 4.79783 7.40741 5.14911L6.67407 6.33911C6.59522 6.46677 6.56173 6.61729 6.57903 6.76634C6.59633 6.91539 6.66341 7.05425 6.76941 7.16045L8.83607 9.22711C8.94215 9.33306 9.08084 9.40016 9.22974 9.41758C9.37865 9.435 9.52908 9.40172 9.65674 9.32311L10.8474 8.58978C11.1986 8.37378 11.6078 8.27139 12.0193 8.29656C12.4308 8.32174 12.8245 8.47326 13.1467 8.73044L15.1581 10.3398C15.3923 10.5271 15.5864 10.7596 15.7289 11.0235C15.8713 11.2874 15.9592 11.5773 15.9874 11.8759C16.0155 12.1745 15.9832 12.4756 15.8925 12.7615C15.8018 13.0473 15.6545 13.312 15.4594 13.5398L14.3741 14.8064C14.0552 15.1811 13.6589 15.4821 13.2124 15.6888C12.766 15.8955 12.28 16.003 11.7881 16.0038ZM3.91274 1.33311C3.69799 1.33297 3.49031 1.40984 3.32741 1.54978L2.06008 2.63511C1.74422 2.90416 1.51617 3.26163 1.40531 3.66146C1.29445 4.06129 1.30586 4.48516 1.43808 4.87844C2.19324 7.13165 3.45961 9.17952 5.13807 10.8618C6.82059 12.5401 8.86869 13.8062 11.1221 14.5611C11.5153 14.6934 11.9391 14.7049 12.3389 14.5942C12.7388 14.4834 13.0963 14.2555 13.3654 13.9398L14.4501 12.6731C14.5288 12.5813 14.5882 12.4746 14.6247 12.3593C14.6613 12.244 14.6742 12.1226 14.6629 12.0022C14.6515 11.8818 14.616 11.765 14.5584 11.6586C14.5009 11.5522 14.4226 11.4585 14.3281 11.3831L12.3167 9.77378C12.2094 9.68788 12.0781 9.63729 11.9408 9.62894C11.8036 9.62059 11.6671 9.65487 11.5501 9.72711L10.3601 10.4604C9.97743 10.6981 9.52551 10.7991 9.0781 10.7467C8.63069 10.6944 8.21424 10.492 7.89674 10.1724L5.83007 8.10578C5.51005 7.78787 5.30732 7.37082 5.25501 6.92277C5.20269 6.47473 5.3039 6.02219 5.54207 5.63911L6.27541 4.44911C6.34764 4.33211 6.38193 4.19563 6.37358 4.05838C6.36523 3.92113 6.31464 3.78982 6.22874 3.68245L4.61674 1.67178C4.53255 1.56587 4.42548 1.4804 4.30356 1.42175C4.18164 1.36309 4.04803 1.33279 3.91274 1.33311Z" fill="#414141" />
                            </g>
                            <defs>
                                <clipPath id="clip0_437_508">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span><b>Support</b></span>
                    </div>


                    <svg onClick={() => handleNavigate('/Support')} xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9L7 7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928931C1.95262 0.538407 1.31946 0.538407 0.928933 0.928931C0.538409 1.31946 0.538409 1.95262 0.928933 2.34314L6.58579 8L0.928931 13.6569C0.538407 14.0474 0.538407 14.6805 0.928931 15.0711C1.31946 15.4616 1.95262 15.4616 2.34314 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="#414141" />
                    </svg>

                </div>
            </section>
            


            <FooterSearch statu={4} />

        </main>

    )
}

export default Profile;