import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
 
    useEffect(() => {
        AOS.init();
      }, []);
  return (
   <footer>
   <div data-aos="fade-up">
    <h1>Family Wellness Massage Therapy</h1>
    <p>888 Griffiths Way, Mainland ML 12345</p>
    <p>Tel: 987.654.3210</p>
    <p>Email: info@yoursite.com</p>
</div>
    <div className='copyright'>
     <p>Copyright 2019 Website.com. All Rights Reserved.</p>
    </div>
    <h3><a href="website.tar">Website</a> Created & Hosted by Website.com <a href="website.tar">Website Builder</a></h3>
   </footer>
  )
}

export default Footer;
