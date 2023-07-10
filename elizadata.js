// start of file - elizadata.js
// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

// "use strict";

exports.elizaInitials = [
  "How do you do.  Please tell me your problem.",
  "1.Type 'Water' for water related problem.",
  "2.Type 'Electricity' for electricity related problem.",
  "3.Type 'House Maintenance' for house maintenance related problem.",
  "4.Type 'Animal' for animal related problem.",
  // additions (not original)
];

exports.elizaFinals = [
  "Water",
  "water",
  "electricity",
  "Electricity",
  "House Maintenance",
  "house maintenance",
  "animal",
  "Animal",
  exports.elizaQuits = [
    "Thank You! Your complaint has been registered.",
  ],

  // exports.elizaPres = [
  // 	"dont", "don't",
  // 	"cant", "can't",
  // 	"wont", "won't",
  // 	"recollect", "remember",
  // 	"recall", "remember",
  // 	"dreamt", "dreamed",
  // 	"dreams", "dream",
  // 	"maybe", "perhaps",
  // 	"certainly", "yes",
  // 	"machine", "computer",
  // 	"machines", "computer",
  // 	"computers", "computer",
  // 	"were", "was",
  // 	"you're", "you are",
  // 	"i'm", "i am",
  // 	"same", "alike",
  // 	"identical", "alike",
  // 	"equivalent", "alike"
  // ];

  // exports.elizaPosts = [
  // 	"am", "are",
  // 	"your", "my",
  // 	"me", "you",
  // 	"myself", "yourself",
  // 	"yourself", "myself",
  // 	"i", "you",
  // 	"you", "I",
  // 	"my", "your",
  // 	"i'm", "you are"
  // ];



  exports.elizaKeywords = [

    /*
     Array of
     ["<key>", <rank>, [
     ["<decomp>", [
     "<reasmb>",
     "<reasmb>",
     "<reasmb>"
     ]],
     ["<decomp>", [
     "<reasmb>",
     "<reasmb>",
     "<reasmb>"
     ]]
     ]]
     */

    ["Water", 0, [
      ["*", [
        "We will direct your complaint to the water dept. ",
      ]],
      ["Electricity", 0, [
        ["*", [
          "We will direct your complaint to the electricity dept. ",
        ]]
      ]],
      ["House Maintenance", 0, [
        ["*", [
          "We will direct your complaint to the House Maintenance dept. ",
        ]]
      ]],
      ["Animal", 0, [
        ["*", [
          "We will direct your complaint to the animal dept. ",
        ]]
      ]],
    ]],
  ]]