"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Error = () => {
  return (
    <div className='flex flex-col container'>
      <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>
        Ops, error - sem informações sobre esse País
      </h1>
      <Link className='mb-6 flex py-2' href="/">
      <Image src="/arrow.svg" alt='ìcone de seta voltar' width={24} height={24} />  Voltar
      </Link>
    </div>
  )
}

export default Error