"use client";

import { Search, Paperclip, Send } from "lucide-react";
import Image from "next/image";

export default function ChatPage() {
  const contacts = [
    { name: "Caio Medeiros", message: "Preciso de ajuda", time: "22:25", unread: 1, active: true },
    { name: "Juliano Flores", message: "Ajuda eu", time: "22:25", unread: 2, active: false },
    { name: "Fabrício Gazola", message: "Por favor consegue vir aqui", time: "22:25", unread: 6, active: false },
  ];

  return (
    <div className="flex h-[calc(100vh-5rem)] -mx-8 -mb-8">
      {/* Messages Sidebar */}
      <div className="w-80 bg-[#1E3A54] flex flex-col pt-6 font-sans shrink-0">
        <h2 className="text-white text-center text-lg mb-6">Chats</h2>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors relative
                ${contact.active ? "bg-[#3587CA]" : "hover:bg-white/5"}
              `}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0"></div>
                {contact.unread > 0 && (
                  <div className="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[10px] text-white font-bold border border-[#1E3A54]">
                    {contact.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-white font-semibold text-sm truncate pr-2">{contact.name}</h4>
                  <span className="text-white/60 text-xs shrink-0">{contact.time}</span>
                </div>
                <p className="text-white/80 text-xs truncate">{contact.message}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-gray-100 flex flex-col relative overflow-hidden">
        {/* Chat Pattern Background Overlay (pseudo-pattern using CSS for mockup) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Chat Header */}
        <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Caio Medeiros <span className="text-green-500 font-normal text-xs ml-2">online</span></h3>
              <p className="text-xs text-gray-500">Paciente</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Search className="w-5 h-5"/>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-end">
          <div className="flex items-end gap-3 mb-6 max-w-lg">
             <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
             <div className="bg-white px-6 py-4 rounded-2xl rounded-bl-sm shadow-sm">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Caio Medeiros</h4>
                <p className="text-sm text-gray-600">Preciso de ajuda</p>
             </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-6 bg-transparent z-10 shrink-0">
          <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Digite sua mensagem..." 
              className="flex-1 text-sm bg-transparent border-none focus:outline-none text-gray-700"
            />
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="bg-[#2E5A84] text-white p-2.5 rounded-full hover:bg-primary transition-colors flex items-center justify-center">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
