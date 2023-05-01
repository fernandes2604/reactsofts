import SidebarMenu from 'react-bootstrap-sidebar-menu';
export default function SideBar(){
    return(
        <div>
            <SidebarMenu>
  <SidebarMenu.Header>
    <SidebarMenu.Brand>
     fghfghf
    </SidebarMenu.Brand>
    <SidebarMenu.Toggle />
  </SidebarMenu.Header>
  <SidebarMenu.Body>
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          {/* Menu item icon */}fhfhfg
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {/* Menu item title */}gfhfg
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    <SidebarMenu.Nav/>
    <SidebarMenu.Sub>
      <SidebarMenu.Sub.Toggle>
        <SidebarMenu.Nav.Icon />
        <SidebarMenu.Nav.Title>
          {/* Submenu title */}fghfg
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Sub.Toggle>
      <SidebarMenu.Sub.Collapse>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              {/* Submenu item icon */}fhfhfg
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              {/* Submenu item title */}fgh
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Sub.Collapse>
    </SidebarMenu.Sub>
    </SidebarMenu.Nav>
  </SidebarMenu.Body>
</SidebarMenu>
        </div>
    )
}
