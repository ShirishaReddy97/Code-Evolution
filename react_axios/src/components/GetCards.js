import axios from "axios";
import React, { useEffect, useState } from "react";
const GetCards = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchCards();
    }, [])
    const fetchCards = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
                setPosts(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1 className="app">Welcome</h1>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            {posts.map((post) => (
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default GetCards