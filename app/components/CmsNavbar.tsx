import Link from 'next/link'
import { BackArrowIcon } from './Icons'
import { lilitaOne } from '../utils/fonts'

const CmsNavbar = () => {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
      <Link href='/'>
        <BackArrowIcon />
      </Link>

      <div className={`${lilitaOne.className} text-3xl dark:text-amber-50`}>
        Dev
        <span className='text-purple-500'>Blog</span>
      </div>
    </div>
  )
}

export default CmsNavbar
