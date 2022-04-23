export default function Options ({ options, setOptions }) {
    // Update the state to filter the unselected options.
    const onchangeCmdlet = () => setOptions(prev => ({ cmdlet: !prev.cmdlet, function: prev.function }))
    const onchangeFunction = () => setOptions(prev => ({ cmdlet: prev.cmdlet, function: !prev.function }))
    return (
        <div className='flex justify-around px-4 space-x-2 text-gray-700 font-semibold text-sm'>
            {/* Function. */}
            <div className={options.cmdlet ? 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-blue-400' : 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-gray-400 cursor-pointer'}>
                <input type="checkbox" name='cmd-lit' checked={options.cmdlet} onChange={onchangeCmdlet} />
                <label htmlFor="cmd-lit" className="">CmdLit</label>
            </div>
            {/* Cmdlet */}
            <div className={options.function ? 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-orange-400' : 'space-x-2 h-8 w-24 rounded-lg flex justify-center items-center bg-gray-400 cursor-pointer'}>
                <input type="checkbox" name='function' checked={options.function} onChange={onchangeFunction}/>
                <label htmlFor="function">Function</label>
            </div>
        </div>
    )
}
