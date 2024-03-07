import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Details() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='Details'  data-aos="fade-up" >
    <p className='Detailspara1'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
    <p className='Detailspara2'>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
    <p className='Detailspara3'>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.
    </p>
    
      
    </div>
  )
}

export default Details

