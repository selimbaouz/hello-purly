import Prose from '@/components/prose';
import { getPage } from '@/data/shopify';
import { cn } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function LegalPage({ params }: { params: { page: string } }) {
    const page = await getPage(params.page);

    if (!page) redirect("/");
    if (params.page.includes("contact")) redirect("/");
    console.log("page", page);

    return (
        <div className='relative'>
            <section className={cn(
                "w-full text-left space-y-10 max-w-screen-xl mx-auto py-10", 
                "lg:flex lg:flex-col lg:items-center lg:py-20", 
            )}>
                <div className={cn('px-6 space-y-14', "md:px-0")}>
                    <h1 className="text-3xl font-bold">{page.title}</h1>
                    <Prose html={page.body as string} />
                </div>
            </section>
        </div>
    );
};
