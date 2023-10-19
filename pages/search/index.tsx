import Head from 'next/head'
import useSearch from '../../hooks/useSearch'
import Results from '../../widgets/Search/Results'
import styles from '../../styles/search.module.css'

export default function index() {
    const { response: results, loading, noResult, error, searchType, searchTerm, setSearchTerm, handleTypeChange } = useSearch()

    return (
        <>
            <Head>
                <title>Search - Max Metrix</title>
            </Head>

            <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        type="search"
                        placeholder={"Search " + searchType + "..."}
                        className="px-4 border border-gray-300 w-full rounded-lg placeholder-gray-500"
                        style={{ borderRadius: 10, height: 45 }}
                        aria-label="Search"
                        />
                    </form>
                </div>

                <div className="max-w-5xl mx-auto space-y-4">
                    <div className="flex space-x-1 border-b border-gray-400 pb-2">
                        <button onClick={() => handleTypeChange("players")} className={searchType === "players" ? styles.search_type_button_active : styles.search_type_button}>
                            Players
                        </button>
                        <button onClick={() => handleTypeChange("schools")} className={searchType === "schools" ? styles.search_type_button_active : styles.search_type_button}>
                            Schools
                        </button>
                    </div>

                    <div>
                        <Results results={ results } loading={ loading } noResult={ noResult } error={ error } searchType={ searchType }/>
                    </div>
                </div>
            </div>
        </>
    )
}
