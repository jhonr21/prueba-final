import { Formik } from "formik";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Register = () => {


  const getErrorMessage = (err) => {
    switch (err) {
      case authTypes.emailInUse:
        return 'Correo en uso'
      
    
      default:
        return 'Algo salió mal'
    }
  }

  return (
    <div>
    
        initialValues={{
          name: "",
          file: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          if (valores.password1 === valores.password2) {
            dispatch(
              registerEmailPassword(
                valores.name,
                valores.file,
                valores.email,
                valores.password1,
                valores.departamento
              )
            );
          } else {
            console.log("las contraseñas no son iguales");
          }

          resetForm();
          console.log(valores);
          console.log("formulario enviado");
        }}
      
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="home">
            <div className="itemsform">
              <div className="my-3">
                <Link to="/">
                  <img src={logo} alt="Logo" className="logoUser " />
                </Link>
              </div>
              <Card>
                <Card.Header>
                  <h1 className="text-center">REGISTRO</h1>
                </Card.Header>
                <Card.Body>
                  <Form className="formlogin" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Ingresa tu Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu Nombre"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                      
                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFile">
                      <Form.Label>Carga tu Foto</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Ingresa tu Nombre"
                        name="file"
                        value={values.file}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          fileUpload(file)
                            .then((response) => {
                              values.file = response;
                              console.log(values.file);
                            })
                            .catch((error) => {
                              console.log(error.message);
                            });
                        }}
                        onBlur={handleBlur}
                      />
                      {touched.file && errors.file && (
                        <div className="error">{errors.file}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Ingresa tu email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa un email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}

                      {error && (
                        <div className="error text-danger">{getErrorMessage(error)}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Elegir Departamento</Form.Label>
                      <select
                        class="form-control"
                        id="departamento"
                        name="departamento"
                        value={values.departamento}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option
                          value=""
                         
                        >
                         Seleccione un departamento
                        </option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Antioquia">Antioquia</option>
                        <option value="Arauca">Arauca</option>
                        <option value="Atlántico">Atlántico</option>
                        <option value="Bolívar">Bolívar</option>
                        <option value="Boyacá">Boyacá</option>
                        <option value="Caldas">Caldas</option>
                        <option value="Caquetá">Caquetá</option>
                        <option value="Casanare">Casanare</option>
                        <option value="Cauca">Cauca</option>
                        <option value="Cesar">Cesar</option>
                        <option value="Chocó">Chocó</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cundinamarca">Cundinamarca</option>
                        <option value="Guainía">Guainía</option>
                        <option value="Guaviare">Guaviare</option>
                        <option value="Huila">Huila</option>
                        <option value="La Guajira">La Guajira</option>
                        <option value="Magdalena">Magdalena</option>
                        <option value="Meta">Meta</option>
                        <option value="Nariño">Nariño</option>
                        <option value="Norte de Santander">
                          Norte de Santander
                        </option>
                        <option value="Putumayo">Putumayo</option>
                        <option value="Quindío">Quindío</option>
                        <option value="Risaralda">Risaralda</option>
                        <option value="San Andrés y Providencia">
                          San Andrés y Providencia
                        </option>
                        <option value="Santander">Santander</option>
                        <option value="Sucre">Sucre</option>
                        <option value="Tolima">Tolima</option>
                        <option value="Valle del Cauca">Valle del Cauca</option>
                        <option value="Vaupés">Vaupés</option>
                        <option value="Vichada">Vichada</option>
                      </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password1"
                        value={values.password1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password2"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                    <hr />
                    <div className="d-grid gap-2 mt-3">
                      <Button variant="primary" type="submit">
                        Registrarse
                      </Button>
                    </div>
                    <hr />
                    <span>
                      ¿Ya tienes una cuenta?{" "}
                      <Link to="/login"> Inicia sesión</Link>
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      
      <Footer />
    </div>
  );
};

export default Register;