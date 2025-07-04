import React from 'react';
import {useAppSelector} from "../../redux/hooks/UseAppSelector.ts";
import {Navigate} from "react-router-dom";

const ProtectedRouteComponent = ({children}) => {

    const {name} = useAppSelector(state => state.userSlice);

    if (!name){
        return <Navigate to={'/auth'} replace/>
    }
    return children


};


export default ProtectedRouteComponent;