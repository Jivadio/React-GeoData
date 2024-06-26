export default function ModalContent({country, closeModal}) {
    return (
        <div onClick={closeModal}
             className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
            <div onClick={e => e.stopPropagation()} className="min-w-[500px] relative rounded p-7 bg-gray-50">
                <button onClick={closeModal}
                        className="absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 px-3 rounded">
                    X
                </button>

                <h2 className="text-2xl mb-4">Voici les informations de {country.name.common}</h2>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Language(s)</span>
                    : {Object.entries(country.languages).map(lang => lang[1]).join(", ")}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Capitale</span>
                    : {country.capital}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Population</span>
                    : {country.population.toLocaleString()}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Noms des habitant(e)s</span>
                    : {Object.entries(country.demonyms.fra).map(demonym => demonym[1]).join(", ")}
                </p>
            </div>
        </div>
    )
}