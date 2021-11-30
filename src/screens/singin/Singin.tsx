import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";
import { DefaultHeader } from "../../components";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function Singin() {
  return (
    <>
      <DefaultHeader />
      <div className="flex justify-center p-2">
        <Card className="max-w-sm mt-6">
          <CardHeader color="blue" size="lg">
            <H5 color="white">Ingresá</H5>
          </CardHeader>

          <CardBody>
            <div className="mb-8 px-4">
              <InputIcon
                type="email"
                color="blue"
                placeholder="Email"
                iconName="email"
              />
            </div>
            <div className="mb-4 px-4">
              <InputIcon
                type="password"
                color="blue"
                placeholder="Contraseña"
                iconName="lock"
              />
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center">
              <Button color="blue" buttonType="link" size="lg" ripple="dark">
                Buleá tu voto!
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <GoogleLogin
    clientId="496009783075-l1h0dpio5jhp4the9kujqg7jgumgsqhc.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
      <GoogleLogin
    clientId="496009783075-l1h0dpio5jhp4the9kujqg7jgumgsqhc.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

    </>
  );
}

export default Singin;