
import './page.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  
return(
<main>
  <div className="container">
    <div className="row">
      <div className="column">
      <Image src={"/Tiegehanley.jpg"}alt='tiege hanley anti agin cream image' width={130} height={130}/>
        <h3>Unlock your best skin yet: Discover the powe of tiege hanley skincare Product</h3>
        <p>Tiege Hanley
          <Link href='https://amzn.to/3V5AFYi' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <Image src={"/vest.webp"} alt='Barbell Weighted Vest image' width={130} height={130}/>

  <h3>Elevate Your Exercise Routine</h3>
        <p>Try Cap Barbell Adjustable Weighted Vest
          <Link href='https://amzn.to/4bN2VUW' target='_blank'> 

            <FontAwesomeIcon className="icon"icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <Image src={"/Ap.png"} alt='Alpha Mindset book image' width={130} height={130}/>

      <h3>Alpha-Mindset Guide

        </h3>
        <p>Alpha Mindset - A Guide For Men: How to Build Self-Confidence, Dream Big, Overcome Fear, And Build Better Relationship
          <Link href='https://amzn.to/4dRxGdd' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <Image src={"/med.jpg"} alt='Marcus Aurelios Meditations image'width={130} height={130}/>

<h3> Marcus Aurelios - Meditations
          </h3>
        <p>Here You can find the Best Seller Book
          <Link href='https://amzn.to/3V8t9Me' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <Image src={"/set.jpg"} alt='weight rack image'width={130} height={130}/>

<h3>CAP Barbell Dumbbell Set with Rack | Multiple Options in 150lbs and 210lbs </h3>
        <p> Find the Best Dumbbel Set with Rack Click Here
       <Link href='https://amzn.to/4asurWT' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <Image src={"/stop.jpg"} alt='book image' width={130} height={130}/>

<h3> Stop Overthinking: 23 Techniques to Relieve Stress...</h3>
        <p>Click here if you want to see more
          <Link href='https://amzn.to/4dPIf0A' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
    </div>
  </div>
</main>
  
  
  
  
  
  
  );
}
