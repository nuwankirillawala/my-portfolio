import React from 'react'

const menuItems = ['home','about', 'education', 'work', 'skills','experience' ,'testimonials', 'contact', ];

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {menuItems.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#313BAC'}: {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots