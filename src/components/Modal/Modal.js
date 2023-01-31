import React, { useState, useRef , useEffect } from "react";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import dots from "../../assets/dots.png";
import Axios from 'axios';

function ModalField({ name , api }) {
  const [ brands ,setBrands ] = useState([])

  const [value , setValue ] = useState("")

  const myRef = useRef([]);

  const [show, setShow] = useState(false);

  const [ isActive , setIsActive ] = useState()

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const CancelValue = ()=>{
    setShow(false);
    setValue("")
    setIsActive(null)
  }


  useEffect(()=>{
    Axios.get(`${api}`)
    .then((res)=>{
      setBrands(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  } , [api])
 
  const clickBrands = (i)=>{
    const name_ = myRef.current[i-1].innerText;
    setIsActive(i-1)
    setValue(name_);
  }

  return (
    <div className="modal_">
      <div className="field_">
        <p className="name_">{name}</p>
        <div className="image_">
          <p>{value}</p>
          <div onClick={handleShow}>
            <img src={dots} alt="" />
          </div>
        </div>
      </div>

      <Modal show={show} centered>
        <Modal.Header className="title">
          <Modal.Title>يرجى أختيار الماركة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form">
              { brands && brands.map((model , index) => (
                <div className={`${isActive === index && "active"}`} key={model.id}  onClick={()=> clickBrands(model.id)}>
                  <p ref={(element) => myRef.current.push(element)}>{model.name}</p>
                  <hr/>
                </div>
              ))}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="footer">
          <Button variant="success" onClick={handleClose}>
            موافق
          </Button>
          <Button variant="secondary" onClick={CancelValue}>
            إلغاء الأمر
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalField;
