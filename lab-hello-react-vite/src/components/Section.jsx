import React from "react";
import Card from "./Card";

export default function Section() {
  return (
    <div className="p-8 grid grid-cols-4 gap-6">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
  );
}
