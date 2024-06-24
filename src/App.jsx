import {useEffect, useState} from "react";
import ListCard from "./components/ListCard.jsx";

function App() {
    const [countries, setCountries] = useState();

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe")
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(data);
            });
    });
    return (
        <div className="min-h-screen bg-slate-800">
            <div className="max-w-7xl mx-auto py-20 px-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="text-gray-50 text-4xl">Données des pays d'Europe</h1>
                <p className="text-gray-100 text-xl mb-8">Cliquez sur une carte pour révéler les informations du
                    pays.</p>
                {countries && (
                    <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
                        {countries.map((country, index) => (
                            <ListCard key={index} country={country}/>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default App
