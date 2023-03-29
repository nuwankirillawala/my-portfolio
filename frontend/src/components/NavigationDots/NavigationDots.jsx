import React from 'react'

// const menuItems = ['home','about','education', 'skills', 'work', 'experience','interests','testimonials', 'contact', ];
const menuItems = ['home','about','education', 'skills', 'work', 'experience','interests', 'contact', ];

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