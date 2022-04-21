import { motion } from 'framer-motion'

export default function Options ({ options, setOptions }) {
    const onchangeCmdlet = () => setOptions(prev => ({ cmdlet: !prev.cmdlet, function: prev.function }))
    const onchangeFunction = () => setOptions(prev => ({ cmdlet: prev.cmdlet, function: !prev.function }))

    const containerVariant = {
        transiton: {
            staggerChildren: .3
        }
    }
    const variant = {
        hidden:{
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                duration: .3,
            }
        },
        hover: {
            scale: 1.2
        }
    }

    return (
        <motion.div variants={containerVariant} initial='hidden' animate='visible' className='flex justify-around px-4 space-x-2 text-gray-700 font-semibold text-sm'>
            <motion.div variant={variant} className={options.cmdlet ? 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-blue-400' : 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-gray-400 cursor-pointer'}>
                <input type="checkbox" name='cmd-lit' checked={options.cmdlet} onChange={onchangeCmdlet} />
                <label htmlFor="cmd-lit" className="">CmdLit</label>
            </motion.div>
            <motion.div variant={variant} className={options.function ? 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-orange-400' : 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-gray-400 cursor-pointer'}>
                <input type="checkbox" name='function' checked={options.function} onChange={onchangeFunction}/>
                <label htmlFor="function">Function</label>
            </motion.div>
        </motion.div>
    )
}
