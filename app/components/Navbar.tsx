import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
    return (
        <header className='flex flex-row justify-center p-4'>
            <nav>
                <ul className='flex flex-row gap-8 items-end'>
                    <li>
                        <a className='flex text-xl p-2' href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className='flex text-xl p-2' href="#">
                            Experience
                        </a>
                    </li>
                    {/* TODO: ADD IN PROJECTS */}
                    <li>
                        <a className='flex text-xl p-2' href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}