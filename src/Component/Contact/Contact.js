// import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Form, Input, Button } from 'antd';

import { ThemeContext } from "../../Context/Context";

const { TextArea } = Input;
export const Contact = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const form = useRef();
  const [done , setDone] = useState(false)

  let initalForm ={
    user_name: "",
    user_email: "",
    message: ""
  }
  const [input, setInput] = useState(initalForm)
  const handleChange = (event)=>{
    let {name, value} = event.target
    setInput({...input, [name]: value})
 }


  const sendEmail = (e) => {
    e.preventDefault();

    setDone(true)
    emailjs.sendForm('service_vxofwqj', 'template_a8pnmxf', form.current, '9HfeTVJxbcrkADhWz')
      .then((result) => {
          console.log(result.text);
          setDone(false)
          Modal.success({
            content: 'Thanks for your message. We will reply as soon as possible',
        });
        setInput(initalForm)
      }, (error) => {
          console.log(error.text);
      });
      
  };

  function FormContact() {
    return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          ref={form}
          onFinish={sendEmail}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="user_name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            // label="Password"
            name="user_email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your correct email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        
          <Form.Item
            // label="Password"
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <TextArea />
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{left: 10, background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <FormContact/> */}
        <form onSubmit={sendEmail} ref={form}>
          <input required autoComplete="off" type="text" name="user_name" value={input.user_name} onChange={handleChange} className="user"  placeholder="Name"/>
          <input required autoComplete="off" type="email" name="user_email" value={input.user_email} onChange={handleChange} className="user" placeholder="Email"/>
          <textarea required autoComplete="off" name="message" className="user" value={input.message} onChange={handleChange} placeholder="Message"/>
          {/* <input type="submit" value="Send" className="button"/> */}
          <Button loading={done} htmlType="submit" className="button" style={{height: 40, paddingTop:6, borderColor:'var(--orange)'}}>Send</Button>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          {console.log(input)}
        </form>
            {/* <Modal
            open={done}
            title="Title"
            footer={[
            <Button key="back" onClick={()=>{setDone(false)}}>
                Oke
            </Button>,
            ]}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal> */}
      </div>
    </div>
  );
};