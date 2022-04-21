import React from 'react'
import { FaClone } from 'react-icons/fa'

export default function ResultTable({ data, options, search }) {
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
  const renderResult = () => {
    const result = data.filter(v => search ? searchFunc(v) : optionCheck(v))
    return result.length > 0 ? result : [false] 
  }
  const onClickCloneName = id => {
    navigator.clipboard.writeText(data[id].name).then(() => {
      alert("Copied to clipboard");
  });
  }
  const onClickCloneCmdlet = id => {
    navigator.clipboard.writeText(data[id].alias).then(() => {
      alert("Copied to clipboard");
  });
  }

  return (
    <>
      <div className='px-4 font-medium'>There is {renderResult()[0] ? renderResult().length : 0} result for " {search} ".</div>
      <div className='w-full min-w-[600px] lg:max-w-[1100px] max-h-[65vh] font-semibold shadow-lg rounded-t-lg overflow-y-scroll'>
        <div className='w-full grid grid-cols-12 gap-4 py-4 px-4 bg-sky-600 text-white text-base border-b-2 border-sky-800'>
          <div className='col-span-3'>Name</div>
          <div className='col-span-2'>Cmdlet</div>
          <div className='col-span-5'>Description</div>
          <div className='col-span-2'>Type</div>
        </div>
        
      {renderResult().map((v, id) => (
        v ? <div key={id} className='--nth-child-bg w-full grid grid-cols-12 border-b-2 border-sky-800 gap-2 md:gap-4 py-4 px-2 md:px-6 text-gray-700 text-xs sm:text-sm lg:text-base'>
              <div className='col-span-3 flex items-center space-x-2'>
                <FaClone className='text-xl text-sky-800 hover:text-sky-500 cursor-pointer' 
                  onClick={() => onClickCloneName(id)} /><div>{v.name}</div>
              </div>
              <div className='col-span-2 flex flex-col items-center space-x-2 space-y-1'>
                {v.alias.map(v => <div className='w-full flex space-x-2'><FaClone className='text-xl text-sky-700 hover:text-sky-500 cursor-pointer' 
                  onClick={() => onClickCloneCmdlet(id)} /><div>{v}</div></div>)}
              </div>
              <div className='col-span-5 flex justify-start items-center'>{v.description}</div>
              <div className={v.alias.length <= 0 ? 'flex justify-center items-center col-span-2 h-8 w-20 bg-orange-400 rounded-lg shadow-md' 
                : 'col-span-2 flex justify-center items-center h-8 w-20 bg-blue-400 rounded-lg shadow-md'}>{v.alias.length <= 0 ? 'Function' : 'CmdLet'}</div>
            </div> 
        : <div className='p-4 border-b-2 border-sky-700'>There is 0 result for " {search} ".</div>
      ))}
      </div>
    </>
  )
}
