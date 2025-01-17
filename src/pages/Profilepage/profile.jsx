import { useMe } from "../../hooks/useMe";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/navigasi";

const Profilepage = () => {
    const {getProfile, profile} = useMe();
    useEffect(() => {
        getProfile();
    }, [])
    return (
    <>
    <Navbar/>
        <div className="profilepage-container"> 
            <h1>Profile</h1>
            <p>{profile.username}</p>
            <p>{profile.email}</p>
            <p>{profile.created_at}</p>
        </div>
    </>
    )
}
export default Profilepage