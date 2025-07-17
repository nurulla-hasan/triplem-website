"use client";
import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({ rating, totalStars = 5, starClassName, containerClassName }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={cn("flex items-center", containerClassName)}>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <Star
            key={index}
            className={cn(
              starClassName,
              "shrink-0",
              starNumber <= fullStars
                ? "text-primary fill-primary"
                : hasHalfStar && starNumber === fullStars + 1
                ? "text-primary fill-primary/10"
                : "text-subtitle"
            )}
          />
        );
      })}
    </div>
  );
};

export default StarRating;