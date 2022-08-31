import React, { useEffect, useState } from 'react'
import congrat from '../assets/congrate.gif'

const Modal = ({number, setModal, setConfetti}) => {
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    const getProfile = async() => {
      try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/getUserProfilePhotos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user_id: number.LuckyDrawNumber})
        })
        const data = await res.json();
        if(data.result.photos.length > 0) {
          const photo = data.result.photos[0][0].file_id;
          // console.log(data.result.photos[0][0].file_id);
          const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/getFile`, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({file_id: photo})
          })
          const data1 = await res.json();
          setFilePath(data1.result.file_path);
        } else return;
      } catch (error) {
        
      }
    }
    getProfile();
  },[number])

  return (
    <div className="fixed inset-0 bg-black/50">
      <div className='grid justify-center items-center'>
        <div className='w-[520px] bg-white rounded-md p-6 m-4 mt-12'>
          <div className='grid justify-center'>
            <center>
              <img alt='' src={congrat} className='w-24' />
              <p className='text-2xl font-bold'>Congratulation</p>
              <p className='text-2xl font-bold'>to</p>
              <img alt='' src={`https://api.telegram.org/file/bot${process.env.REACT_APP_BOT_TOKEN}/${filePath}`} className='w-24' />
              <p className='text-red-600 text-3xl font-bold'>{number.LuckyDrawNumber}</p>
              <p className='text-red-600 text-xl font-bold'>{number.Username}</p>
            </center>
            <div onClick={() => setConfetti(false) & setModal(false)} className='w-full bg-black text-white text-center py-4 rounded-xl font-bold cursor-pointer mt-4'>Complete</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal