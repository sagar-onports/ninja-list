import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            // router.go(-1) //to go back +1 to go forward
            router.push('/')
        }, 2000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooooops....</h1>
            <h2>That Page can not be found.</h2>
            <p>
                Go back to the <Link href="/"><a>Homepage</a></Link>
            </p>
        </div>
    )
}

export default NotFound
