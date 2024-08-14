"use client";

import { UserButton, UserProfile } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            Signed in as <UserButton />
        </div>
    );
};

export default DashboardPage;