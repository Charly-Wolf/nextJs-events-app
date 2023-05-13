import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({ data }) => (
    <div className='home_body'>
        {data.map((ev) => (
            <Link className='card' key={ev.id} href={`/events/${ev.id}`}> 
                <Image alt={ev.title} width={300} 
                        height={200} src={ev.image}/> 
                <div className='content'>
                <h2>{ev.title}</h2> 
                <p>{ev.description}</p> 
                </div>
            </Link>
        ))}
    </div>
)
