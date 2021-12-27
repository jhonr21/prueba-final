import React, { useEffect, useState } from 'react'
import { Button, Card, Table, Modal, Nav, NavItem, NavLink } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/main.css'
import {carritoP, carritoUdapte, listProductAsync} from '../actions/actionProduct'
import Navbar from './Nabvar.jsx'




export default function Home() {
    let total = 0;
    let subtotal = 0;
    let item = 0
    let subtotal1 =0
    let costoenvio= 7.00

  
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    const { product } = useSelector((store) => store.product);
    const { carrito } = useSelector((store) => store.carrito);


    console.log(carrito);

    carrito?.forEach(dat => {
        subtotal = dat.price * dat.items;
        subtotal1 +=subtotal
        total += subtotal;
        item += dat.items

    });

    const dispatch = useDispatch()
useEffect(() => {
    dispatch (listProductAsync())
}, [])

const Handlelogin = () => {
    
}

const handlechange = (e) => {
    const activo = e.target.checked;

    if (activo) {
        let id = e.target.id
        const prodAdd = product.ingredients.find(p => p.product === id)
        
       dispatch(carritoP(prodAdd))
       

    
    } else {
        let id = e.target.id
        const desseleccionar = carrito.filter(select => select.product !== id)
        dispatch(carritoUdapte(desseleccionar))


    }
}
    return (
        <div>
            <div className="container">
            <Nav>
          <NavItem>
            <NavLink href="/login" onClick={Handlelogin}>Iniciar Sesion</NavLink>
          </NavItem>

        </Nav>
        <hr />
                <div className="w-50 m-auto pt-5">
                    <Card>
                        <Card.Header as="h6">Ingredientes <br />
                            <b className='h4'>{product.name}</b>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <h5 className='textoSelect'><b className='select'>Seleccionar todo</b><span className='h4 m-1'>|</span><b className='select'>Deseleccionar todo</b></h5>
                            </div>
                            <div>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                     
                                            <td className='w-100 justify-content-between'>
                                            {product.ingredients ? (product.ingredients.map((p, i) => (
                                                <tr >
                                                    <td className='w-25'>
                                                        <div className='d-flex justify-content-around'>

                                                            <input
                                                                type="checkbox"
                                                                className='m-4 form-check-input'
                                                                name='productCheck'
                                                                id={p.product}
                                                                onChange={handlechange}
                                                            />
                                                            <div className='col-2 w-50'>
                                                                <input type="number" className='form-control mt-3 text-center' max="1"  />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='w-100 d-flex justify-content-between'>
                                                        <div className='detalles'>
                                                            <h6><b>{p.product}</b></h6>
                                                            <div className='lineado'>
                                                                <small className='marca'>{p.brand}</small><br />
                                                                <small>{p.quantity}</small>
                                                            </div>
                                                        </div>
                                                        <div className='price'><h5>{`${product.currency} ${p.price}`}</h5></div>
                                                    </td>
                                                </tr>
                                            )))
                                                : (<div>Cargando...</div>)
                                            }
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="mt-5 container" > 
                                    <div >
                                        <div>
                                            <p>Cantidad: {item}</p>
                                        </div>
                                        <div className='py-1 d-flex justify-content-between'>
                                            <p>Subtotal :</p>
                                            <h5>{subtotal1}</h5>
                                        </div>

                                        <div className='py-1 d-flex justify-content-between'>
                                            <p>Costos de envio:</p>
                                            {carrito.length > 0 ? <h5>$7.00</h5> : <h5>$0</h5>}
                                        </div>
                                        <div className='py-1 d-flex justify-content-between'>
                                            <h4>Total:</h4>
                                            {carrito.length > 0 ? <h5>$ {total + 7.00}</h5> : <h5>$0</h5>}
                                        </div>

                                        <div className="d-grid gap-2 col-7 mx-auto">
                                            {carrito.length > 0 ?
                                                <button className="btn btn-success" type="button" onClick={handleShow}>Comprar :$ {total + 7.00}</button > :
                                                <button className="btn btn-success" type="button">Comprar :$ {0}</button>
                                            }
                                        </div>

      

                                     </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Gracias por su Compra!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
            </div>
            </div>
          

  
    
 

  
    
  


    )
}
