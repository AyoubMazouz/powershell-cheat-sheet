import { useEffect, useState } from 'react'
import { detailsUrl } from '../../powerShellCheatSheet.data'
import { FaRegClone } from 'react-icons/fa'

export default function ResultTable({ data, options, search }) {
  const [result, setResult] = useState([false])
  useEffect(() => setResult(getResult()) , [search, options])
  const optionCheck = v => {
    if (options.cmdlet && v.alias.length > 0) return true
    else if (options.function && v.alias.length <= 0) return true
  }
  const searchFunc = v => {
    if (!v) return
    if (v.name.toLocaleLowerCase().replace('-', '').includes(search.toLocaleLowerCase())) {
        return optionCheck(v)
    }
    for (const i in v.alias) {
      if (v.alias[i].includes(search.toLocaleLowerCase())) return optionCheck(v)
    }
  }
  const getResult = () => {
    const result = data.filter(v => search ? searchFunc(v) : optionCheck(v))
    return result.length > 0 ? result : [false] 
  }
  const onClickClone = (id, v) => {
    navigator.clipboard.writeText(data[id][v]).then(() => alert("Copied to clipboard"));
  }
  return (
    <>
      <div className='px-4'>{search 
        ? <div>There is {result[0] ? result.length : 0} result for " {search} ".</div>
        : <div>There are "{result.length} PowerShell Commands"</div>}</div>
      <div className='w-full min-w-[600px] lg:max-w-[1100px] max-h-[65vh] shadow-lg rounded-t-lg overflow-y-scroll'>
        <div className='w-full grid grid-cols-12 gap-4 py-4 px-4 bg-sky-600 text-white text-base border-b-2 border-sky-800 font-semibold'>
          <div className='col-span-3'>Name</div>
          <div className='col-span-2'>Alias</div>
          <div className='col-span-5'>Description</div>
          <div className='col-span-2'>Type</div>
        </div>    
      {result.map((v, id) => (
        v ? <div key={id} className='--nth-child-bg w-full grid grid-cols-12 border-b-2 border-sky-800 gap-2 md:gap-4 py-4 px-2 md:px-6 text-gray-700 text-xs sm:text-sm lg:text-base'>
              <div className='col-span-3 flex items-center space-x-2 font-bold text-sky-600'>
                <FaRegClone className='text-xl text-sky-800 hover:text-sky-500 cursor-pointer' onClick={() => onClickClone(id, 'name')} />
                <a href={detailsUrl + v.name.toLocaleLowerCase()} target='_blank'>{v.name}</a>
              </div>
              <div className='col-span-2 flex flex-col items-center space-x-2 space-y-1'>
                {v.alias.map(v => <div className='w-full flex space-x-2'>
                  <FaRegClone className='text-xl text-sky-700 hover:text-sky-500 cursor-pointer' onClick={() => onClickClone(id, 'alias')} />
                  <div>{v}</div></div>)}
              </div>
              <div className='col-span-5 flex justify-start items-center'>{v.description}</div>
              <div className={v.alias.length <= 0 ? 'flex justify-center items-center col-span-2 h-8 w-20 bg-orange-400 rounded-lg shadow-md text-sm font-semibold' 
                : 'col-span-2 flex justify-center items-center h-8 w-20 bg-blue-400 rounded-lg shadow-md text-sm font-semibold'}>
                  {v.alias.length <= 0 ? 'Function' : 'CmdLet'}</div>
            </div> 
        : null
      ))}
      </div>
    </>
  )
}
