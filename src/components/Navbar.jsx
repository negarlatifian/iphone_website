import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt='apple' width={14} height={18} />

        <div>
          {['phones', 'Macbooks', 'Tablets'].map((nav, i) => (
            <div key={i}>{nav}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
