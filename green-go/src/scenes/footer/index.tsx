import Logo2 from "@/assets/Logo2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className='bg-primary-100 py-16 ' id='contactus'>
      <motion.div
        className='justify-content mx-auto w-5/6 gap-16 md:flex'
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className='mt-16 basis-1/2 md:mt-0'>
          <AnchorLink href={`#${SelectedPage.Home}`}>
            <img alt='logo' src={Logo2} width={140} />
          </AnchorLink>
      
          <p className="my-5">© GoGreen All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Social Media</h4>
          <ul>
            <li className='my-5'>
              <a href='https://www.facebook.com'>Facebook</a>
            </li>
            <li className='my-5'>
              <a href='https://www.instagram.com/'>Instagram</a>
            </li>
            <li className='my-5'>
              <a href='https://twitter.com/'>X</a>
            </li>
          </ul>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>GoGreen@email.com</p>
          <p>(333)425-6825</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
