import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [Cookies, setCookie, removeCookie] = useCookies([])
  const navigate = useNavigate()
  // const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    removeCookie("userid")
    removeCookie("role")
    removeCookie("username")
    navigate("/login")
  },[])
  return (
    <>

    </>
  )
}

export default Logout
