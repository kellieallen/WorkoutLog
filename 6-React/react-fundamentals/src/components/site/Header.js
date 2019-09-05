import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar classname="header">
                <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <Nav Item>
                        <NavLink href="https://github.com/yourhandle/yourrepoforthisapp">
                            Github
                        </NavLink>
                    </Nav>
                </Nav>
            </Navbar>
        </header>

    );
};

export default Header;