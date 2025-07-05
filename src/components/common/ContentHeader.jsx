'use client';

const ContentHeader = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-title tracking-tight mb-4">
                {title}
            </h1>
            {/* Subtitle */}
            <p className="text-sm sm:text-base text-subtitle">
                {subtitle}
            </p>
        </div>
    );
};

export default ContentHeader;