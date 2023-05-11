import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({ data }) => (
    <main >
        {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`}> 
                <Image alt={ev.title} width={300} 
                        height={200} src={ev.image}/> 
                <h2>{ev.title}</h2> 
                <p>{ev.description}</p> 
            </Link>
        ))}
    </main>
)
