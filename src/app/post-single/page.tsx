import Link from "next/link";

export default function Page() {
    return <div className="text-danger text-center">
        <h1>THIS PAGE IS IN PROGRESS ...</h1>
        <Link href='/'>
            <div>
                <button type="button" className="btn btn-secondary">Go Back</button>
            </div>
        </Link>
    </div>
}