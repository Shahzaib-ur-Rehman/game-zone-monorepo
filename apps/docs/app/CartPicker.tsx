"use client";
import React, { useState } from "react";
import { useAppShell } from "@repo/ui/useAppShell";
import { shuffle } from "lodash";
const OPTIONS = [10, 5, 2, -1, -2];
const CartPicker = () => {
  const [cards, setcards] = useState(shuffle(OPTIONS));
  const [played, setPlayed] = useState<number | null>(null);
  const { addToScore, user } = useAppShell();
  if (!user) {
    return null;
  }
  return (
    <div className="container py-5">
      <div className="row g-2">
        {cards.map((card, index) => {
          return (
            <div
              className="col-sm-12 col-md-3 col-xl-3 mb-3 mb-sm-0 "
              key={index}
              onClick={() => {
                addToScore(card);
                setPlayed(index);
              }}
            >
              <div
                className="card py-5 text-center"
                style={{
                  background:
                    played !== null
                      ? index === played
                        ? "#ccc"
                        : "white"
                      : "black",
                }}
              >
                <div className="card-body">
                  <p className="card-title text-black">{card}</p>
                </div>
              </div>
            </div>
          );
        })}
        {played !== null && (
          <button
            className="btn btn-block  btn-primary"
            onClick={() => {
              setcards(shuffle(OPTIONS));
              setPlayed(null);
            }}
          >
            Play Again{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPicker;
