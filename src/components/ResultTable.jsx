import { useEffect, useState } from 'react'
import { detailsUrl } from './powerShellCheatSheet.data'
import { FaRegClone } from 'react-icons/fa'

export default function ResultTable({ data, options, search }) {
  // To store result array to be used multiple times
  const [result, setResult] = useState([false])
  // update result as search changes.
  useEffect(() => setResult(getResult()) , [search, options])
  // Check if the user deselect some option and un-include it in the array.
  const optionCheck = v => {
    if (options.cmdlet && v.alias.length > 0) return true
    else if (options.function && v.alias.length <= 0) return true
  }
  // Format the string and match the search with the correct values.
  const searchFunc = v => {
    if (!v) return
    // Search using Name.
    if (v.name.toLocaleLowerCase().replace('-', '').includes(search.toLocaleLowerCase().replace('-', ''))) {
        return optionCheck(v)
    }
    // Search using cmdlet.
    for (const i in v.alias) {
      if (v.alias[i].includes(search.toLocaleLowerCase())) return optionCheck(v)
    }
  }
  // Return the result array, filtered using the above functions.
  const getResult = () => {
    const result = data.filter(v => search ? searchFunc(v) : optionCheck(v))
    return result.length > 0 ? result : [false] 
  }
  // Copy to clipboard.
  const onClickClone = v => navigator.clipboard.writeText(v).then(() => alert("Copied to clipboard"))
  return (
    <>
      <div className='px-4'>{search 
        ? <div>There is {result[0] ? result.length : 0} result for " <span className='text-semibold text-sky-800'>{search}</span> ".</div>
        : <div>There are " <span className='text-semibold text-sky-800'>{result.length}</span> " PowerShell Commands</div>}</div>
      <div className='w-full min-w-[600px] lg:max-w-[1100px] max-h-[65vh] shadow-lg rounded-t-lg overflow-y-scroll'>
        <div className='w-full grid grid-cols-12 gap-4 py-4 px-4 bg-sky-500 text-white text-base border-b-2 border-sky-800 font-semibold'>
          <div className='col-span-3'>Name</div>
          <div className='col-span-2'>Alias</div>
          <div className='col-span-5'>Description</div>
          <div className='col-span-2'>Type</div>
        </div>
        {/* Render a row each iteration { Name, Alias, Description, Type }  */}
      {result.map((v, id) => (
        v ? <div key={id} className='--nth-child-bg w-full grid grid-cols-12 border-b border-sky-800 gap-2 md:gap-4 py-4 px-2 md:px-6 text-gray-700 text-xs sm:text-sm lg:text-base'>
              <div className='col-span-3 flex items-center space-x-2 font-bold text-sky-800 hover:underline transition-all duration-300'>
                <FaRegClone className='text-xl text-sky-800 hover:text-sky-500 cursor-pointer transition-all duration-300' onClick={() => onClickClone(v.name)} />
                <a href={detailsUrl + v.name.toLocaleLowerCase()} target='_blank'>{v.name}</a>
              </div>
              <div className='col-span-2 flex flex-col items-center space-x-2 space-y-1'>
                {v.alias && v.alias.map((v, id) => <div key={id} className='w-full flex space-x-2'>
                  <FaRegClone className='text-xl text-sky-800 hover:text-sky-500 cursor-pointer transition-all duration-300' 
                    onClick={() => onClickClone(v)} />
                  <div>{v}</div></div>)}
              </div>
              <div className='col-span-5 flex justify-start items-center'>{v.description}</div>
              <div className={v.alias.length <= 0 ? 'flex justify-center items-center col-span-2 h-8 w-20 bg-amber-500 rounded-lg shadow-md text-sm font-semibold' 
                : 'col-span-2 flex justify-center items-center h-8 w-20 bg-sky-500 rounded-lg shadow-md text-sm font-semibold'}>
                  {v.alias.length <= 0 ? 'Function' : 'CmdLet'}</div>
            </div> 
        : null
      ))}
      </div>
    </>
  )
}
