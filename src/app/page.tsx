
import './page.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { posts } from '@/postArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home(){

return(
<main>
  <div className="container">
    <div className="row">
    {posts.map(post =>(
    <div key={post.id} className="column">
   
     <Image src={post.img} width={130} height={130} alt={post.id.toString()} />
      <h3 key={post.id}>{post.title}</h3>
      <p>{post.descr_link}
        <Link href={post.href}target='_blank'>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </Link>
      </p>
</div>
))}
    

    </div>
  </div>
</main>  
  );
}
    {/*  <div className="column">
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
*/}