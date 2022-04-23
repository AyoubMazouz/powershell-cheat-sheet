import { about as data } from './pages.data'

export default function About() {
  return (
    <div className='w-[480px] md:w-[820px] lg:max-w-[1100px] my-8 text-gray-800'>
      <div className='px-2 md:px-8 w-full space-y-4'>
        {/* Resources */}
        <div className=''>
          <h1 className='text-sky-800 font-semibold'>Resources:</h1>
          <ul className='text-blue-500'>
            {data.resources.map(v => <li><a href={v}>{v}</a></li>)}
          </ul>
        </div>
        {/* Contributors */}
        <div className=''>
          <h1 className='text-sky-800 font-semibold'>Contributors:</h1>
          <ul className=''>
            {data.contributors.map(v => <p>{v}</p>)}
          </ul>
        </div>
        {/* Version */}
        <div>
          <h3 className='text-sky-800 font-semibold'
          >Version: <span className='text-gray-800'>{data.powerShellCheatSheet.version}</span></h3>
        </div>
        {/* Repository */}
        <div>
          <h3 className='text-sky-800 font-semibold'>Repository: 
            <a href={data.repository} target='_blank' className='text-blue-500'>{data.repository}</a></h3>
        </div>
      </div>
    </div>
  )
}
