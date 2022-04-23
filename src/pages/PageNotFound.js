import { useLocation, useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
      <div className='max-w-[1100px] h-[55vh] flex justify-center items-center'>
          <div className='text-center'>
              <div className='text-[19rem]'>404</div>
              <div className='text-[4rem]'>PAGE NOT FOUND</div>
              <div className=''>The page <span className='font-semibold'>"{location.pathname}"</span> is not found</div>
              <div onClick={() => navigate('/')}
                  className='text-sky-600 underline font-semibold'
                  >Go Back</div>
          </div>
      </div>
    )
}
