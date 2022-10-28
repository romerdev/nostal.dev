import Wrapper from "./Wrapper";

export default function PageHero({title, children}) {
  return (
    <div className="pb-12 border-b-2 border-black">
      <Wrapper>
        <div className="md:flex">
          <div>
            <h1 className='font-bold text-7xl md:text-9xl tracking-tighter mt-12 md:mt-24 mb-8 md:mb-16'>{title}</h1>
            {children}
          </div>
          <div className="mt-8 md:mt-auto md:ml-auto">
            <button className="border-2 border-black h-28 w-28 md:h-40 md:w-40 rounded-full rotate-90 transition-transform hover:scale-105 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="16" viewBox="0 0 61 16" fill="none">
                <path d="M60.7071 8.70712C61.0976 8.31659 61.0976 7.68343 60.7071 7.2929L54.3432 0.928942C53.9526 0.538417 53.3195 0.538417 52.9289 0.928941C52.5384 1.31947 52.5384 1.95263 52.9289 2.34316L58.5858 8.00001L52.9289 13.6569C52.5384 14.0474 52.5384 14.6806 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70712ZM-1.74846e-07 9L60 9.00001L60 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};