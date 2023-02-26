import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
function App() {
  const servKey = import.meta.env.VITE_SERVCE_KEY
  const tempKey = import.meta.env.VITE_TEMPLATE_KEY
  const myPublicKey = import.meta.env.VITE_MY_PUBLIC_KEY
  const form = useRef()
  const btn = useRef()
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const sendData = (e) => {
    e.preventDefault()
    btn.current.innerText = "Göndərilir....";
    emailjs.sendForm(servKey, tempKey, form.current, myPublicKey)
      .then(() => {
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")
        btn.current.innerText = "Göndər"
        alert("Uğurla göndərilidi!☺")
      }).catch((err) => {
        console.log(err);
        alert("Göndərilmədi, ayrılan quota bitib!😓")
      })

  }
  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-12">
          <div className="App">
            <h2 className='pb-4'>Tapşırıq göndərmə forumu</h2>
            <form onSubmit={sendData} ref={form}>
              <div className="form-group">
                <label htmlFor="sender_name">Ad və Soyad (*)</label>
                <input
                  type="text"
                  className="form-control"
                  name='sender_name'
                  id="sender_name"
                  placeholder="Ad və soyad daxil edin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Tapşırığın adı və ya nömrəsi (*)</label>
                <input
                  type="text"
                  className="form-control"
                  name='subject'
                  id="subject"
                  placeholder="Tapşırığın adını və ya nörməsını daxil edin"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sender_email">Repozitory linki (*)</label>
                <input
                  type="text"
                  className="form-control"
                  name='sender_email'
                  id="sender_email"
                  placeholder="Repozitory linki daxil edin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Əlavə Şərh(</label>
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
                Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
