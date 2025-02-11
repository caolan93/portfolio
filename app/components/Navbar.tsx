import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
    return (
        <header className='flex flex-row justify-center p-4'>
            <nav>
                <ul className='flex flex-row gap-8 items-end'>
                    <li>
                        <a className='text-xl' href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className='text-xl' href="#">
                            Experience
                        </a>
                    </li>
                    {/* TODO: ADD IN PROJECTS */}
                    <li>
                        <a className='text-xl' href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}