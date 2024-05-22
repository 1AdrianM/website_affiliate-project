
import './page.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/postArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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