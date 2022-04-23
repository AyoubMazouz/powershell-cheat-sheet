import { home } from '../../pages.data'
import { BiChevronRight } from 'react-icons/bi'

export default function Illustration() {
  return (
    <div>
        <div className='bg-sky-500 h-12 rounded-t-md mt-12'>
          <div className='text-[3rem] text-sky-700 col-span-full flex items-center -space-x-4'>
              <BiChevronRight />
              <div className='-mt-[1rem]'>_</div>
            </div>
        </div>
        <div className='w-full grid grid-cols-12 gap-4 p-4 bg-slate-200'>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-7'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-2'></div>
          <div className='col-span-3'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-4'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-3'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-1'></div>
          <div className='col-span-4'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-2'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-7'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-2'></div>
          <div className='col-span-1'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-6'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-1'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-3'></div>
          <div className='col-span-2'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-3'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-1'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-2'></div>
          <div className='col-span-6'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-2'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-1'></div>
          <div className='--powershell-gradient-bg rounded-full h-3 col-span-8'></div>
          <div className='col-span-1'></div>
        </div>
    </div>
  )
}
