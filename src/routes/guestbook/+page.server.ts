import { supabase } from '$lib/supabase';

export async function load() {
	const { data } = await supabase.from('guestbook').select('username, message');
	return {
		messages: data ?? []
	};
}
