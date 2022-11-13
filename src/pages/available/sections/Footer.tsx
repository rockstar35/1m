import React from 'react'
import emailjs from '@emailjs/browser'
interface contact{
  name:string,
  email:string,
  phone:string
}
const Footer = () => {
  const [contact, setContact] = React.useState<contact>({
    name:'',
    email:'',
    phone:''
  })
  React.useEffect(()=>{
    console.log(contact)
  },[contact])
  const changeInput = (propertyName:string) => (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setContact({
      ...contact,
      [propertyName]: e.target.value,
    });
  }
  const sendEmail =(e: any)=>{
    e.preventDefault()
    emailjs.send(
      'service_8l4w49h',
      'template_l5npvji',
      {
        client_name:contact.name,
        client_email:contact.email,
        client_phone:contact.phone,
      },
      'wYJdgmS73AC6Ooakp'
    )
    .then((result) => {
      setContact({
        email: '', 
        name:'',
        phone:''
      })
      // setAlertContent({
      //   heading: "Thank you for contacting me.", 
      //   message: "I will respond to your message as soon as I can."
      // })
      // setShowAlert(true)
      console.log("success")
    }, (error) => {
    //   setAlertContent({
    //     heading: "Something went wrong.", 
    //     message: error.text
    //   })
    //   setShowAlert(true)
    console.log("error")
    });
  }
  return (
    <div className="footer bg-black pb-5">
      <div className="pt-12 px-16 flex justify-between mb-5">
        <div className='pt-12 flex flex-wrap w-full'>
          <div className='mx-auto text-white col-lg-6 col-md-12 col-sm-12'>
            <div className=''>
              <div className='text-xl text-orange-500 '>Please fill in the below to reserve</div>
              <div className='pt-3' >
                <input type="text" placeholder='Name' className='rounded-sm p-1 text-black' value={contact.name} onChange={changeInput('name')} />
              </div>
              <div className='pt-3' >
                <input type="text" placeholder='Eamil' className='rounded-sm p-1 text-black' value={contact.email} onChange={changeInput('email')} />
              </div>
              <div className='pt-3' >
                <input type="text" placeholder='Phone' className='rounded-sm p-1 text-black' value={contact.phone} onChange={changeInput('phone')} />
              </div>
              <div className='pt-3'>We use PayPal for security reasones to accept your <span className='font-bold text-xl'>$300</span> reservation fee</div>
              <div className='col-10 flex justify-end' onClick={(e)=>sendEmail(e)}>
                <div className='text-1xl font-bold w-1/3 text-white rounded-lg shadow-lg shadow-gray-900 bg-orange-500 h-12 mr-3 mb-3 pt-2 items-center text-center'>
                  PAY FEE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
