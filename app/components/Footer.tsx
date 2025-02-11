import Image from 'next/image'
import React from 'react'
import linkedIn from '@/lib/assets/icons/linkedIn.svg'
import github from '@/lib/assets/icons/github.svg'
import discord from '@/lib/assets/icons/discord.svg'

type Props = {}

export const Footer = (props: Props) => {
    return (
        <footer className='flex flex-row justify-center'>
            <ul className='flex flex-row gap-8 items-end'>
                <li>
                    <a className="flex p-2" href="https://www.linkedin.com/in/caolan-fanning-1a7229157/">
                        <Image src={linkedIn} alt='LinkedIn Icon' height={24} width={24} />
                    </a>
                </li>
                <li>
                    <a className="flex p-2" href="https://github.com/caolan93">
                        <Image src={github} alt='Github Icon' height={24} width={24} />
                    </a>
                </li>
                <li>
                    <a className="flex p-2" href="https://discord.com/channels/1216860101810454588/1216860101810454590">
                        <Image src={discord} alt='Discord Icon' height={24} width={24} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}