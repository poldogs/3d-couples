import { useRef, useState, useEffect } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCreditCard, FaArrowRight } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input'
import MuiPhoneNumber from "material-ui-phone-number";



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');

  const handleOnChange = (value) => {
    setPhone(value);
  };

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };
  
  const handleName2Change = (event) => {
    setName2(event.target.value);
  };
  
  const validateNames = () => {
    if (name1.length !== name2.length) {
      setError('Los nombres deben tener la misma longitud');
      return false;
    }
    setError('');
    return true;
  };

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          Realiza el diseño
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Datos de contacto</h2>
          <h2>E-Mail</h2>
          <span>example@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Dirección</h2>
          <span>Ronda, Málaga</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Teléfono</h2>
          <span>+34 630 630 630</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="heartSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <svg width="700px" height="700px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.5}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1.1 }}
              transition={{ duration: 2.5 }}
              d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <input type="text" required placeholder="Primer nombre" name="name1"
          value={name1}
          onChange={handleName1Change}
          onBlur={validateNames}
          />
          <input type="text" required placeholder="Segundo nombre" name="name2"
          value={name2}
          onChange={handleName2Change}
          onBlur={validateNames}
          />
          {error && <div>{error}</div>}
          {/* <div>
            <p>{matchedNames}</p>
            <button onClick={() => setMatchedNames('')}>Retry</button>
          </div> */}
          <input type="email" required placeholder="E-mail de contacto" name="email"/>
          <MuiPhoneNumber
            defaultCountry={"es"}
            regions={'europe'}
            onChange={handleOnChange}
            inputProps={{
              style: {
                padding: '20px',
                backgroundColor: 'transparent',
                border: '1px solid rgb(183, 183, 183)',
                color: 'rgb(32, 32, 32)',
                borderRadius: '5px',
                fontFamily: 'Montserrat',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              },
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                '&:hover': {
                  borderBottom: 'none',
                },
              },
            }}
          />
          <textarea rows={4} placeholder="Observaciones, detalles" name="message"/>
          <button><FaCreditCard /><FaArrowRight /></button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
