"use server"

import React, { Suspense } from 'react'
import ListMessages from './ListMessages'
import { createClient } from '@/Supabase/server';
import InitMessages from '@/Supabase/InitMessages';


export default async function ChatMessages() {
	const supabase = createClient();

	const { data } = await supabase.from("messages").select("*,users(*)")

	return (
		<Suspense fallback={"loading.."}>
			<ListMessages />
            <InitMessages messages={data || []}/>
		</Suspense>
	);
}