'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: any) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": 'application/json',
      }
    })
      .then(res => res.json())
      .then(({ authToken }) => authToken && localStorage.setItem('Auth-Token', authToken))
      .catch(console.log)
  }

  return (
    <main className="grid grid-cols-2 gap-5 h-[88vh] p-24">
      <span className='flex flex-col justify-center gap-10'>
        <h1 className='font-bold text-2xl uppercase'>gerenciamento de projetos</h1>
        <p className='text-lg'>
          Torne muito mais simples o
          gerenciamento de projetos pessoais ou empresariais.
          Obtenha relatórios, estatísticas e muito mais.
        </p>
        <Image
          src='/image-hero.svg'
          alt='logo'
          height={300}
          width={300}
        />
      </span>
      <form
        onSubmit={login}
        className='flex flex-col bg-white justify-evenly p-10 rounded-lg shadow-md'>
        <h2 className='font-bold text-xl'>Fazer login</h2>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          type="email"
          id="email"
          className='p-2 border-2 w-[100%] rounded border-#acacac'
        />
        <label htmlFor="password">Senha</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          type="password"
          id="password"
          className='p-2 border-2 w-[100%] rounded border-#acacac'
        />
        <button
          type="submit"
          className='bg-black text-white p-2 rounded'
        >ENTRAR</button>
      </form>
    </main>
  )
}
