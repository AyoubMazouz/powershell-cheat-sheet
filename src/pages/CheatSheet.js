import { useState } from 'react'
import { data } from '../data'
import ResultTable from '../components/CheatSheet/ResultTable'
import Options from '../components/CheatSheet/Options'


export default function CheatSheet () {
    const [search, setSearch] = useState()
    const [options, setOptions] = useState({cmdlet: true, function: true})

    const onChangeSearch = (ev) => {
        ev.preventDefault()
        setSearch(ev.target.value)
    }
    return (
        <div className='space-y-4 px-2 md:px-8'>
            <div className='flex justify-center space-x-4'>
                <input type="search" placeholder='Search...' value={search} onChange={onChangeSearch}
                className='rounded shadow-lg h-8 md:min-w-[600px] max-w-[1100px] mb-4 px-4 focus:outline-none ring-2 focus:ring-sky-500 hover:ring-sky-300 ring-sky-700' />
                <div className=''><Options options={options} setOptions={setOptions} /></div>
            </div>

            <ResultTable data={data} options={options} search={search} />
        </div>
    )
}
