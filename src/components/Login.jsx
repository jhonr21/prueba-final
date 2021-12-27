import React from 'react'
import { Button, Card, Form } from "react-bootstrap";
import { loginEmailPassword, loginFacebok, loginGoogle } from "../../actions/loginAction";
import { Link } from "react-router-dom";


const Login = () => {
   
   
    return (
        <div className="home">
        <div className="itemsform">
          <div className="my-3">
            <Link to="/">
            <img alt="Logo" className="logoUser " />
            </Link>
          </div>
          <Card>
            <Card.Header><h1 className="text-center">LOGIN</h1></Card.Header>
            <Card.Body>
              <Form className="formlogin" />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresa tu email</Form.Label>
                  <Form.Control type="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />

                  {touched.email && errors.email && <div className="error">{errors.email}</div>}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                  <Form.Label>Ingresa tu contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   {touched.password && errors.password && <div className="error">{errors.password}</div>}
                </Form.Group>
                <hr className="mt-4" />
                
                <div className="d-flex justify-content-center mt-2">
                  <div onClick={() => handleLoginGoogle()} className="poiter">
                    <span
                      className="iconify py-2 "
                      data-icon="flat-color-icons:google"
                      data-width="50">
                    </span>
                  </div>
                  <div onClick={() => handleLoginFacebook()} className="poiter">
                    <span
                      className="iconify py-2 pe"
                      data-icon="logos:facebook"
                      data-width="50">
                    </span>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="d-grid gap-2 mt-3">
                  <Button variant="primary" type="submit">
                    Iniciar Sesión
                  </Button>
                </div>
                <hr className="mt-2" />
                <span>
                  ¿No tienes cuenta?{" "}
                  <Link to="/register">
                    {" "}
                    Registrate Aquí
                  </Link>
                  <hr />
                </span>
              

            </Card.Body>
          </Card>
        </div>
      </div>

    )
}

export default Login
