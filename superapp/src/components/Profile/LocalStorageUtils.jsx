import { useState,useEffect } from "react";

export const LocalStorageUtils=(storageKey)=>{
    const [userData, setUserData]=useState(null);

    useEffect(()=>{
        const storedUserData=localStorage.getItem(storageKey);
        const parsedUserData=storedUserData?JSON.parse(storedUserData):null;
        setUserData(parsedUserData);
    },[storageKey]);
    return userData;
}