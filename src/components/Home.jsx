import React, { useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/main.css'
import {listProductAsync} from '../actions/actionProduct'



export default function Home() {
    const { product } = useSelector((store) => store.product);
    

    const dispatch = useDispatch()
useEffect(() => {
    dispatch (listProductAsync())
}, [])

const handlechange = (e) => {
    const activo = e.target.checked;

    if (activo) {
        let id = e.target.id
        const prodAdd = product.ingredients.find(p => p.product === id)
      

        console.log("activo");
    } else {
        console.log("No esta activo");
    }
}
    return (
        <div>
            <div className="container">
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
                                            <td className='w-25'>
                                                <div className='d-flex justify-content-around'>
                                                    <input type="checkbox" className='m-4 form-check-input' />
                                                    <div className='col-2 w-50'>
                                                        <input type="text" className='form-control mt-3 text-center' min="1" value={2} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-100 d-flex justify-content-between'>
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
                                                                <input type="text" className='form-control mt-3 text-center' min="1" value={2} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='w-100 d-flex justify-content-between'>
                                                        <div>
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
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
