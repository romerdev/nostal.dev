import Wrapper from "./Wrapper";
import Image from "next/image";

export default function TextImage({ image, alt, children }) {
  return (
    <div className='py-12 border-b-2 border-black'>
      <Wrapper>
        <div className='sm:grid sm:grid-cols-2'>
          <div className='mb-8 sm:mb-0 sm:mr-8 md:mr-36'>
            <Image alt={alt} src={image} />
          </div>
          <div className='my-auto pr-24'>{children}</div>
        </div>
      </Wrapper>
    </div>
  );
}
