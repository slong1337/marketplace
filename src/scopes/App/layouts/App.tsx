import { Outlet } from "@remix-run/react";

export function App() {
    return (
        <div>
            <h1 className=" text-4xl ml-4">HandVegetables</h1>
            <Outlet/>
        </div>
    )
}
