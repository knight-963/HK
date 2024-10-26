import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '@/pages/About';



export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <About/> */}
      <div className="flex justify-center gap-[60px] pt-[400px]">

        <div class="card"><img src="home-1-svgrepo-com.svg" className="h-[120px]" alt="" /></div>

        <div class="card"><img src="w.png" className="h-[120px]" alt="" /></div>

        <div class="card"><img src="idea.png" className="h-[120px]" alt="" /></div>

        <div class="card"><img src="tree.jpg" className="h-[120px]" alt="" /></div>

        <div class="card"><img src="z.png" className="h-[120px]" alt="" /></div>
            
        </div>

<h1 className="text-5xl text-sky-500 pl-[110px] p-[20px] pt-[200px]">Actualni</h1>
        <div className="flex justify-center gap-[50px] pt-[20px] bg-emerald-400 items-center h-[800px]">

        <div class="card1">
          <img src="f1.jpg" className="im" alt="" />
          <a href=""><h1 className="text-4xl text-sky-500 text-center p-[30px]">Suv ifloslanishi</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Muammosi haqida</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[2px] text-xl">va</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Yechilishi</h1></a>
        </div>

        <div class="card1">
          <img src="f22.jpg" className="im h-[230px] w-[100%]" alt="" />
          <a href=""><h1 className="text-4xl text-sky-500 text-center p-[30px]">Suv qimmatligi</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Muammosi haqida</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[2px] text-xl">va</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Yechilishi</h1></a>
        </div>

        <div class="card1">
          <img src="f3.jpg" className="im h-[230px] w-[100%]" alt="" />
          <a href=""><h1 className="text-4xl text-sky-500 text-center p-[30px]">Suv kamayib borishi</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Muammosi haqida</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[2px] text-xl">va</h1></a>
          <a href=""><h1 className="text-center text-emerald-500 p-[10px] text-xl">Yechilishi</h1></a>
        </div>

        </div>




        <div className="le">

          <div className="ke">

            <h1 className='text-5xl'>Kerek boladigan malumotlar</h1>
            <br />
            <br />
            <h1 className='text-3xl'>Dunyoda taxminan 1.260.000.000.000.000.000.000.000 litr ichimli suv qoldi.</h1>
            <br />
            <br />
            <h1 className='text-3xl'>Har yili daryo va okeanlarga 12 million tonnagacha neft oqib tushadi.</h1>

          </div>

        </div>
      <Footer />  

    </div>
  );
}