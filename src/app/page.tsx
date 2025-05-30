import Link from "next/link";
import { Suspense } from "react";
import HomeClient from "@/components/HomeClient";


export default function Home() {
    return (
        <Suspense fallback={<>Loading...</>}>
            <HomeClient />
        </Suspense>
    );
}