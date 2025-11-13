import React from "react";
import { motion } from "framer-motion";

// VOID STORE — Tema espacial + produtos + estética "brainhot"
// Pronto para uso em qualquer projeto React

export default function VoidStore() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Fundo espacial */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=60')",
        }}
      />

      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-widest text-purple-400">
            VOID STORE
          </h1>
          <nav className="flex gap-6 text-sm">
            <a href="#produtos" className="hover:text-purple-300">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-purple-300">
              Sobre
            </a>
            <a href="#contato" className="hover:text-purple-300">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-purple-300 drop-shadow-lg"
        >
          Bem-vindo à VOID STORE
        </motion.h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          A loja do universo — produtos únicos, energia cósmica e design brainhot.
        </p>
      </section>

      {/* PRODUTO DESTACADO */}
      <section id="produtos" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">
          Produto em Destaque
        </h3>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl max-w-2xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1618172193622-6f87c0ec7c7c?auto=format&fit=crop&w=1000&q=60"
            className="w-full h-64 object-cover rounded-xl mb-4"
            alt="Produto"
          />

          <h4 className="text-2xl font-semibold text-purple-200 mb-2">
            💎 Void Crystal — Edição Cósmica
          </h4>
          <p className="text-gray-300 mb-4">
            Um artefato raro, carregado com energia espacial e vibrações estéticas.
            Perfeito para quem busca estilo, poder e vibes brainhot.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-purple-300">R$ 49,90</span>
            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg font-semibold">
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-300 mb-6">Sobre a Void</h3>
        <p className="text-gray-300 max-w-3xl">
          A Void Store nasceu para ser mais que uma loja. É uma experiência estética.
          Misturamos arte espacial, brilho neon e vibes brainhot para criar produtos e
          visuais que parecem ter vindo de outra galáxia.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-white/5 backdrop-blur-md border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-purple-300 mb-4">Fale com a gente</h3>
          <p className="text-gray-300 mb-6">Clique abaixo para chamar no WhatsApp:</p>
          <a
            href="void.store"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} VOID STORE — Energia além da realidade.
      </footer>
    </div>
  );
}
