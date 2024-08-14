const LandingPageLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="flex-col items-center justify-center h-screen">
            {children}
        </div>
    );
}

export default LandingPageLayout;