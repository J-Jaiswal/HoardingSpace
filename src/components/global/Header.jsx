import React, { useEffect, useState } from "react";
import logo from "../../assets/global/Logo.svg";
import search from "../../assets/global/SearchIcon.svg";
import cart from "../../assets/global/CartIcon.svg";
import heart from "../../assets/global/Heart.svg";
import UserIcon from "../../assets/UserIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Header = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between  h-[100px] px-[34px] w-full  shadow-sm">
        <img src={logo} alt="logo" />
        <div className="flex  justify-between items-center w-[430px]  h-auto py-[4px] ">
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/"
          >
            Home
          </Link>
          <Link className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]">
            Service
          </Link>
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-[16px] text-[#000] font-[500] hover:text-[#B88E2F]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        {/* icons */}
        <div className="flex items-center gap-[28px] mr-[24px]">
          <div
            className="p-4 text-[20px] text-[#000] font-semibold cursor-pointer "
            onClick={() => navigate("/loginType")}
          >
            {user ? (
              <div className="flex items-center gap-[12px]">
                {/* <div className="flex flex-col gap-[1px] ">
                  <div className="text-[20px] font-medium text-[#000]">
                    Hello!
                  </div>
                  <div className="text-[16px] font-medium text-[#000]">
                    first name
                  </div>
                </div> */}
                <img
                  className="w-[28px] h-[28px] hover:cursor-pointer"
                  src={UserIcon}
                  alt="contact-icon"
                  onClick={() => navigate("/signup")}
                />
              </div>
            ) : (
              <div
                className="text-[20px] text-[#000] font-semibold cursor-pointer hover:text-[#B88E2F] "
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            )}
          </div>

          <img
            className="w-[28px] h-[28px] cursor-pointer"
            src={search}
            alt="search-icon"
            onClick={() => navigate("/shop/all")}
          />
          <img className="w-[28px] h-[28px] " src={heart} alt="heart-icon" />
          <img
            className="w-[28px] h-[28px] hover:cursor-pointer mr-[16px] "
            src={cart}
            alt="cart-icon"
            onClick={() => navigate(`/carts`)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
