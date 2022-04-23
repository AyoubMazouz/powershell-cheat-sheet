import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { data } from '../components/powerShellCheatSheet.data'
import ResultTable from '../components/ResultTable'
import Options from '../components/Options'


export default function CheatSheet () {
    const [search, setSearch] = useState()
    // Used to display or not cmdlet or functions.
    const [options, setOptions] = useState({cmdlet: true, function: true})

    const onChangeSearch = (ev) => {
        ev.preventDefault()
        setSearch(ev.target.value)
    }
    return (
        <div className='space-y-4 px-2 md:px-8'>
            <div className='flex justify-center space-x-4'>
                <div className='relative'>
                    <FaSearch className='left-[.8rem] top-[.5rem] absolute opacity-40' />
                    <input type="search" placeholder='Search...' value={search} onChange={onChangeSearch}
                    className='rounded shadow-lg h-8 md:min-w-[600px] max-w-[1100px] mb-4 px-10 focus:outline-none ring-2 focus:ring-sky-500 hover:ring-sky-300 ring-sky-700' />
                </div>
                <div className=''><Options options={options} setOptions={setOptions} /></div>
            </div>

            <ResultTable data={data} options={options} search={search} />
        </div>
    )
}
