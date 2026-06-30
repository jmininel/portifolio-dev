'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import emailjs from "@emailjs/browser"

export const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSending(true)
    setStatusMessage(null)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatusMessage("Mensagem enviada com sucesso!")

      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error(error)
      setStatusMessage("Erro ao enviar a mensagem.")
    } finally {
      setIsSending(false)
    }
  }
  return (
    <footer
      className="flex flex-col items-center justify-center h-32 bg-black/80 scroll-mt-24"
      id="contato"
    >
      <div className="flex items-center justify-center gap-8 mb-2">
        <Link
          href="https://www.linkedin.com/in/juliana-mininel/"
          target="_blank"
          className="bg-linear-to-r from-[#ff00cc] to-[#333399] p-4 rounded-md hover:scale-110 transition duration-300 inline-flex"
        >
          <FaLinkedin className="text-white text-2xl" />
        </Link>

        <Link
          href="https://github.com/jmininel"
          target="_blank"
          className="bg-linear-to-r from-[#ff00cc] to-[#333399] p-4 rounded-md hover:scale-110 transition duration-300 inline-flex"
        >
          <FaGithub className="text-white text-2xl" />
        </Link>

        <Dialog
          open={open}
          onOpenChange={(value) => {
            setOpen(value)

            if (!value) {
              setStatusMessage(null)
            }
          }}
        >
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Abrir formulário de contato"
              className="bg-linear-to-r from-[#ff00cc] to-[#333399] p-4 rounded-md hover:scale-110 transition duration-300 inline-flex"
            >
              <MdEmail className="text-white text-2xl" />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-black/40">
            <DialogHeader className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Fale comigo
              </p>

              <DialogTitle className="mt-3 text-3xl font-semibold text-white">
                Envie uma mensagem
              </DialogTitle>

              <DialogDescription className="mt-3 text-sm leading-6 text-slate-400">
                Preencha seu nome, e-mail e mensagem. O envio será feito pelo
                EmailJS.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="grid gap-2 text-sm text-slate-200">
                Nome
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="grid gap-2 text-sm text-slate-200">
                E-mail
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="seu@exemplo.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="grid gap-2 text-sm text-slate-200">
                Mensagem
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              {statusMessage && (
                <p className="text-sm text-slate-300">{statusMessage}</p>
              )}

              <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60">
                  {isSending ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <span className="text-sm text-gray-500">
        © 2026 Juliana Mininel Dev Portifólio. All rights reserved.
      </span>
    </footer>
  )
}