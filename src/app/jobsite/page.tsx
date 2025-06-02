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

    const [currentSubmittals, ] = useState<Submittal[]>(PLACEHOLDER_SUB_DATA); 
    const [previewActive, setPreviewActive] = useState<boolean>(false);

    return (
        <>
            <Navbar>
                <a href="/dashboard" className="flex flex-row h-full p-2">
                    <img src="/back.svg" alt="Back" />
                </a>
                <div className="h-full flex items-center">
                    <h1 className='text-black m-2'><b>SITE ID/ALIAS</b></h1>
                    <Searchbar />
                </div>
                <div className="flex flex-row h-full p-1">
                    <img className="mr-1" src="/print.svg" alt="Print" />
                    <img src="/download.svg" alt="Download"/>
                </div>
            </Navbar>
            <div className="p-4 justify-right">
                <a href="/submittal" className="p-1 justify-between flex flex-row border-2 rounded-md bg-black fixed right-2 bottom-2">
                    <img className="h-10 filter invert" src="/add.svg" alt="Add" />
                    <h1 className='text-white m-2'>NEW SUBMITTAL</h1>
                </a>

                <div className="grid grid-cols-3 font-bold border-b py-2">
                    <div className='flex flex-row justify-between'>
                        <div>ID</div> 
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>ALIAS</div> 
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>STATUS</div> 
                        <img className="h-[20px] mx-[10px]" src="/filter.svg" alt="filter" />
                    </div>
                </div>

                {currentSubmittals.map((s: Submittal) => (
                    <div onClick={() => setPreviewActive(true)}key={s.id} className="grid grid-cols-3 border-b py-2">
                        <div className='text-right'>{s.id}</div>
                        <div className='text-right'>{s.alias}</div>
                        <div className='text-right'>{s.status}</div>
                    </div>
                ))}
            </div>

            {previewActive && (
                <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg relative">
                        <button
                            onClick={() => setPreviewActive(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold mb-4">Submittal Preview</h2>
                        <iframe
                            src="/blank.pdf"
                            className="w-full h-[70vh] border rounded"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
