"use client";

import { useMessage } from '@/Supabase/messages';
import React from 'react'
import Message from './Message';

export default function ListMessages() {
  const messages = useMessage((state)=> state.messages)
  return (
    <div>
        <div className="
          space-y-7
        ">
          {messages.map((value,index)=>{
            return <Message key = {index} message={value}/>

          })}
        </div>
    </div>
  )
}
