import React from "react";

import RenderItem from "./RenderItem";

/* SVG Icons */
import BusinessDevelopment from "public/images/icon-business-development.svg";
import ContentWriter from "public/images/icon-content-writer.svg";
import ProductAdvertisement from "public/images/icon-product-advertisement.svg";
import CustomerRelationship from "public/images/icon-customer-relationship.svg";
import GameDev from "public/images/icon-game-development.svg";
import TravelGuidance from "public/images/icon-travel-guidance.svg";

export default function index() {

  /* Category Data */
  const data = [
    {
      imageName: <BusinessDevelopment />,
      name: "Business Development",
      total: 192,
    },
    {
      imageName: <ContentWriter />,
      name: "Content Writer",
      total: 82,
    },
    {
      imageName: <ProductAdvertisement />,
      name: "Product Advertisement",
      total: 128,
    },
    {
      imageName: <CustomerRelationship />,
      name: "Customer Relationship",
      total: 91,
    },
    {
      imageName: <GameDev />,
      name: "Game Development",
      total: 1283,
    },
    {
      imageName: <TravelGuidance />,
      name: "Travel Guidance",
      total: 68,
    },
  ];

  return (
    <>
      {/* Title Header */}
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-gray-900">
            Explore & <span className="text-teal-400">Learn</span>
          </h3>
        </div>
      </div>

      {/* Category Card */}
      <div className="flex justify-start items-center -mx-4 mt-6">
        {/* {data.data.map((item, index) => {
          return <RenderItem item={item} key={index}></RenderItem>;
        })} */}
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
