import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Form} from 'react-bootstrap'
import { useState } from 'react'
import swal from 'sweetalert';


export default function Home() {

  const initialState = {
    nombre:'',
    paterno:'',
    materno:'',
    curp:''
  }
  const [data,setData] = useState(initialState)

    const handleChangeInput=e=>{
      const {name,value}=e.target
      setData({...data,[name]:value})
  }
  
  console.log(data)
  const handleSubmit= async e=>{
    e.preventDefault()
   if(data.nombre=='' || data.paterno=='' || data.materno ==''|| data.curp==''){
    swal({icon:"warning",text: `Completa todos los campos Datos  Nombre: ${data.nombre}, Apellidos: 
    ${data.paterno} ${data.materno}, CURP: ${data.curp}
    `,
    timer:"20000",buttons: false});
   }else{
    swal({icon:"success",text:`Datos  Nombre: ${data.nombre}, Apellidos: 
    ${data.paterno} ${data.materno}, CURP: ${data.curp}
    `,
    timer:"20000",buttons: false});
   }

}
  
  return (

   
     <div className="card">
            <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control name ="nombre" type="text" placeholder="Nombre" 
             onChange={handleChangeInput}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>apellido Paterno</Form.Label>
            <Form.Control name ="paterno" type="text" placeholder="Paterno" 
             onChange={handleChangeInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control name="materno" type="materno" placeholder="Materno" 
             onChange={handleChangeInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Curp</Form.Label>
            <Form.Control name="curp" type="curp" placeholder="Curp" 
             onChange={handleChangeInput}
            />
          </Form.Group>

          <button className="buttonColor" type="submit">
            Submit
          </button>
        </Form>
     </div>


   
  )
}
