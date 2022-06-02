import { React, useState } from 'react';
import QRCode from 'qrcode'
import './App.css'

function App() {
  const [InputText, SetInputText] = useState('')
  const [Code, SetCode] = useState('')
  const GenerateQRCode = () => {
    QRCode.toDataURL(InputText, {
      width: 800,
      margin: 2,
    }, (err, InputText) => {
      if (err) return console.error(err)
      console.log(InputText)
      SetCode(InputText)
    })
  }
  return (
    <div className='maincontainer'>
      <div className='titlecontainer'>
        <h1>QR Code Generator</h1>
      </div>
      <div className='inputcontainer'>
        <input value={InputText} onChange={(e) => SetInputText(e.target.value)} placeholder='e.g. https://google.com' type="text" />
        <button onClick={GenerateQRCode}>GENERATE</button>
      </div>
      {Code && <div className='qrcodecontainer'>
        <img alt='QRcode' src={Code} />
        <a href={Code} download="QRCode.png">DOWNLOAD</a>
      </div>}
    </div>
  );
}

export default App;
