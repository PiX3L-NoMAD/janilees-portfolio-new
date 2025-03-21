/* eslint-disable  @typescript-eslint/no-unused-vars */
import Portfolio from '@/components/Portfolio';
// import { createClient } from '../utils/supabase/client';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  // const supabase = createClient();

  Page();

  return <Portfolio />;
}
