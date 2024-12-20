import { fetchCardData } from "@/services/data";
import React from "react";
import Card from "./_components/Card";

async function Profile() {
  const { numberOfUsers, numberOfPosts, numberOfComments } =
    await fetchCardData();

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="کاربران" value={numberOfUsers} type="users" />
        <Card title="پست ها" value={numberOfPosts} type="posts" />
        <Card title="نظرات" value={numberOfComments} type="comments" />
      </div>
    </div>
  );
}

export default Profile;
