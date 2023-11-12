
interface dataType {
    id: number,
    title: string,
    desc: string,
    desc2: string,
    desc3: string,
    img: string

}

export const data: dataType[] = [

    {
        id: 1,
        title: 'Cybersecurity',
        desc: "Pentreation testing",
        desc2: 'Malware analysis',
        desc3: "security as a service",
        img: '/cyber2.png'
    },
    {
        id: 2,
        title: 'Mobile Apps',
        desc: "Android App Dev",
        desc2: 'IOS App Dev',
        desc3: "",
        img: '/m.jpg'

    },
    {
        id: 3,
        title: 'Design & Development',
        desc: "UI/UX Design",
        desc2: 'AR/VR App Development',
        desc3: "",
        img: '/software.png'
    },
    {
        id: 4,
        title: 'Networking',
        desc: "CCTV Installation",
        desc2: 'LAN/WAN Installation Setup',
        desc3: "",
        img: '/networking.jpeg'
    },
    {
        id: 5,
        title: 'Specail Training',
        desc: "IT Proffessional Training",
        desc2: 'Deep Dive Cybersecurity Training',
        desc3: "",
        img: '/tech.png'
    },
    {
        id: 6,
        title: 'Our Solution',
        desc: "Cloud Solution",
        desc2: 'Cybersecurity solution',
        desc3: 'AI Solution',
        img: '/AI.jpeg'
    },

]


