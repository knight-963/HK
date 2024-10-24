

export default function Navbar() {
    return (
      <div>
        <nav className="flex bg-black justify-around h-[150px] items-center border-2 border-teal-300 shadow-lg shadow-teal-500/100">
            <div className="text-teal-300 flex text-3xl">
                <h1>Logo</h1>
            </div>
            <ul className="text-teal-300 flex gap-[30px] text-2xl">
                <li><a href="">Home</a></li>
                <li><a href="">Skils</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
      </div>
    );
  }
  