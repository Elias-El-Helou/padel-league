import Link from "next/link"

export const metadata = {
    title: "Posts Page!"
};

export default async function Postpone(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await response.json();
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Posts Response todo title: {todo.title}</h1>
            <Link href="/">
                <button>Go to root</button>
            </Link>
        </div>
    )
}
                                                                                                                     