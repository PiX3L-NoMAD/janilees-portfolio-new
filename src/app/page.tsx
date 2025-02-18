/* eslint-disable  @typescript-eslint/no-unused-vars */
import Portfolio from '@/components/Portfolio';
import { createClient } from '../utils/supabase/client';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient();
  const val = await prisma.blogPost.findMany({
    take: 10,
  });

  Page()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  return <Portfolio />;
}
