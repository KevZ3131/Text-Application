"use client"

import React from 'react'
import { supabaseBrowser } from "@/Supabase/browser"
import { v4 as uuidv4 } from 'uuid';
import { Imessage, useMessage } from '@/Supabase/messages';
import { useUser } from '@/Supabase/user';

const TextBox = () => {
	const user = useUser ((state)=>state.user)
	const addMessage = useMessage((state) => state.addMessage);
  const supabase = supabaseBrowser(); 
  

  const handleSendMessage = async (text: string) => {
    const newMessage={
      id: uuidv4(),
      text,
      send_by: user?.id,
      is_edit: false,
      created_at:new Date().toISOString(),
      users:{
        id: user?.id,
        avatar_url: user?.user_metadata.avatar_url,
        created_at: new Date().toISOString(),
        display_name: user?.user_metadata.user_name,
      }
    }
    addMessage(newMessage as Imessage);

    const { error } = await supabase.from("messages").insert({ text });

    if (error) {

      alert("Error: " + error.message);
    }

  };
  

  return (
    <div>
        <textarea className="
            w-full
            resize-none
            text-l
            border-1
            h-13
            p-1
            rounded-lg  
        "
            placeholder="Enter Your Text Message Here"
            onKeyDown={(e)=>{
              if (e.key ==='Enter'){
                handleSendMessage(e.currentTarget.value);
                e.currentTarget.value="";
              }
            }}
            >
        </textarea>
    </div>
  )
}

export default TextBox