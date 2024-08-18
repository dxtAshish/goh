import React from 'react'

const Parallax = () => {
    return (
        <div className="relative h-full ">
            <div className="absolute inset-0 z-0">
                <div className="bg-cover bg-center bg-fixed h-full object-cover" style={{"backgroundImage": "url('https://wpbingosite.com/wordpress/eldy/wp-content/uploads/2023/05/banner-video3.jpg')"}}></div>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to our website</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Parallax