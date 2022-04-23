import { home } from '../pages.data'
import Illustration from '../components/Home/Illustration'

export default function Home() {
  return (
    <div className='max-w-[1100px] my-8 px-8 md:px-16'>
      <div className='lg:grid grid-cols-2 gap-8 justify-center items-center'>
        <h1>{home.header}</h1>

        <Illustration />

      </div>
    </div>
  )
}
