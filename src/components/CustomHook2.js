import { useEffect, useState } from "react";
import { UseFetch } from "./UseFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function CustomHook2() {
    const { data: userData } = UseFetch(baseUrl, "users")

    return (
        <div>
            <h1>useFetch</h1>
        <pre>{userData && JSON.stringify(userData[0], null, 2) }</pre>
        </div>
    );
}

export default CustomHook2;