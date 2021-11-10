const Navbar = () => {


    const menubar = [{
        label: 'Home',
        link: '/home'
    }, {
        label: 'About',
        link: '/test'
    }, {
        label: 'Messages',
        link: '/messages'
    },
    {
        label: 'Charitra',
        link: '/charitra'
    }]
    return <div > < nav > {
        menubar.map((m, index) => {
            return <button key={index} style={{margin:'15px', fontSize:'14px'}}> { m.label } < /button>
        })
    }

    <
    /nav></div >
}

export default Navbar