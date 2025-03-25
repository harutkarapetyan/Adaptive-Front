import React from "react";
import "./style.scss";
import {Button} from "../../components/Button";
import {useRouter} from "next/navigation";
const Navbar = () => {
    const router = useRouter();
    const handleClickIn = () => {
        router.push('/signin')
    }
    return (
        <div className="nav_bar">
            <div className="nav_bar_logo">
                <img src="/logo.svg" alt=""/>
            </div>
            <div className="nav_bar_sign">
                <Button type="button" title="Sign In" Style="G-btn"handleClick={handleClickIn}></Button>
            </div>
        </div>
    );
};

export default Navbar;
