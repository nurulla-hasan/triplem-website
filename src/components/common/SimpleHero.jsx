"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const SimpleHero = ({
  title = "Default Page Title",
  links = [{ name: "Home", href: "/" }],
}) => {
  const displayTitle = title;

  return (
    <section className="relative h-30 sm:h-60 md:px-5 flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/simple-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-0">
        <div className="md:max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-2 md:mb-4" aria-label="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                {links.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <BreadcrumbItem>
                      {link.href && !link.isCurrent ? (
                        <BreadcrumbLink asChild>
                          <Link href={link.href} className="text-white hover:text-gray-300 transition-colors">
                            {link.name}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-gray-300">
                          {link.name}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < links.length - 1 && (
                      <BreadcrumbSeparator>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </nav>

          {/* Page Title */}
          <h1 className="text-sm sm:text-3xl lg:text-4xl font-bold text-white">{displayTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;