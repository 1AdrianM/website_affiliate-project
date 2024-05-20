
import './page.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  
return(
<main>
  <div className="container">
    <div className="row">
      <div className="column">

        <h3>Unlock your best skin yet: Discover the powe of tiege hanley skincare routines</h3>
        <p>Tiege Hanley
          <Link href='https://www.google.com/' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
  <h3>Elevate Your Exercise Routine</h3>
        <p>Try Cap Barbell Adjustable Weighted Vest
          <Link href='https://www.google.com/' target='_blank'> 

            <FontAwesomeIcon className="icon"icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
      <h3>Alpha-Mindset Guide
        </h3>
        <p>Alpha Mindset - A Guide For Men: How to Build Self-Confidence, Dream Big, Overcome Fear, And Build Better Relationship
          <Link href='https://www.google.com/' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>
      <div className="column">
<h3> Marcus Aurelios - Meditations
          </h3>
        <p>Here You can find the Best Seller Book
          <Link href='https://www.google.com/' target='_blank'>
            <FontAwesomeIcon className="icon" icon={faArrowRight}/>
            </Link>
        </p>
      </div>

    </div>
  </div>
</main>
  
  
  
  
  
  
  );
}
