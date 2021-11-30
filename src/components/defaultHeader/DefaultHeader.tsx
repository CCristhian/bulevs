import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import { useGoogleLogin } from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

function DefaultHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  const { signIn } = useGoogleLogin({
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    clientId:'496009783075-l1h0dpio5jhp4the9kujqg7jgumgsqhc.apps.googleusercontent.com',
    isSignedIn: true,
    accessType: 'offline'
  });

  return (
    <div className="p-1">
      <Navbar color="blue">
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarBrand>Bulé: tu voto cuenta</NavbarBrand>
            <NavbarToggler
              color="white"
              onClick={() => setOpenMenu(!openMenu)}
              ripple="light"
            />
          </NavbarWrapper>

          <NavbarCollapse open={openMenu}>
            <Nav>
            <NavLink href="/" onClick={ signIn} ripple="light">
                <Icon name="account_circle" size="xl" />
                Ingresá
              </NavLink>
             <NavLink href="/" ripple="light">
                <Icon name="home" size="xl" />
                Home
              </NavLink>
              <NavLink href="/eleccion" ripple="light">
                <Icon name="dashboard" size="xl" />
                Elección
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  );
}

export default DefaultHeader;