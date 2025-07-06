"use client";

const PageLayout = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 xl:px-0">
            {children}
        </div>
    );
};

export default PageLayout;