'use client'

import { data } from '../../script/database'
import Card from './Card'
import { lusitana } from './font'

const Itemlist = () => {


    return (
        <div className='mt-11'>
            <h1 className={`${lusitana.className} text-sm pl-11 text-gray-900 font-bold md:p-0 md:text-lg mb-6`}>SERVICES</h1>
            <div className='w-full px-20 md:px-9'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {data.map(data => {
                        return <Card key={data.id}
                            id={data.id}
                            title={data.title}
                            desc={data.desc}
                            desc2={data.desc2}
                            desc3={data.desc3}
                            img={data.img}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Itemlist