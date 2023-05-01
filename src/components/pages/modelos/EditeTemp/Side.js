import React, { useState } from "react";
import {ProSidebar,Menu,MenuItem,SidebarHeader, SidebarContent,SidebarFooter} from "react-pro-sidebar";
import { FaRegHeart } from "react-icons/fa";
import {BsFillImageFill} from 'react-icons/bs'
import {
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { MdPointOfSale } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import  "./Side.css";
import { Link } from "react-router-dom";
export default function Header() {
 

  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
      <div id="header" >
        <ProSidebar className="pro-sidebar" collapsed={menuCollapse}>
          <SidebarHeader className="sidebar-header">
            <div className="logotext">
              <p>{menuCollapse ? "Edição" : "Painel de edição"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<BsFillImageFill />}>imagens</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Produtos</MenuItem>
              <MenuItem id="alteravel" icon={<MdPointOfSale />}>preços</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="sidebar-footer">
            <input className="btn btn-outline-light  btn-sm" type='submit' value='Concluido'/><Link to='concluido'>ver</Link>
          </SidebarFooter>
        </ProSidebar>
      </div>
  );}

