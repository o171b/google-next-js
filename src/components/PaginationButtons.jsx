'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButtons() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const startIndex = +searchParams.get('start') || 1;
  return (
    <div>
        {startIndex >= 10 && (
            <Link
            href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
            >
            <div>
                <BsChevronLeft />
                <p>Previous</p>
            </div>
            </Link>
        )}
        {startIndex <= 90 && (
            <Link
            href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
            >
            <div>
                <BsChevronRight />
                <p>Next</p>
            </div>

            </Link>
        )}
    </div>
  )
}
