import { footerLinks } from '../constants';
import { logo } from '../assets'
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const Footer = () => (
  <footer className='flex flex-col text-gray-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
      <img src={logo} alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-700'>
          <span className={`${styles.sectionSubText}`}>Xzect 2023</span> <br />
          Xzect provides a diverse array of services that enable both<br/>
          businesses and individuals to bring their vision to life . Our<br/>
          specialties include software development, website design and <br/>
          SEO, cloud services, robotics and automation, 3D printing and <br/>
          prototyping, data science and analytics, AI and machine<br/>
           learning, IOT, AR and VR, blockchain, and other tech-related<br/>
            services. Our team of experienced professionals is available to<br/>
             assist with the design and development of new products, <br/>
             exploration of robotics and automation possibilities, or any other<br/>
              requirements.
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="sectionSubText">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  </footer>
);

export default Footer;