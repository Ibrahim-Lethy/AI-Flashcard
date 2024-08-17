"use client";

import { UserButton, UserProfile } from "@clerk/nextjs";
import { Cards } from "@/components/cards"; // Import the Cards component

const DashboardPage = () => {
  const cardData = [
    { id: 1, content: "Card 1 Content" },
    { id: 2, content: "Card 2 Content" },
    { id: 3, content: "Card 3 Content" },
    { id: 4, content: "Card 4 Content" },
    { id: 5, content: "Card 5 Content" },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="mb-4">
        Signed in as <UserButton />
      </div>
      <div className="flex justify-center">
        <Cards cards={cardData} />
      </div>
    </div>
  );
};

export default DashboardPage;
