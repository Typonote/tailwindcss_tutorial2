import React from 'react'

// grid-cols-3	=> grid-template-columns: repeat(3, minmax(0, 1fr));

const Menu = () => {
    return (

    <div class="bg-blue-400 text-blue-400 min-h-screen flex items-center justify-center">

        
        <div class="grid grid-cols-3 gap-2">

            <div class="col-span-2 bg-white p-10 rounded">1</div>
            <div class="bg-white p-10 rounded">2</div>
            <div class="row-span-3 bg-white p-10 rounded">3</div>
            <div class="bg-white p-10 rounded">4</div>
            <div class="bg-white p-10 rounded">5</div>
            <div class="bg-white p-10 rounded">6</div>
            <div class="col-span-2 bg-white p-10 rounded">7</div>
            <div class="bg-white p-10 rounded">8</div>
            <div class="bg-white p-10 rounded">9</div>

        </div>

    </div>
    )
}

export default Menu
