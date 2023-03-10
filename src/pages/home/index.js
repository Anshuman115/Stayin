import HeroSection from "@/components/HeroSection/HeroSection";
import Layout from "@/components/Layout/Layout";
import { useGetRoomsQuery } from "@/store/services/roomsApi";
import React from "react";
import HomeImage from "../../Images/photo-1566073771259-6a8506099945.jpeg";

const Home = () => {
  const { data: rooms, error, isLoading } = useGetRoomsQuery();
  console.log("rooms", rooms);
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Home;
