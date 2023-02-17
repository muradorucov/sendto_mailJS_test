import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
function App() {
  const form = useRef()
  const btn = useRef()
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendData = (e) => {
    e.preventDefault()
    btn.current.innerText = "Sending...."
    console.log({
      name: name,
      subject: subject,
      email: email,
      message: message
    });


    emailjs.sendForm(
      "service_4q6u6oi",
      "template_hlp9kmv",
      form.current,
      "K6b_xwRmllo-6stdW"
    ).then(() => {
      setName("")
      setSubject("")
      setEmail("")
      setMessage("")
      btn.current.innerText = "Submit"
      alert("Success")
    }).catch((err) => {
      console.log(err);
    })

  }
  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-12">
          <div className="App">
            <h2 className='pb-4'>Contact Form</h2>
            <form onSubmit={sendData} ref={form}>
              <div className="form-group">
                <label htmlFor="sender_name">Ad və Soyad</label>
                <input
                  type="text"
                  className="form-control"
                  name='sender_name'
                  id="sender_name"
                  placeholder="Ad və soyad daxil edin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Mövzu</label>
                <input
                  type="text"
                  className="form-control"
                  name='subject'
                  id="subject"
                  placeholder="Mövzu daxil edin"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sender_email">E-poçt ünavı</label>
                <input
                  type="email"
                  className="form-control"
                  name='sender_email'
                  id="sender_email"
                  placeholder="E-poçt daxil edin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mətn</label>
                <textarea
                  className="form-control"
                  id="message"
                  name='message'
                  rows={3}
                  placeholder="Mətni daxil edin"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary col-12"
                ref={btn}
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
