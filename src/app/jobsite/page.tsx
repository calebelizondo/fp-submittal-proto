"use client";

import Navbar from '@/components/navbar/Navbar';
import { Searchbar } from '@/components/Searchbar';
import React, { useState } from 'react';

interface Submittal {
    id: number;
    alias: string;
    desc: string;
    status: "active" | "approved" | "rejected";
}

const PLACEHOLDER_SUB_DATA: Submittal[] = [
    { id: 1, alias: "plumbing", desc: "Placeholder desc", status: "active" },
    { id: 2, alias: "electrical", desc: "Wiring schematics and layout", status: "approved" },
    { id: 3, alias: "foundation", desc: "Soil report and slab plan", status: "rejected" },
    { id: 4, alias: "roofing", desc: "Shingle and waterproofing details", status: "active" },
    { id: 5, alias: "hvac", desc: "Airflow and duct layout", status: "approved" },
    { id: 6, alias: "framing", desc: "Structural framing drawings", status: "active" },
    { id: 7, alias: "drywall", desc: "Drywall material and pattern", status: "rejected" },
    { id: 8, alias: "painting", desc: "Color and finish schedule", status: "active" },
    { id: 9, alias: "tiling", desc: "Bathroom and kitchen tiles", status: "approved" },
    { id: 10, alias: "flooring", desc: "Wood flooring specs", status: "active" },
    { id: 11, alias: "glazing", desc: "Window and glass details", status: "approved" },
    { id: 12, alias: "landscaping", desc: "Planting and irrigation plan", status: "rejected" },
    { id: 13, alias: "security", desc: "Access control system", status: "active" },
    { id: 14, alias: "fire_protection", desc: "Sprinkler and alarm layout", status: "approved" },
    { id: 15, alias: "elevators", desc: "Lift system specifications", status: "active" },
    { id: 16, alias: "signage", desc: "Directional and safety signage", status: "rejected" },
    { id: 17, alias: "ceilings", desc: "Ceiling grid plan", status: "active" },
    { id: 18, alias: "insulation", desc: "Thermal and soundproofing", status: "approved" },
    { id: 19, alias: "sitework", desc: "Grading and drainage layout", status: "active" },
    { id: 20, alias: "utilities", desc: "Gas, water, and power routing", status: "approved" }
];

export default function Jobsite() {

    const [currentSubmittals, setCurrentSubmittals] = useState<Submittal[]>(PLACEHOLDER_SUB_DATA); 


    const handleStatusFilterChange = () => {
        
    };

    return (
        <>
            <Navbar>
                <a href="/dashboard" className="flex flex-row h-full p-3">
                    <img src="/back.svg" alt="Back" />
                </a>
                <div className="h-full flex items-center">
                    <h1 className='text-black m-2'><b>SITE ID/ALIAS</b></h1>
                    <Searchbar />
                </div>
                <div className="flex flex-row h-full p-2">
                    <img src="/print.svg" alt="Print" />
                    <img src="/download.svg" alt="Download"/>
                </div>
            </Navbar>
            <div className="p-4">
                <div className="grid grid-cols-3 font-bold border-b py-2">
                    <div className='flex flex-row justify-between'>
                        <div>ID</div> 
                        {/* <img className="h-[20px] mx-[10px]" src="/filter.svg" alt="filter" /> */}
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>ALIAS</div> 
                        {/* <img className="h-[20px] mx-[10px]" src="/filter.svg" alt="filter" /> */}
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>STATUS</div> 
                        <img className="h-[20px] mx-[10px]" src="/filter.svg" alt="filter" />
                    </div>
                </div>

                {currentSubmittals.map((s: Submittal) => (
                    <div className="grid grid-cols-3 border-b py-2" key={s.id}>
                        <div className='text-right'>{s.id}</div>
                        <div className='text-right'>{s.alias}</div>
                        <div className='text-right'>{s.status}</div>
                    </div>
                ))}
            </div>
        
        </>
  )
}
