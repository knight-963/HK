import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '@/pages/About';
import Comp from '../components/Comp'


export default function Home() {
  return (
    <div>
      <Navbar />

      <Footer />

      {/* <About/> */}
      <Comp />
      <Footer />  

    </div>
  );
}