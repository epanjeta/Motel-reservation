import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function Logout(){

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        window.location.reload(true);
        navigate('/');
    });
}

export default Logout;