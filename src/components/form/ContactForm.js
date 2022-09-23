// hooks
import { useEffect, useState } from "react";

// router
import { Link } from 'react-router-dom';

// sdk
import emailjs from '@emailjs/browser';

const ContactForm = ({ portfolio, device, lang, sectionName}) => { 
  lang === 'en' && (document.title = 'Dietmar Eisner Portfolio | Contact');
  lang === 'de' && (document.title = 'Dietmar Eisner Portfolio | Kontakt');
  lang === 'ru' && (document.title = 'Dietmar Eisner Portfolio | контакт');

  const {
    contact: {
      callToAction,
      formInputData
    }
  } = portfolio;

  const [password, setPassword] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnMsg, setBtnMsg] = useState(formInputData[lang].submit.initial);
  const [formData, setFormData] = useState({
    privacyAccepted: false,
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
    msg() {
      return `
      Mein Name: ${this.name}
      Unternehmen: ${this.company ? this.company : 'Nicht angegeben!'}
      
      Meine E-Mail: ${this.email}
      Betreff: ${this.subject}
      
      Nachricht: 
      
      ${this.message}
      `
    }
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    const _fake = document.forms["contact_form"]['password'].value;

    if( _fake.length > 0 || _fake ) {
      console.error('BOT');
      return false;
    } else if (!formData.privacyAccepted){
      return false;
    } else {
      try {
        setBtnDisabled(true);
        setBtnMsg(formInputData[lang].submit.send);

        
        emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
        emailjs.send("service_abgvp2h","template_w102hmt",{
          from_name: formData.name,
          message: formData.msg()
        }).then(function(response){
          setBtnDisabled(false);
          setBtnMsg(formInputData[lang].submit.initial);
          setFormData(prev => ({
            ...prev,
            name: '',
            company: '',
            email: '',
            subject: '',
            message: ''
          }))
        }, function(error) {
          console.error('Sending mail failed ...',error);
        });
        
        setTimeout(() => {
        }, 3000)
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    setBtnMsg(
      formInputData[lang].submit.initial
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);



  return (
    <>
      <h2 id={`${sectionName}-heading-${lang}`}>{callToAction[lang]}</h2>
      <form 
        name='contact_form'
        id={`${sectionName}-form`}

        onSubmit={ e => handleSubmit(e) }
      >
        <div>
          <label htmlFor="name">{formInputData[lang].name}</label>
          <input 
            type="text"
            id='name'
            name='name'
            required
            placeholder={`${formInputData[lang].pHolder.name}`}
            value={formData.name}
            onChange={ e => setFormData( prevObj => ({ 
              ...prevObj,
              name: e.target.value
            }))}
          />
        </div>

        <div>
          <label htmlFor="company">{formInputData[lang].company}</label>
          <input 
            type="text"
            id='company'
            name='company'
            placeholder={`${formInputData[lang].pHolder.company}`}
            value={formData.company}
            onChange={ e => setFormData( prevObj => ({ 
              ...prevObj,
              company: e.target.value
            }))}
          />
        </div>
  
        <div>
          <label htmlFor="email">{formInputData[lang].email}</label>
          <input 
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={ e => setFormData( prevObj => ({ 
              ...prevObj,
              email: e.target.value
            }))}
            required={true}
            placeholder={formInputData[lang].pHolder.email}
          />
        </div>
  
        <label htmlFor="password" className="form-password">password:</label>
        <input
          type='text'
          id='password'
          name='password'
          value={password}
          onChange= { e => setPassword(e.target.value) }
          className='form-password'
          tabIndex="-1"
          autoComplete="off"
        />
  
        <div>
          <label htmlFor="message">{formInputData[lang].message}</label>
          <textarea 
            name="message" 
            id="message" 
            required
            value={formData.message}
            placeholder={formInputData[lang].pHolder.message}
            onChange={ e => setFormData( prevObj => ({ 
              ...prevObj,
              message: e.target.value
            }))}
          ></textarea>
        </div>
        <div id="chkbox-container">
          <input
            type="checkbox" 
            name="chkbox"
            required
            id="chkbox"
            value={formData.privacyAccepted}
            onChange= { e => setFormData( prevObj => ({
              ...prevObj,
              privacyAccepted: e.target.checked,
            }))}
          />
          <label htmlFor="chkbox" className={lang}>
            { formInputData[lang].inputLabelTxt1 }
              <Link to='/privacy' id="chkbox-link"> 
                {formInputData[lang].inputLabelLink}
              </Link>
            { formInputData[lang].inputLabelTxt2}
          </label>
        </div>
  
        <div>
          <button 
            type="submit"
            disabled={btnDisabled}
            style={{
              backgroundColor: btnDisabled ? '#eef0fc' : '#5569dc',
              color: btnDisabled ? '#5569dc' : 'white'
            }}
          >{btnMsg}</button>
        </div>
      </form>
    </>
  );
}
 
export default ContactForm;