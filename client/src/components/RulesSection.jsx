/* eslint-disable no-unused-vars */
import React from "react";

const RulesSection = () => {
  const rules = [
    {
      title: "General Rules",
      details: [
        "Players must register in advance and provide their in-game ID.",
        "Players must use their own devices and ensure a stable internet connection.",
        "The latest version of PUBG Mobile must be installed.",
        "Cheating, hacking, or exploiting bugs is strictly prohibited and will lead to disqualification.",
      ],
    },
    {
      title: "Tournament Format",
      details: [
        "Mode: Squad mode (4 players per team).",
        "Map: Erangel for all matches.",
        "Perspective: Third-person perspective (TPP).",
        "Match Count: 3 matches will be played.",
      ],
    },
    {
      title: "Scoring System",
      details: [
        "Placement Points: 1st Place (15 points), 2nd Place (12 points), 3rd Place (10 points), etc.",
        "Kill Points: 1 point per kill.",
        "Winner Determination: The team with the highest total points after all matches wins.",
      ],
    },
    {
      title: "Gameplay Rules",
      details: [
        "Players must join the lobby 10 minutes before the match starts.",
        "Teams must consist of 4 players; no substitutes allowed during the tournament.",
        "Unsportsmanlike behavior (e.g., abusive language, team-killing) is not tolerated.",
        "No restarts for individual disconnections; matches will proceed as scheduled.",
      ],
    },
    {
      title: "Disqualification Criteria",
      details: [
        "Use of cheats, hacks, or third-party software.",
        "Teaming with other teams.",
        "Failure to join the match lobby on time.",
        "Multiple warnings for unsportsmanlike behavior.",
      ],
    },
    {
      title: "Prize Distribution",
      details: [
        "Prizes will be awarded to the top 3 teams based on final standings.",
      ],
    },
    {
      title: "Organizer’s Decision",
      details: [
        "The organizer’s decision is final in all disputes.",
        "Rules may be adjusted if necessary for fair gameplay.",
      ],
    },
  ];

  return (
    <section
      className="rules-section py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
      aria-labelledby="tournament-rules-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="tournament-rules-title"
          className="text-4xl font-bold text-center mb-12 font-audio text-cyan-400"
        >
          Tournament Rules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-400/50"
              role="region"
              aria-labelledby={`rule-title-${index}`}
            >
              <div
                className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
              <h3
                id={`rule-title-${index}`}
                className="relative text-xl font-audio font-bold mb-4 group-hover:text-cyan-300"
              >
                {rule.title}
              </h3>
              <ul className="relative space-y-2 font-mono text-gray-300 group-hover:text-white">
                {rule.details.map((detail, i) => (
                  <li key={i} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
