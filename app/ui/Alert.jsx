import React from 'react'

const Alert = () => {

    return (

        <div className="sticky flex flex-col w-3/12 py-5 pl-6 pr-8 bg-white rounded-md shadow top-4 sm:flex-row sm:items-center sm:pr-6">
            <div className="flex flex-row items-center w-full pb-4 border-b sm:border-b-0 sm:w-auto sm:pb-0">
                <div className="text-green-500">
                    <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="ml-3 text-sm font-medium">Submitted Successfully.</div>
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
            </div>
        </div>
    )
}

export default Alert