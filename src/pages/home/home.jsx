import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateUserFetch } from "../../redux/slices/auth/auth.slice";

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,isError} = useSelector((state) => state.auth)
    
    useEffect(() => {
        if (user) dispatch(validateUserFetch(user.token))
        else navigate("/sign-in")
        
    }, [ user, isError, navigate, dispatch]);
    
    return (
        <div>
            Home
        </div>
    );
}

export default Home;